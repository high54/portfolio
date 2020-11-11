# Création d'une application

# mobile de gestion de collection

## Initiation aux bases de données avec AMS

## Par Julien Bertacco

```
Date de publication : 8 juin 2017
```
La plate-forme ZetaPush permet de réaliser toutes vos applications connectées à un coût

maîtrisé en s'affranchissant :

. de l'hébergement ;
. du développement des API nécessaires au bon fonctionnement des applications ;
. de la gestion, de la maintenance et de la montée en charge des serveurs.

**Commentez**


## - 2 -

```
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
```



## I - Introduction

Dans ce tutoriel, je vais vous présenter la manière de gérer les bases de données avec ZetaPush, et à titre d'exemple,

comment réaliser une application pour mobile de gestion de collection : Mangas, vidéos, BD, albums, etc.

Vous allez réaliser cette application grâce au langage de programmation intégré à ZetaPush, c'est-à-dire ZMS

(ZetaPush Macro Script) et Ionic.

Voici le résultat que vous devriez obtenir à la fin de ce tutoriel :

## Cliquer sur ce lien pour lancer l'animation

L'intégralité du contenu de l'application fonctionnelle est disponible sur GitHub : **https://github.com/high54/**

**Mangatheque**

Tout d'abord, il est important de mettre en place l'espace de travail.

## II - Mise en place de l'environnement de travail

### II-A - Les IDE

Il est possible de tout réaliser à l'aide d'Eclipse, cependant je préfère travailler sur Atom pour le développement en

TypeScript.

Je vous conseille donc d'installer **Atom** et d'ajouter les packages atom-beautify et atom-typescript ainsi que les

dépendances.

Pour la partie ZMS, on utilisera **Eclipse** Mars 2 ou plus récent. Il est important de disposer de **JDK 1.8** sur votre

machine!

Une fois Eclipse en place, rendez-vous dans Help -> Install New Software...

En haut à droite, cliquez sur Add... puis saisissez les informations suivantes :

- Name : ZMS
- Location : https://zms-site.zetapush.com/releases/

Ensuite, cliquez sur Select ALL et Next, finissez l'installation et vous devriez avoir un nouveau menu :

### II-B - Node.Js et Ionic 3

Veuillez télécharger et installer **Node.Js**. Je vous conseille de prendre la version stable.

Une fois Node installé, on utilisera l'invite de commandes Windows afin d'installer Ionic.

Ionic est une surcouche d'Angular 4. Si vous avez déjà réalisé des projets sous Angular, ceci est tout à votre avantage!

Pour notre projet, on aura besoin d'un dossier de travail. Pour ma part, j'ai placé à la racine du disque principal un

dossier nommé Workspace dans lequel j'ai ensuite créé un dossier nommé ionic. Rendez-vous dans votre dossier

de travail et restez appuyé sur CTRL+SHIFT+ clic droit. Dans le menu contextuel, choisissez **Ouvrir une fenêtre**

**de commandes ici.**

Pour installer Ionic via NPM, exécutez la commande suivante :

- 3 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


```
npm install -g cordova ionic
```
Une fois Ionic installé, vous allez créer votre projet à partir d'un template existant de Ionic :

```
ionic start MonAppTuto blank --v
```
Cette commande va créer un nouveau dossier du nom de votre application et y installer tout ce qui est nécessaire.

Pour la suite du tutoriel, placez-vous en ligne de commande dans le dossier de l'application :

```
cd MonAppTuto
```
Avant de démarrer votre projet sous Ionic, il est important d'installer l'API de ZetaPush :

```
npm install zetapush-js -save
npm install zetapush-angular --save
```
La documentation fournit beaucoup d'exemples : **Documentation API for JavaScript**

Rendez-vous dans le dossier où est installé le projet, puis dans le dossier src afin de modifier le fichier

declarations.d.ts.

Il faut déclarer les modules utilisés, pour cela remplacez le fichier declaration.d.ts situé dans le dossier src avec celui

disponible sur **GitHub**.

Une fois les manipulations terminées, exécutez la commande suivante :

```
ionic serve --lab
```
Cette commande va démarrer le serveur et permettre d'avoir un rendu en temps réel de l'application depuis votre

navigateur web. À chaque sauvegarde d'un fichier, l'affichage sera automatiquement mis à jour.

C'est d'ailleurs votre navigateur qui doit s'ouvrir à l'instant. Il vous est possible de choisir en haut à droite le rendu

sous les différents OS pour smartphone pris en charge par Ionic.

### II-C - Création du projet sous Eclipse

Dans un premier temps, il va vous falloir un identifiant et pour cela il suffit de créer un compte gratuitement sur

**ZetaPush**. Une fois votre compte créé, rendez-vous dans l'administration et dans le menu de gauche All Sandboxes.

Cliquez ensuite sur le signe + au centre de la page pour ajouter une sandbox. Entrez les informations Nom et

Description puis dans Cluster, choisissez free.

Il ne vous reste plus qu'à récupérer l'id de votre Sandbox :

- 4 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


Une fois vos informations de connexion à ZetaPush et votre SendBox ID récupérés, vous pouvez créer un nouveau

projet sous Eclipse,

File → New → Other → ZetaPush → ZMS Recipe

Remplissez les informations Developper login et password avec vos informations de connexion à l'administration du

site ZetaPush et la SandBox ID que vous venez de récupérer.

Pour le Recipe Name, j'ai choisi de mettre : com,whyme,apptuto

- Server Type : STD

Sélectionnez le service à inclure, ici RDBMS pour Relational Database : SQL storage

## III - Mise en place de la base de données

Inutile de chercher un hébergement de base de données en ligne. Vous allez utiliser celui proposé par ZetaPush. Il

est aussi possible d'utiliser du NoSQL, mais on restera sur du classique SQL.

### III-A - Architecture de la base de données

Pour gérer votre collection, il vous faudra des articles, des BD, Mangas, vidéos, etc.

On utilisera des Mangas pour cette collection.

Voici les tables de la Mangathèque :

```
Mangas Séries
Identifiant unique
Titre
Tome
Résumé
Identifiant de la série
Est-il lu
Est-il acquis
```
```
Identifiant unique
Nom
Résumé
```
Voici globalement les tables nécessaires afin de réaliser l'application.

### III-B - Création des tables

Pour créer les tables sous ZMS, c'est très simple!

Les services dont vous allez avoir besoin ont été directement créés lors de la configuration du projet sous Eclipse.

C'est d'ailleurs dans cet éditeur que vous allez créer les tables. Pour cela, rendez-vous dans le fichier init.zms, c'est

lui qui va permettre de configurer la base de données. Vous pouvez supprimer tout son contenu, vous n'en avez pas

besoin, il est présent pour vous fournir des exemples d'utilisation prêts à l'emploi.

Le service de base de données étant créé dans le fichier recipe.zms, vous pouvez y faire appel :

``` java
database.rdbms_ddl({statement :'NOTRE CODE ICI'}) ;
```
- 5 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


C'est donc dans ces simples quotes que les requêtes SQL seront effectuées comme sur un serveur classique.

Voici le code de création des tables :

``` java
database.rdbms_ddl({statement : '
CREATE TABLE IF NOT EXISTS mangas (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
titre VARCHAR(150) NOT NULL,
tome INT NOT NULL,
resume TEXT NULL,
idSerie INT NOT NULL,
isLu TINYINT(1) NOT NULL,
isAcquis TINYINT(1) NOT NULL
)'});
```
``` java
database.rdbms_ddl({statement : '
CREATE TABLE IF NOT EXISTS series (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
nom VARCHAR(150) NOT NULL,
resume TEXT NULL
)'});
```
Il ne reste plus qu'à déployer le code sur le serveur via le bouton rouge en forme de fusée dans la barre d'outils :

Si tout s'est bien passé, vous devriez avoir dans la console un joli success :

#### [INFO] ***************************

#### [INFO] ** SUCCESS **

#### [INFO] ***************************

ZetaPush a déployé pour vous une base de données dans laquelle vos tables ont été créées.

## IV - Ajout - Récupération - Mise à jour et Suppression

### IV-A - ZetaPush MacroScript - ZMS

Maintenant que vous avez votre base de données, il est temps de mettre en place votre CRUD (Create, Read, Update,

Delete). Pour cela, créez un nouveau fichier sous Eclipse dans le dossier src de votre projet.

Clic droit sur le dossier src -> New -> File.

- File name : MangaMacro.zms

N'oubliez pas l'extension du fichier en .zms!

Vous allez créer des MacroScripts pour chacune des méthodes du CRUD.

Voici la base d'une MacroScript :

``` java
macroscript NomDeLaMethode()
{

}
```
N'hésitez surtout pas à vous rendre sur la **documentation de ZetaPush**.

- 6 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


Et voici les macros pour tout le CRUD des Mangas.

Pour plus de lisibilité, j'ai volontairement fait des retours à la ligne après certains paramètres.

#### /**

``` java
* Ajout d'un nouveau manga dans la base de données
*/
macroscript MangaInsert(
@NotNull string titre,
@NotNull number tome,
string resume,
@NotNull number idSerie,
@NotNull boolean isLu,
@NotNull boolean isAcquis
)
{
@@(database) INSERT INTO mangas (titre,tome,resume,idSerie,isLu,isAcquis) VALUES (:{titre},:
{tome},:{resume},:{idSerie},:{isLu},:{isAcquis});
var id = @@(database) SELECT id FROM mangas WHERE id= LAST_INSERT_ID();
} return { id }
```
``` java
/**
* Récupération de tous les mangas d'une série
*/
macroscript MangaGetAll(@NotNull number idSerie)
{
var mangas = @@(database) SELECT * FROM mangas WHERE idSerie = :{idSerie};
} return { mangas }
```
``` java
/**
* Récupération d'un manga via son identifiant unique
*/
macroscript MangaGetById(@NotNull number idManga)
{
var manga = @@(database) SELECT * FROM mangas WHERE id = :{idManga};
} return { manga }
```
``` java
/**
* Mise à jour d'un manga
*/
macroscript MangaUpdateById(@NotNull number idManga,
@NotNull string titre,
@NotNull number tome,
string resume,
@NotNull number idSerie,
@NotNull boolean isLu,
@NotNull boolean isAcquis
)
{
@@(database) UPDATE mangas SET titre = :{titre}, tome = :{tome}, resume = :{resume}
,idSerie=:{idSerie},isLu = :{isLu}, isAcquis=:{isAcquis}
WHERE id = :{idManga};
}
/**
* Suppression d'un manga
*/
macroscript MangaDeleteById(@NotNull number idManga)
{
@@(database) DELETE FROM mangas WHERE id = :{idManga};
}
```
On réalise toutes les opérations de base, c'est-à-dire : l'ajout, la modification, la lecture et la suppression de données

dans la base de données.

Comme vous pouvez le remarquer, il est possible de typer les paramètres (string, number, boolean) et de mettre des

annotations comme @NotNull afin de rendre le paramètre obligatoire.

- 7 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


Plus de détails sur les annotations et les Macros : **https://ref.zpush.io/** , un petit CTRL + F sur la page avec comme

recherche @NotNull, vous y trouverez un tableau des différentes annotations, ainsi qu'un exemple pour réaliser les

vôtres!

En ce qui concerne les variables, pour les inclure dans les requêtes SQL, on les encapsule **:** {variable}.

L'utilisation du service de base de données est indiquée de la manière suivante :@@(database) suivi de la requête

SQL.

On récupère les informations dans INSERT et SELECT via une variable classique var maVariable =...**.**

Pour retourner les informations, on utilisera simplement un return { maVariable }. Cela renvoie les données à l'appareil

qui en a fait la demande. Pour renvoyer les données à tous les appareils connectés d'un utilisateur, il suffit de

remplacer return par broadcast{ maVariable }.

Il est possible d'utiliser on channel __selfname ou 'NomDuneAutreMacro'. Mais pour plus de détails, consultez la

documentation : **https://ref.zpush.io/#main_macros_Syntax**.

L'intégralité des Macros de l'application est disponible sur **GitHub / ZMS**.

### IV-B - Modèles

Maintenant que vous avez vos Macros, il est nécessaire d'avoir des modèles.

Sous Atom, créez un nouveau dossier à la base de src nommé models. Vous pouvez directement créer les fichiers

manga-model.ts et serie-model.ts.

Voici le contenu de manga-model.ts :

``` typescript
Manga-model.ts
export class MangaModel {
/**
* Properties
*/
private id: number;
private titre: string;
private tome: number;
private resume: string;
private idSerie: number;
private isLu: boolean;
private isAcquis: boolean;
```
#### /**

``` typescript
* Getter
*/
public GetId(): number {
return this .id
}
public GetTitre(): string {
return this .titre;
}
public GetTome(): number {
return this .tome;
}
public GetIdSerie(): number {
return this .idSerie;
}
public GetIsLu(): boolean {
return this .isLu;
}
```
- 8 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` typescript
Manga-model.ts
public GetIsAcquis(): boolean {
return this .isAcquis;
}
```
``` typescript
/**
* Setter
*/
public SetId(id: number) {
this .id = id;
}
public SetTitre(titre: string) {
this .titre = titre;
}
public SetTome(tome: number) {
this .tome = tome;
}
public SetIdSerie(idSerie: number) {
this .idSerie = idSerie;
}
public SetIsLu(isLu: boolean) {
this .isLu = isLu;
}
public SetIsAcquis(isAcquis: boolean) {
this .isAcquis = isAcquis;
}
```
``` typescript
public constructor () {}
}
```
Il s'agit d'un modèle classique, rien de particulier ici.

Voici le modèle pour les séries :

``` typescript
Serie-model.ts
export class SerieModel {
/**
* Properties
*/
private id: number;
private nom: string;
private resume: string;
```
``` typescript
/**
* Getter
*/
public GetId(): number {
return this .id;
}
public GetNom(): string {
return this .nom;
}
public GetResume(): string {
return this .resume;
}
```
``` typescript
/**
* Setter
*/
public SetId(id: number) {
this .id = id;
}
public SetNom(nom: string) {
this .nom = nom;
}
public SetResume(resume: string) {
this .resume = resume;
}
```
- 9 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` typescript
Serie-model.ts
public constructor () { }
}
```
Tous les modèles sont disponibles dans **src / models du GitHub**.

### IV-C - Providers

Il est temps de lier les MacroScripts à votre application.

Afin de pouvoir traiter vos données avec la base de données, vous allez créer des Providers.

Pour plus de clarté, chaque objet aura son Provider. Dans une invite de commandes, exécutez les lignes de

commandes suivantes :

```
ionic g provider manga-provider
ionic g provider serie-provider
ionic g provider client-provider
```
Les Providers ont été créés dans le dossier providers.

Vous pouvez supprimer le contenu, vous allez éditer votre propre provider.

``` typescript
Serie-provider.ts
import { services } from 'zetapush-js';
```
``` typescript
export class SerieProvider extends services.Macro {
```
``` typescript
SerieInsert(nom, resume) {
return this .$publish('SerieInsert', { nom, resume });
}
SerieGetAll() {
return this .$publish('SerieGetAll', {});
}
SerieGetById(idSerie) {
return this .$publish('SerieGetById', { idSerie });
}
SerieUpdateById(idSerie, nom, resume) {
this .$publish('SerieUpdateById', { idSerie, nom, resume })
}
SerieDeleteById(idSerie) {
this .$publish('SerieDeleteById', { idSerie });
}
}
```
``` typescript
Manga-provider.ts
import { services } from 'zetapush-js';
```
``` typescript
export class MangaProvider extends services.Macro {
```
``` typescript
MangaInsert(titre, tome, resume, idSerie, isLu, isAcquis) {
return this .$publish('MangaInsert', { titre, tome, resume, idSerie, isLu, isAcquis });
}
MangaGetAll(idSerie) {
return this .$publish('MangaGetAll', { idSerie });
}
MangaGetById(idManga) {
return this .$publish('MangaGetById', { idManga })
}
MangaUpdateById(idManga, titre, tome, resume, idSerie, isLu, isAcquis) {
this .$publish('MangaUpdateById', { idManga, titre, tome, resume, idSerie, isLu, isAcquis });
}
```
- 10 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` typescript
Manga-provider.ts
MangaDeleteById(idManga) {
this .$publish('MangaDeleteById', { idManga })
}
}
```
Voici le schéma type des providers. Tout d'abord, on importe le module **services** de ZetaPush, puis votre class étend

celle des Macros de services.

Ensuite, on crée des méthodes MangaInsert(), etc. Celles-ci prennent les mêmes paramètres que les Macros.

Dans ces méthodes, si vous avez des informations à renvoyer à votre application, par exemple tous les mangas et

les séries, vous utilisez simplement un return, ce qui permettra de souscrire à ces méthodes dans l'attente du retour

des informations.

Ensuite, on utilise this.$publish() afin de faire appel aux services de ZetaPush avec comme paramètre le nom de

la Macro visée 'MaMacro' entre guillemets. Après la virgule, un tableau avec vos paramètres à renvoyer : {param1,

param2, param3}, etc.

Vous avez besoin d'un Singleton pour vous connecter à ZetaPush, on en fait aussi un provider :

``` typescript
import { SmartClient } from 'zetapush-js';
```
``` typescript
export class ClientProvider {
client: SmartClient;
```
``` typescript
public getInstance() {
if ( typeof this .client === "undefined" && this .client == null) {
this .client = new SmartClient({
sandboxId: 'MA SANDBOX ID',
apiUrl: 'https://api.zpush.io/'
})
}
return this .client;
}
}
```
Le Client va vous permettre de vous connecter à ZetaPush et de vous identifier aux services via un identifiant unique

autogénéré par le service.

Il prend en paramètre l'id de votre sandbox ainsi que l'url de l'API de ZetaPush.

En ce qui concerne le ClientProvider, vous devez le déclarer dans le fichier app/app.module.ts :

``` typescript
import { ClientProvider } from '../providers/client-provider';
```
``` typescript
providers: [
```
``` typescript
ClientProvider,
```
``` typescript
]
```
Tous les providers sont disponibles sur **src / providers GitHub**.

## V - Interface Utilisateur : Gestion des séries

Vous avez principalement configuré votre espace de travail et mis en place la communication avec la base de

données. Maintenant, il est temps de mettre en place votre interface utilisateur.

- 11 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


### V-A - Page Home

La page Home va vous permettre d'afficher la liste des séries ainsi qu'un bouton renvoyant sur une page avec un

formulaire d'ajout de série :

``` typescript
home.ts
import { Component } from '@angular/core';
// Import des composants de Ionic
import { NavController, MenuController, ModalController, AlertController } from 'ionic-angular';
```
``` typescript
// Import du model des séries ainsi que du provider
import { SerieModel } from '../../models/serie-model';
import { SerieProvider } from '../../providers/serie-provider';
```
``` typescript
// Import du client afin d'établir une connexion avec ZetaPush
import { ClientProvider } from '../../providers/client-provider';
```
``` typescript
// Import des pages ou nous redirigerons l'utilisateur
import { AddSeriePage } from '../add-serie/add-serie';
import { UpdateSeriePage } from '../update-serie/update-serie';
import { MangasPage } from '../mangas/mangas';
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
```
``` typescript
/**
* Création d'une variable service utilisant notre provider Serie
* utilisant une instance de client pour créer un service Async
* À l'heure actuelle il est important de caster le service en provider
*/
private serieService = this .client.getInstance().createAsyncMacroService({
Type: SerieProvider,
deploymentId: 'macro_0'
}) as SerieProvider;
private series: SerieModel[] = new Array<SerieModel>();
private groupedSeries = [];
```
``` typescript
constructor ( public navCtrl: NavController, private client: ClientProvider, private menu:
MenuController, private modalCtrl: ModalController, public alertCtrl: AlertController) {
this .client.getInstance().connect();
this .menu.enable(false);
this .connect();
}
```
``` typescript
showManga(serie) {
this .navCtrl.push(MangasPage, { serie: serie });
}
addSerie() {
let modal = this .modalCtrl.create(AddSeriePage);
modal.present();
modal.onDidDismiss((serie) => {
```
``` typescript
if (serie !== undefined) {
this .series.push(serie);
this .groupSerie( this .series);
}
})
}
showSerie() {
if ( this .client.getInstance().isConnected()) {
this .menu.enable(true);
this .series = new Array<SerieModel>();
this .serieService.SerieGetAll().then((result) => {
for ( let serie of result.series) {
let newSerie = new SerieModel();
newSerie.SetId(serie.id);
newSerie.SetNom(serie.nom);
```
- 12 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` typescript
home.ts
newSerie.SetResume(serie.resume);
this .series.push(newSerie);
}
this .groupSerie( this .series);
}).catch((error) => {
console.error(error);
});
}
}
connect() {
this .client.getInstance().addConnectionStatusListener({
onConnectionEstablished: () => {
this .showSerie();
},
onFailedHandshake: error => {
console.error(error)
},
onConnectionClosed: () => {
this .client.getInstance().connect();
}
});
}
editSerie(serie) {
let modal = this .modalCtrl.create(UpdateSeriePage, { serie: serie });
modal.present();
}
deleteSerie(serie: SerieModel) {
let index = this .series.indexOf(serie);
if (index > -1) {
this .series.splice(index, 1);
this .groupSerie( this .series);
}
this .serieService.SerieDeleteById(serie.GetId());
}
groupSerie(series) {
this .groupedSeries = [];
let sortedSeries = series.sort((a, b) => {
if (a.GetNom() < b.GetNom()) {
return -1;
}
if (a.GetNom() > b.GetNom()) {
return 1;
}
return 0;
});
let currentLetter;
let currentSeries = [];
```
``` typescript
sortedSeries.forEach((value, index) => {
if (value.GetNom().charAt(0) != currentLetter) {
currentLetter = value.GetNom().charAt(0);
let newGroup = {
letter: currentLetter,
series: []
};
currentSeries = newGroup.series;
this .groupedSeries.push(newGroup);
}
currentSeries.push(value);
});
}
showConfirm(serie) {
let confirm = this .alertCtrl.create({
title: 'Voulez-vous supprimer cette série ainsi que tous les mangas ?',
message: serie.GetNom(),
buttons: [
{
text: 'Annuler',
handler: () => {

}
```
- 13 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` typescript
home.ts
},
{
text: 'Supprimer',
handler: () => {
this .deleteSerie(serie)
}
}
]
});
confirm.present();
}

}
```
Tout d'abord, on importe ce dont on a besoin. Model, Provider et Client de connexion. Ensuite, vous déclarez une

variable serieService dans votre classe faisant référence à votre provider-Singleton Client afin de créer un service

Asynchrone. Celui-ci prend en paramètre le type de service, ici : SerieProvider et le nom du service côté ZetaPush,

ici on utilisera le service de Macro : 'macro_0'.

À l'heure actuelle, il est important de caster votre variable service en Provider : as SerieProvider.

serieService va vous permettre d'appeler toutes vos méthodes du Provider.

Ensuite, on déclare dans le constructeur le Client Provider : (private client : ClientProvider) et on l'utilise directement

afin de se connecter à ZetaPush : this.client.getInstance().connect();

- addSerie() : permet d'afficher la surcouche avec le formulaire d'ajout d'une nouvelle série.
- groupSerie() : trie et regroupe les séries par ordre alphabétique pour l'affichage.
- showSerie() : effectue l'appel à la macro SerieGetAll(). Grâce à Then(), vous souscrivez, et les données sont

traitées dans l'application dès leur réception.

- editSerie() : affiche la surcouche pour modifier une série.
- deleteSerie() : supprime une série.

``` html
home.html
<ion-header>
<ion-navbar>
<button ion-button menuToggle>
<ion-icon name="menu"></ion-icon>
</button>
<ion-title>Mangathèque</ion-title>
<ion-buttons end>
<button ion-button icon-only (click)="addSerie()"><ion-icon name="add"></ion-icon></button>
</ion-buttons>
</ion-navbar>
</ion-header>

<ion-content padding>
<ion-list>
<ion-item-group *ngFor="let group of groupedSeries">
<ion-item-divider color="light">{{group.letter}}</ion-item-divider>
<ion-item-sliding *ngFor="let serie of group.series">

<ion-item (click)="showManga(serie)">
{{serie.nom}}
</ion-item>

<ion-item-options>

<button ion-button icon-only (click)="editSerie(serie)" color="light">
<ion-icon name="paper"></ion-icon>
</button>

<button ion-button icon-only (click)="showConfirm(serie)" color="danger">
<ion-icon name="trash"></ion-icon>
```
- 14 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


```
home.html
</button>

</ion-item-options>

</ion-item-sliding>
</ion-item-group>
</ion-list>

</ion-content>
```
Voici le résultat que vous devriez avoir :

### V-B - Ajout de série

Pour chaque ajout de page qui sera faite à l'avenir, il est important de faire la déclaration dans le fichier src/app/

app.module.ts.

On va générer une nouvelle page afin de permettre l'ajout de série à l'utilisateur :

```
Ionic g page add-serie-page
```
Une fois la commande exécutée, veuillez ajouter la page dans le fichier app.module.ts.

### V-C - Déclaration d'une page dans le fichier app.module.ts

Effectuez l'import de cette page :

``` typescript
import { AddSeriePage } from '../pages/add-serie/add-serie';
```
Ensuite, ajoutez la page dans declarations et entryComponents :

``` typescript
declarations: [
....
AddSeriePage,
....
],
entryComponents: [
....
```
- 15 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


```
AddSeriePage,
```
```
],
```
### V-D - Erreur lors de la génération d'une page sous Ionic 3

À l'heure actuelle, lors de la génération d'une page avec Ionic 3, il est possible de rencontrer une erreur dans le fichier

ma-page.module.ts situé dans le dossier de la page.

Dans ce cas, veuillez procéder ainsi :

1 - Remplacez l'import du module IonicModule par IonicPageModule comme ceci :

``` typescript
import { IonicPageModule } from 'ionic-angular';
```
2 - Puis modifiez le nom du module dans la partie @NgModule imports.

``` typescript
imports: [
IonicPageModule.forChild(MaPage),
],
```
Je ne reviendrais pas sur la déclaration d'une page ou la correction du bogue lors de la génération. N'oubliez surtout

pas la déclaration pour chacune des pages que vous générerez!

Voici enfin le contenu de la page add série :

``` typescript
add-serie-page.ts
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// Import du model des séries ainsi que du provider
import { SerieModel } from '../../models/serie-model';
import { SerieProvider } from '../../providers/serie-provider';

// Import du client afin d'établir une connexion avec ZetaPush
import { ClientProvider } from '../../providers/client-provider';

@IonicPage()
@Component({
selector: 'page-add-serie',
templateUrl: 'add-serie.html',
})
export class AddSeriePage {
private serieService = this .client.getInstance().createAsyncMacroService({
Type: SerieProvider,
deploymentId: 'macro_0'
}) as SerieProvider;
private nom: string = "";
private resume: string = "";

constructor ( public navCtrl: NavController, public navParams: NavParams, private viewCtrl:
ViewController, private client: ClientProvider) {
}

saveSerie() {
if ( this .nom.length > 0) {
let serie = new SerieModel();
serie.SetNom( this .nom);
serie.SetResume( this .resume);
this .serieService.SerieInsert(serie.GetNom(), serie.GetResume()).then((result) => {
serie.SetId(result.id[0].id);
this .viewCtrl.dismiss(serie);
}).catch((error) => {
console.error(error, "Erreur lors du Serie Insert - Page add-serie.ts");
```
- 16 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` typescript
add-serie-page.ts
});

}
}
dismiss() {
this .viewCtrl.dismiss();
}
}
```
``` html
Add-serie-page.html
<ion-header>

<ion-navbar>
<ion-title>Ajouter une série</ion-title>
<ion-buttons start>
<button ion-button (click)="dismiss()">
<span ion-text color="primary" showWhen="ios">Cancel</span>
<ion-icon name="md-close" showWhen="android,windows"></ion-icon>
</button>
</ion-buttons>
</ion-navbar>

</ion-header>

<ion-content padding>
<ion-item>
<ion-label>Nom</ion-label>
<ion-input type="text" [(ngModel)]="nom" name="nom"></ion-input>
</ion-item>
<ion-item>
<ion-label>Resumé</ion-label>
<ion-input type="text" name="resume"></ion-input>
</ion-item>
<button ion-button block (click)="saveSerie()">Enregistrer</button>
<button ion-button color="danger" block (click)="dismiss()">Annuler</button>
</ion-content>
```
Cette page fournit un formulaire permettant l'ajout d'une série. Rien de particulier, la méthode principale qui permet

la sauvegarde en base de données renvoie lors de la fermeture de la surcouche un objet Serie afin de l'ajouter à la

liste et rafraîchir l'affichage. Cela évite de devoir faire appel de nouveau à la base de données.

### V-E - Mise à jour d'une série

L'utilisateur n'est jamais parfait! Il est donc indispensable de lui proposer un formulaire pour modifier une série s'il a

une erreur lors de la création. Ou tout simplement parce qu'il a fait un oubli.

```
ionic g page update-serie-page
```
``` typescript
Update-serie-page.ts
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { SerieModel } from '../../models/serie-model';
import { SerieProvider } from '../../providers/serie-provider';

// Import du client afin d'établir une connexion avec ZetaPush
import { ClientProvider } from '../../providers/client-provider';
@IonicPage()
@Component({
selector: 'page-update-serie',
templateUrl: 'update-serie.html',
})
export class UpdateSeriePage {
```
- 17 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` typescript
Update-serie-page.ts
private serie: SerieModel = new SerieModel();
private nom: string = "";
private resume: string = "";
private serieService = this .client.getInstance().createAsyncMacroService({
Type: SerieProvider,
deploymentId: 'macro_0'
}) as SerieProvider;
constructor ( public navCtrl: NavController, public navParams: NavParams, private viewCtrl:
ViewController, private client: ClientProvider) {
this .serie = this .navParams. get ('serie');
this .nom = this .serie.GetNom();
this .resume = this .serie.GetResume();
}
saveSerie() {
this .serie.SetNom( this .nom);
this .serie.SetResume( this .resume);

this .serieService.SerieUpdateById( this .serie.GetId(), this .serie.GetNom(), this .serie.GetResume());
this .viewCtrl.dismiss( this .serie);
}
dismiss() {
this .viewCtrl.dismiss();
}
}
```
``` html
Update-serie.html
<ion-header>

<ion-navbar>
<ion-title>Editer une série</ion-title>
<ion-buttons start>
<button ion-button (click)="dismiss()">
<span ion-text color="primary" showWhen="ios">Cancel</span>
<ion-icon name="md-close" showWhen="android,windows"></ion-icon>
</button>
</ion-buttons>
</ion-navbar>

</ion-header>

<ion-content padding>
<ion-item>
<ion-label>Nom</ion-label>
<ion-input type="text" [(ngModel)]="nom" name="nom"></ion-input>
</ion-item>
<ion-item>
<ion-label>Resumé</ion-label>
<ion-input type="text" [(ngModel)]="resume" name="resume"></ion-input>
</ion-item>
<button ion-button block (click)="saveSerie()">Enregistrer</button>
<button ion-button color="danger" block (click)="dismiss()">Annuler</button>
</ion-content>
```
On affiche le même formulaire que lors de l'ajout. Cependant, on affiche les informations de la série à éditer. Pour

cela, on récupère un objet série transmis lors de l'appel de la surcouche dans la page home.ts.

La fonction principale saveSerie() est presque identique à la précédente, celle utilisée lors de l'ajout d'une série. Sauf

que celle-ci fait référence à votre MacroScript de modification d'une série (SerieUpdateById).

À ce stade, vous êtes armés pour réaliser l'ajout/modification/affichage et suppression des mangas. Mais je vous

donne tout de même le code!

- 18 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


## VI - Interface Utilisateur : Gestion des mangas

Il est temps de passer à la gestion des mangas!

### VI-A - Affichage des mangas d'une série

Tout d'abord, vous allez ajouter une page mangas :

```
ionic g page mangas-page
```
Cette page va afficher tous les mangas d'une série, les ordonner par tome, car un utilisateur peut enregistrer le tome

24 avant le tome 1 donc ordonner par id est une mauvaise idée.

Il y aura globalement les mêmes options que la gestion de série : l'ajout, la modification et la suppression.

``` typescript
mangas-page.ts
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-
angular';

// Import du client afin d'établir une connexion avec ZetaPush
import { ClientProvider } from '../../providers/client-provider';

// Import du model des mangas ainsi que du provider
import { MangaModel } from '../../models/manga-model';
import { MangaProvider } from '../../providers/manga-provider';

import { SerieModel } from '../../models/serie-model';

import { AddMangaPage } from '../add-manga/add-manga';
import { UpdateMangaPage } from '../update-manga/update-manga';
@IonicPage()
@Component({
selector: 'page-mangas',
templateUrl: 'mangas.html',
})
export class MangasPage {

/**
* Création du service pour les mangas
*/
private mangaService = this .client.getInstance().createAsyncMacroService({
Type: MangaProvider,
deploymentId: 'macro_0'
}) as MangaProvider;

private serie: SerieModel = new SerieModel();
private mangas: MangaModel[] = new Array<MangaModel>();
constructor ( public navCtrl: NavController, public navParams: NavParams, private client:
ClientProvider, private modalCtrl: ModalController, public alertCtrl: AlertController) {
this .serie = this .navParams. get ('serie');
this .showManga();
}

showManga() {
this .mangaService.MangaGetAll( this .serie.GetId()).then((result) => {
this .mangas = new Array<MangaModel>();
for ( let manga of result.mangas) {
let newManga = new MangaModel();
newManga.SetId(manga.id);
newManga.SetIsLu(manga.isLu)
newManga.SetTome(manga.tome);
newManga.SetTitre(manga.titre);
newManga.SetResume(manga.resume);
newManga.SetIdSerie(manga.idSerie);
```
- 19 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` typescript
mangas-page.ts
newManga.SetIsAcquis(manga.isAcquis);
this .mangas.push(newManga);
}
this .mangas.sort((a, b) => {
if (a.GetTome() < b.GetTome()) {
return -1;
}
if (a.GetTome() > b.GetTome()) {
return 1;
}
return 0;
})
}).catch((error) => {
console.error(error);
})
}
addManga() {
let modal = this .modalCtrl.create(AddMangaPage, { serie: this .serie, mangas: this .mangas });
modal.present();
modal.onDidDismiss((data) => {
this .showManga();
})
}
editManga(manga) {
let modal = this .modalCtrl.create(UpdateMangaPage, { manga: manga });
modal.present();
}
deleteManga(manga) {
let index = this .mangas.indexOf(manga);
if (index > -1) {
this .mangas.splice(index, 1);
}
```
``` typescript
this .mangaService.MangaDeleteById(manga.GetId());
}
```
``` typescript
showConfirm(manga) {
let confirm = this .alertCtrl.create({
title: 'Voulez-vous supprimer ce manga ?',
message: manga.GetTitre() + '<br />' + manga.GetTome(),
buttons: [
{
text: 'Annuler',
handler: () => {

}
},
{
text: 'Supprimer',
handler: () => {
this .deleteManga(manga)
}
}
]
});
confirm.present();
}

}
```
Mangas-page.html

``` html
<ion-header>

<ion-navbar>
<ion-title>{{serie.GetNom()}}</ion-title>
<ion-buttons end>
<button ion-button icon-only (click)="addManga()"><ion-icon name="add"></ion-icon></button>
</ion-buttons>
</ion-navbar>
```
- 20 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


Mangas-page.html

``` html
</ion-header>

<ion-content padding>

<ion-card *ngFor="let manga of mangas" (click)="viewManga(manga)">
<ion-item>
<h2>{{manga.titre}}</h2>
<p>Tome n° {{manga.tome}}</p>
</ion-item>
<ion-card-content>
<ion-row no-padding>
<ion-col>
<button ion-button clear small color="danger" (click)="editManga(manga)" icon-left>
<ion-icon name='paper'></ion-icon>
Edit
</button>
</ion-col>
<ion-col text-center>
<button ion-button clear small (click)="showConfirm(manga)" color="danger" icon-left>
<ion-icon name='trash'></ion-icon>
Delete
</button>
</ion-col>
</ion-row>
</ion-card-content>
</ion-card>

</ion-content>
```
### VI-B - Ajouter un manga

```
ionic g page add-manga-page
```
```  typescript
Add-manga-page.ts
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// Import du client afin d'établir une connexion avec ZetaPush
import { ClientProvider } from '../../providers/client-provider';

// Import du model des mangas ainsi que du provider
import { MangaModel } from '../../models/manga-model';
import { MangaProvider } from '../../providers/manga-provider';

// Import du model des séries
import { SerieModel } from '../../models/serie-model';

@IonicPage()
@Component({
selector: 'page-add-manga',
templateUrl: 'add-manga.html',
})
export class AddMangaPage {

private titre: string = "";
private tome: number;
private resume: string = "";
private isLu: boolean = false;
private isAcquis: boolean = false;

private manga: MangaModel = new MangaModel();
private serie: SerieModel = new SerieModel();
private mangas: MangaModel[] = new Array<MangaModel>();
private verifDoublon: boolean = false;
```
- 21 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


```  typescript
Add-manga-page.ts
private mangaService = this .client.getInstance().createAsyncMacroService({
Type: MangaProvider,
deploymentId: 'macro_0'
}) as MangaProvider;

constructor ( public navCtrl: NavController, public navParams: NavParams, private viewCtrl:
ViewController, private client: ClientProvider) {
this .serie = this .navParams. get ('serie');
this .mangas = this .navParams. get ('mangas');
}

saveManga() {
if (Number( this .tome) && this .titre.length > 2) {
this .manga.SetIsLu( this .isLu);
this .manga.SetTome( this .tome);
this .manga.SetTitre( this .titre);
this .manga.SetResume( this .resume);
this .manga.SetIdSerie( this .serie.GetId());
this .manga.SetIsAcquis( this .isAcquis);

for ( let mangaOld of this .mangas) {
if (mangaOld.GetTome() == this .manga.GetTome()) {
this .verifDoublon = true;
break;
}
else
{
this .verifDoublon = false;
}
}
if (! this .verifDoublon) {

this .mangaService.MangaInsert( this .manga.GetTitre(), this .manga.GetTome(), this .manga.GetResume(), this .manga.GetIdSerie(), this .manga.GetIsLu(), this .manga.GetIsAcquis()).then((result) => {
this .manga.SetId(result.id[0].id);
this .viewCtrl.dismiss( this .manga);
}).catch((error) => {
console.error(error, "Erreur lors du Manga Insert - Page add-manga.ts");
});
}

}
}
dismiss() {
this .viewCtrl.dismiss();
}

}
```
``` html
Add-manga-page.html
<ion-header>

<ion-navbar>
<ion-title>Ajouter un manga</ion-title>
<ion-buttons start>
<button ion-button (click)="dismiss()">
<span ion-text color="primary" showWhen="ios">Cancel</span>
<ion-icon name="md-close" showWhen="android,windows"></ion-icon>
</button>
</ion-buttons>
</ion-navbar>

</ion-header>

<ion-content padding>

<ion-item>
<ion-label>Titre</ion-label>
<ion-input type="text" [(ngModel)]="titre" name="titre"></ion-input>
</ion-item>
```
- 22 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


``` html
Add-manga-page.html
<ion-item>
<ion-label>Tome n°</ion-label>
<ion-input type="text" [(ngModel)]="tome" name="tome"></ion-input>
</ion-item>
<ion-item>
<ion-label>Résumé</ion-label>
<ion-input type="text" [(ngModel)]="resume" name="resume"></ion-input>
</ion-item>
<ion-item>
<ion-label> Déjà lu ?</ion-label>
<ion-toggle name="isLu" [(ngModel)]="isLu" checked="false"></ion-toggle>
</ion-item>
<ion-item>
<ion-label> Déjà acheté ?</ion-label>
<ion-toggle name="isAcquis" [(ngModel)]="isAcquis" checked="false"></ion-toggle>
</ion-item>
<button ion-button block (click)="saveManga()">Enregistrer</button>
<button ion-button color="danger" block (click)="dismiss()">Annuler</button>
</ion-content>
```
### VI-C - Mise à jour d'un manga

```
ionic g page update-manga-page
```
``` typescript
Update-manga-page.ts
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
// Import du client afin d'établire une connexion avec ZetaPush
import { ClientProvider } from '../../providers/client-provider';

// Import du model des mangas ainsi que du provider
import { MangaModel } from '../../models/manga-model';
import { MangaProvider } from '../../providers/manga-provider';

import { SerieModel } from '../../models/serie-model';

@IonicPage()
@Component({
selector: 'page-update-manga',
templateUrl: 'update-manga.html',
})
export class UpdateMangaPage {

private titre: string = "";
private tome: number = 1;
private resume: string = "";
private idSerie: number = 0;
private isLu: boolean = false;
private isAcquis: boolean = false;

private manga: MangaModel = new MangaModel();
private serie: SerieModel = new SerieModel();

private mangaService = this .client.getInstance().createAsyncMacroService({
Type: MangaProvider,
deploymentId: 'macro_0'
}) as MangaProvider;

constructor ( public navCtrl: NavController, public navParams: NavParams, private viewCtrl:
ViewController, private client: ClientProvider) {
this .manga = this .navParams. get ('manga');
this .titre = this .manga.GetTitre();
this .tome = this .manga.GetTome();
this .resume = this .manga.GetResume();
this .idSerie = this .manga.GetIdSerie();
this .isLu = this .manga.GetIsLu();
this .isAcquis = this .manga.GetIsAcquis();
```
- 23 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


```
Update-manga-page.ts
}
```
```  typescript
saveManga() {
this .manga.SetIsLu( this .isLu);
this .manga.SetTome( this .tome);
this .manga.SetTitre( this .titre);
this .manga.SetResume( this .resume);
this .manga.SetIsAcquis( this .isAcquis);

this .mangaService.MangaUpdateById( this .manga.GetId(), this .manga.GetTitre(), this .manga.GetTome(), this .manga.GetResume(), this .manga.GetIdSerie(), this .manga.GetIsLu(), this .manga.GetIsAcquis());
this .viewCtrl.dismiss();
}
dismiss() {
this .viewCtrl.dismiss();
}

}
```
``` html
Update-manga-page.html
<ion-header>
<ion-navbar>
<ion-title>Modifier un manga</ion-title>
<ion-buttons start>
<button ion-button (click)="dismiss()">
<span ion-text color="primary" showWhen="ios">Cancel</span>
<ion-icon name="md-close" showWhen="android,windows"></ion-icon>
</button>
</ion-buttons>
</ion-navbar>
</ion-header>

<ion-content padding>
<ion-item>
<ion-label>Titre</ion-label>
<ion-input type="text" [(ngModel)]="titre" name="titre"></ion-input>
</ion-item>
<ion-item>
<ion-label>Tome n°</ion-label>
<ion-input type="text" [(ngModel)]="tome" name="tome"></ion-input>
</ion-item>
<ion-item>
<ion-label>Résumé</ion-label>
<ion-input type="text" [(ngModel)]="resume" name="resume"></ion-input>
</ion-item>
<ion-item>
<ion-label> Déjà lu ?</ion-label>
<ion-toggle name="isLu" [(ngModel)]="isLu" checked="false"></ion-toggle>
</ion-item>
<ion-item>
<ion-label> Déjà acheté ?</ion-label>
<ion-toggle name="isAcquis" [(ngModel)]="isAcquis" checked="false"></ion-toggle>
</ion-item>
<button ion-button block (click)="saveManga()">Enregistrer</button>
<button ion-button color="danger" block (click)="dismiss()">Annuler</button>
</ion-content>
```
La page mangas se comporte exactement comme Home. Les pages add-manga et update-manga sont disponibles

sur **GitHub**.

Voici le résultat que vous devriez avoir :

- 24 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


## VII - Conclusion

On aura passé la plus grande partie du temps à configurer l'environnement ou à modifier le projet sous Ionic.

Vous ne toucherez pas à l'environnement de travail tous les deux jours, c'est du temps perdu dans la réalisation

du projet.

Déléguer à ZetaPush la gestion de la base de données s'est fait tout seul et vous avez gagné un temps précieux.

Comme vous avez pu le constater, déployer un serveur de base de données SQL et créer des tables a pris beaucoup

moins de temps que par la voie classique et cela est très simple d'utilisation. C'est là le point fort de ZetaPush qui

propose des services serverless, il suffit de quelques lignes sous Eclipse pour déployer un service prêt à utiliser en

le paramétrant simplement.

ZetaPush dispose aussi de briques de plus haut niveau pour mettre en place des outils (visioconférence, forum, chat/

vidéo/audio) à votre application en quelques instants. Je vous montrerai ça lors d'un prochain tutoriel.

## VIII - Remerciements

Je tiens à remercier **Malick Seck** , Community Manager sur Developpez, pour son implication tout au long de la

rédaction du tutoriel, **f-leb** pour la relecture orthographique et la mise en forme du tutoriel et **Mikaël Morvan** pour

la relecture technique.

- 25 -
Les sources présentées sur cette page sont libres de droits et vous pouvez les utiliser à votre convenance. Par contre, la page de présentation constitue une œuvre intellectuelle protégée par
les droits d'auteur. Copyright ® 2017 Julien Bertacco. Aucune reproduction, même partielle, ne peut être faite de ce site et de l'ensemble de son contenu : textes, documents, images, etc. sans
l'autorisation expresse de l'auteur. Sinon vous encourez selon la loi jusqu'à trois ans de prison et jusqu'à 300 000 € de dommages et intérêts.


