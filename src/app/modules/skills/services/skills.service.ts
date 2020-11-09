import { Injectable } from '@angular/core';
// Models
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private _skills: Skill[] = [];
  constructor() {
    this.generateSkills();
  }

  get skills(): Skill[] {
    return this._skills;
  }
  set skills(skills: Skill[]) {
    this._skills = skills;
  }

  private generateSkills(): void {
    const skills: Skill[] = [];
    const javaScript = new Skill(
      0,
      'JavaScript',
      5,
      `Develop across all platforms
      Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.
      
      Speed & Performance
      Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.
      
      Incredible tooling
      Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.
      
      Loved by millions
      From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
      
      What is Angular?
      Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
      
      Architecture overview
      Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.
      
      The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
      
      Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.
      
      Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
      
      Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.
      
      The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.
      
      The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).
      
      An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.`
    );
    const typeScript = new Skill(
      1,
      'TypeScript',
      5,
      `Develop across all platforms
      Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.
      
      Speed & Performance
      Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.
      
      Incredible tooling
      Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.
      
      Loved by millions
      From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
      
      What is Angular?
      Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
      
      Architecture overview
      Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.
      
      The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
      
      Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.
      
      Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
      
      Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.
      
      The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.
      
      The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).
      
      An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.`
    );
    const angular = new Skill(
      2,
      'Angular',
      5,
      `Develop across all platforms
      Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.
      
      Speed & Performance
      Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.
      
      Incredible tooling
      Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.
      
      Loved by millions
      From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
      
      What is Angular?
      Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
      
      Architecture overview
      Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.
      
      The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
      
      Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.
      
      Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
      
      Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.
      
      The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.
      
      The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).
      
      An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.`
    );
    const vuejs = new Skill(
      3,
      'VueJs',
      3,
      `Develop across all platforms
      Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.
      
      Speed & Performance
      Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.
      
      Incredible tooling
      Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.
      
      Loved by millions
      From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
      
      What is Angular?
      Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
      
      Architecture overview
      Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.
      
      The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
      
      Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.
      
      Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
      
      Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.
      
      The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.
      
      The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).
      
      An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.`
    );
    const accessibility = new Skill(
      4,
      'Accéssibilité Web (A11Y)',
      4,
      `Develop across all platforms
      Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.
      
      Speed & Performance
      Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.
      
      Incredible tooling
      Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.
      
      Loved by millions
      From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
      
      What is Angular?
      Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
      
      Architecture overview
      Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.
      
      The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
      
      Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.
      
      Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
      
      Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.
      
      The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.
      
      The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).
      
      An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.`
    );
    const responsive = new Skill(
      5,
      'Responsive Design',
      4,
      `Develop across all platforms
      Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.
      
      Speed & Performance
      Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.
      
      Incredible tooling
      Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.
      
      Loved by millions
      From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
      
      What is Angular?
      Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
      
      Architecture overview
      Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.
      
      The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
      
      Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.
      
      Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
      
      Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.
      
      The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.
      
      The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).
      
      An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.`
    );
    const rxJs = new Skill(
      6,
      'RxJs',
      5,
      `
      Develop across all platforms
Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.

Speed & Performance
Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.

Incredible tooling
Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.

Loved by millions
From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.

What is Angular?
Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop

Architecture overview
Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.

The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.

Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.

Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.

Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.

The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.

The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).

An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.`
    );
    skills.push(angular);
    skills.push(typeScript);
    skills.push(javaScript);
    skills.push(rxJs);
    skills.push(accessibility);
    skills.push(responsive);
    skills.push(vuejs);
    this.skills = skills;
  }
}
