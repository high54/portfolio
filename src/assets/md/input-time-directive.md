## Préambule

Je développe actuellement un Agenda de type Google Agenda. Proposant presque toutes les fonctionnalités du dit agenda.

Lorsque j'ai voulus ajouter le support des heures à l'ajout de rendez-vous je me suis retrouvé face au problème du champ de type heure et minute.

Ne disposant pas d'un champ de type heure / minute adapté à mes besoins, j'ai décidé de mettre en place une directive sous Angular afin de palier à ce problème.

Cette directive a pour but de formater un champ de type texte au format : `HH:MM` et de vérifier la saisie utilisateur.


## Cahier des charges

La directive va-t-être assez simple :

- Vérifier qu'il s'agit uniquement de chiffre
- Vérifier qu'il n'y a pas plus de 4 caractères
- Ne pas dépasser 23 heures et 59 minutes
- Supporter les pays utilisant le format sur 12h (Le Royaume-Uni, L'Australie, le Canada (hors Québec) et les États-Unis)
- Ajouter deux points superposés `:` après les deux premiers chiffres
- Retourner une erreur et bloquer la validation du formulaire si le champ est mal formaté.

## Le sélecteur

Une directive fonctionne comme un `component` ou un `service`. Nous disposons d'un décorateur pour la créer :

```ts
import { Directive, HostListener, Self, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[AgendaInputTime]'
})
export class AgendaInputTimeDirective {

}
```
À savoir qu'un composant n'est rien d'autre qu'une directive.

La propriété `selector` va définir ce qui nous permettra d'utiliser la directive sur nos inputs.

Pour le nommage du sélecteur, je respect les bonnes pratiques. À savoir le nommage doit être préfixé pour le nom de l'application ou du module et en lowerCamelCase. 
Dans mon cas, j'ai préfixé avec le nom du projet `Agenda`. Cela permet d'éviter les conflits avec d'autres packages ou des attributs HTML standard.

## Connexion avec le formulaire

```ts
constructor(@Self() public ngControl: NgControl) { }

```

Afin de pouvoir retourner au formulaire si le champ est invalide nous avons besoin d'importer NgControl. Comme vous pouvez le constater, j'ai ajouté un décorateur à cette injection `@Self()`. Celui ci a pour but d'indiquer à Angular que chaque Directive doit disposer de sa propre instance de NgControl. Ainsi nous avons la possibilité de mettre plusieurs fois la directive dans un même composant/affichage/formulaire.

## Prise en charge sur 12 ou 24h

Pour la prise en charge sur 12 ou 24h je ne suis pas allé bien loin. Sans trop réfléchir à la chose, j'ai simplement mis un boolean qu'il est possible de définir via un `@Input()`.

```ts
   // Détermine si les heures sont sur 12 ou 24. Par défaut sur 24
    @Input() isEn = false;
```

## HostListener

Comme son nom l'indique l'HostListener va écouter sont hôte. Dans notre cas ce sera le champ de type texte. Mais cela peut être n'importe quel hôte, du moment qu'on lui applique la directive via le sélecteur précédemment définit.

Il est faut également de lui indiquer quel événement écouter :

```ts
@HostListener('input', ['$event'])
```
Ici j'indique que je souhaite écouter l’événement [input](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event) ainsi que récupérer la variable `$event` à chaque fois que l'événement est déclenché. Pour information [$event](https://angular.io/guide/event-binding#event-and-event-handling-statements) est une variable que renvoie automatiquement Angular lorsqu'il y a liaison une d'événement.

Directement après le décorateur `@HostListener()` j'ajoute une fonction que je nomme `onInput` en référence à l'événement que j'ai décidé d'écouter. Mais vous pouvez la nommer comme vous voulez. Cette dedans que toute la logique va-t-être appliqué.

```ts
onInput(event: KeyboardEvent) {


}
```

J'indique que la fonction prends en paramètre une variable de type `KeyboardEvent`. Celle-ci fait référence à `$event`que j'ai spécifié dans le décorateur.

### Récupération de l'événement

```ts

onInput(event: KeyboardEvent) {

    // Cast target en HTMLInputElement afin d'obtenir le typage
    const input = event.target as HTMLInputElement;

    ....
}

```
Ici je récupère la propriété `target` contenu dans l'objet `event` qui correspond à l’élément HTML sur lequel j'ai ajouté la directive. Je le cast en [HTMLInputElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLInputElement) ce qui permet d'obtenir le typage afin de plus facilement le manipuler.

### Formatage de la saisie utilisateur
```ts
onInput(event: KeyboardEvent) {

    .....

    // Supprime les deux points superposés si ils sont présent avant chaque vérification
    let trimmed = input.value.replace(':', '');
    // Si il y a de plus de 4 caractères, on bloque la saisie.
    if (trimmed.length > 4) {
        trimmed = trimmed.substr(0, 4);
    }
    // Split les nombres deux par deux dans un tableau
    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 2) {
        numbers.push(trimmed.substr(i, 2));
    }
    // Rassemble les nombres en ajoutant deux points superposés entre
    input.value = numbers.join(':');

}
```

Afin de pouvoir formater le champ il faut couper en deux la saisie utilisateur et glisser entre les sections fraîchement coupé les deux points superposés. Si les deux points sont déjà présent, on les retire.

Pour finir, le tout est remis ensemble en ajoutant le deux points entre les deux sections.

### Vérification de la saisie utilisateur

```ts
onInput(event: KeyboardEvent) {
    
    ....
    ....

    /**
     * Effectue toutes les vérifications dans une ternaire.
     * 1 - Si la saisie ne correspond pas à des nombres (regex)
     * 2 - Si le champ est sale et que la saisie est null
     * 3 - Si le champ est sale et que la saisie est inférieur à 4
     * 4 - Si les heures sont supérieur à 12 pour les (US, UK, CA, etc..) ou 23
     * 5 - Si les minutes sont supérieur à 59
     * Alors on passe le champ à invalide
     * Sinon pas d'erreur, on passe les erreurs à null
     */
    this.ngControl.control.setErrors(
            /[^\d+$]/.test(trimmed) ||
                (trimmed.length === 0 ||
                    trimmed.length < 4) &&
                this.ngControl.dirty ||
                parseInt(trimmed.substr(0, 2), 10) > (this.isEn ? 12 : 23) ||
                parseInt(trimmed.substr(2, 4), 10) > 59 ?
                { 'invalid': true } : null
        );

}
```
Pour terminé, les vérifications sont placé dans une seule ternaire qui retourne invalide si la saisie ne respect pas les conditions ou null si il n'y a pas d'erreur.

## Code complet

```ts

import { Directive, HostListener, Self, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
/**
 *
 * # Attribute Directive
 *
 * ## Input Time
 *
 * - Contrôle la saisie utilisateur
 * - Formate le champ : HH:MM
 * - Met le champ invalide en cas d'erreur
 * - Supporte les pays au format 12h (US, UK,CA, AUS)
 * 
 * <input type="text" agendaInputTime [isEn]="true">
 * 
 *
 * Par défaut isEn est à false, la directive est donc sur 24h.
 *
 */
@Directive({
    selector: '[agendaInputTime]'
})
export class AgendaInputTimeDirective {

    constructor(@Self() public ngControl: NgControl) { }
    // Détermine si les heures sont sur 12 ou 24. Par défaut sur 24
    @Input() isEn = false;

    @HostListener('input', ['$event'])
    onInput(event: KeyboardEvent) {
        // Cast target en HTMLInputElement afin d'obtenir le typage
        const input = event.target as HTMLInputElement;
        // Supprime les deux points superposés si ils sont présent avant chaque vérification
        let trimmed = input.value.replace(':', '');
        // Si il y a de plus de 4 caractères, on bloque la saisie.
        if (trimmed.length > 4) {
            trimmed = trimmed.substr(0, 4);
        }
        // Split les nombres deux par deux dans un tableau
        const numbers = [];
        for (let i = 0; i < trimmed.length; i += 2) {
            numbers.push(trimmed.substr(i, 2));
        }
        // Rassemble les nombres en ajoutant deux points superposés entre
        input.value = numbers.join(':');
        /**
         * Effectue toutes les vérifications dans une ternaire.
         * 1 - Si la saisie ne correspond pas à des nombres (regex)
         * 2 - Si le champ est sale et que la saisie est null
         * 3 - Si le champ est sale et que la saisie est inférieur à 4
         * 4 - Si les heures sont supérieur à 12 pour les (US, UK, CA, etc..) ou 23
         * 5 - Si les minutes sont supérieur à 59
         * Alors on passe le champ à invalide
         * Sinon pas d'erreur, on passe les erreurs à null
         */
        this.ngControl.control.setErrors(
            /[^\d+$]/.test(trimmed) ||
                (trimmed.length === 0 ||
                    trimmed.length < 4) &&
                this.ngControl.dirty ||
                parseInt(trimmed.substr(0, 2), 10) > (this.isEn ? 12 : 23) ||
                parseInt(trimmed.substr(2, 4), 10) > 59 ?
                { 'invalid': true } : null
        );
    }
}

```
[Code source GitHub](https://github.com/high54/angular-input-time-directive)

## Ressources documentaire

- [Check whether a string contains only numbers](https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers)
- [Angular attribute directives](https://angular.io/guide/attribute-directives)
- [Angular NgControl](https://angular.io/api/forms/NgControl)