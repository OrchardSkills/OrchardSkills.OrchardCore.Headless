# Angular Meets the Bulma CSS Framework

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SEO-Bulma%2FAngular-SEO-Bulma.png?alt=media&token=ca8e91dc-12de-47eb-ba66-741b52293b01)

# Introduction

Bulma is a lightweight configurable CSS framework that’s based on Flexbox. Flexbox is a relatively new CSS spec that has good browser support. Bulma makes using Flexbox a breeze and handles all of the hard work of Flexbox for you, so you don’t need to know any Flexbox to get started. However, knowledge of the CSS spec is preferred. Here are a few reasons why Bulma is different than other CSS frameworks:

- Modern: All of Bulma is based on CSS Flexbox.
- 100% responsive: Bulma is designed to be both mobile and desktop friendly.
- Easy to learn: Most users get started within minutes.
- Simple syntax: Bulma makes sure to use the minimal HTML required, so your code is easy to read and write.
- Customizable: With over 300 SASS variables, you can apply your own branding to Bulma.
- No JavaScript: Because Bulma is CSS-only, it integrates gracefully with any JavaScript framework (Angular, VueJS, React, or just plain Vanilla JavaScript).

We'll create a simple Angular App that uses angular routing, displays a Contact Us page, use the GitHub API to display a list of GitHub Users and then displays a details page of the GitHub single user.

# Requirements

Instead of starting out from scratch, one of the options is that you can clone [Angular SEO (Search Engine Optimisation)](https://github.com/wpbest/Angular-SEO-Reference). The GitHub link is at the end of the page. Do a global search on the text "ngseoref" and change the application name from "ngseoref" to "ngseobulmaref" or whatever you like.

# Using Bulma with Angular

As you know, Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end-to-end tooling, and integrated best practices to solve developmental challenges. But it does not provide you with a rich UI experience. This is where Bulma comes in. Now let’s integrate our Bulma templates with the Angular framework! So, what do you need?

- Node.js
- Angular CLI
## Documentation

[Node.js](https://nodejs.org/en/docs/)
[Angular](https://angular.io/)
[Angular CLI](https://cli.angular.io/)
[RxJS](http://reactivex.io/rxjs/)
[Bulma](https://bulma.io/documentation/)


## Install global packages: Angular CLI

```
npm install -g @angular/cli  
```

**Using Ivy Renderer Engine**
Until the Ivy Renderer Engine is in production I strongly recommend disabling it. In the angularCompilerOptions in your project's tsconfig.app.json file set enableIvy to false.

```javascript
    {
      "compilerOptions": { ... },
      "angularCompilerOptions": {
        "enableIvy": false
      }
    }
```

AOT compilation with Ivy is faster and should be used by default. In the angular.json workspace configuration file, set the default build options for your project to always use AOT compilation.

```javascript
    {
      "projects": {
        "ng8bulmatemplate": {
          "architect": {
            "build": {
              "options": {
                ...
                "aot": true,
                ...
              }
            }
          }
        }
      }
    }
```

## Code scaffolding

**ng new command switches used**
**--style=[css | scss | less | sass | styl]**
The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.
**--routing**
The routing option generates a file app-routing.module.ts file.
**--enable-ivy**
The enable-ivy option enables the next generation renderer.
**--skip-install**
This skip-install option disables the npm install after code generation.
**--skip-git**

## ng new command
    ng new ngbulmagithubusers --routing --style scss --enable-ivy --skip-install

Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.
**ng generate commands**

```javascript
    ng generate module core -m app
    ng generate service core/services/user
    ng generate component core/components/footer -m core
    ng generate component core/components/header -m core
    ng generate component contact -m app
    ng generate component home -m app
    ng generate component users/user-signal -m app
    ng generate component users/user-list -m app
    ng generate module users --routing
```

## Install Bulma

```
    npm install bulma --save
```

Update the styles property in angular.json to include the new stylesheet for Bulma.

```javascript
    {
      ...
      "styles": [
        "node_modules/bulma/css/bulma.min.css",
        "src/styles.css"
      ],
      ...
    }
```

Modify the file src/app/core/core.module.ts add exports for HeaderComponent and FooterComponent.

```javascript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { CoreModule } from './core/core.module';
    import { ContactComponent } from './contact/contact.component';
    import { HomeComponent } from './home/home.component';
    import { UserService } from './core/services/user.service';
    import { RouterModule } from '@angular/router';
    import { HttpClientModule } from '@angular/common/http';
    
    @NgModule({
     declarations: [
     AppComponent,
     ContactComponent,
     HomeComponent
     ],
     imports: [
     BrowserModule,
     AppRoutingModule,
     RouterModule,
     FormsModule,
     CoreModule,
     HttpClientModule
     ],
     providers: [UserService],
     bootstrap: [AppComponent]
    })
    export class AppModule { }
```

Modify src/app/contact/contact.component.html

```html
    <section class="hero is-primary is-bold">
     <div class="hero-body">
     <div class="container"> 
     <h1 class="title">Contact Us!</h1> 
     </div>
     </div>
     </section>
    
     <section class="section">
     <div class="container">
    
     <!-- form goes here -->
     <form (ngSubmit)="processForm()">
    
     <!-- name -->
     <div class="field">
     <input 
     type="text" 
     name="name" 
     class="input" 
     placeholder="Your Name" 
     [(ngModel)]="name"
     required
     minlength="3"
     #nameInput="ngModel">
    
     <div class="help is-error" *ngIf="nameInput.invalid && nameInput.dirty">
     Name is required and needs to be at least 3 characters long.
     </div>
     </div>
    
     <!-- email -->
     <div class="field"> 
     <input 
     type="email" 
     name="email" 
     class="input" 
     placeholder="Your Email" 
     [(ngModel)]="email"
     required
     email
     #emailInput="ngModel">
    
     <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
     Needs to be a valid email.
     </div>
     </div>
    
     <!-- message -->
     <div class="field">
     <textarea 
     class="textarea" 
     name="message" 
     placeholder="What's on your mind?" 
     [(ngModel)]="message"
     required
     #messageInput="ngModel"></textarea>
    
     <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
     Your message is required!
     </div>
     </div>
    
     <button type="submit" class="button is-danger is-large">Submit</button>
    
     </form>
    
     </div>
     </section>
```

Modify src/app/contact/contact.component.ts

```javascript
    import { Component, OnInit } from '@angular/core';
    
    @Component({
     selector: 'app-contact',
     templateUrl: './contact.component.html',
     styleUrls: ['./contact.component.scss']
    })
    export class ContactComponent implements OnInit {
     name: string;
     email: string;
     message: string;
    
     constructor() { }
    
     ngOnInit() {}
    
     processForm() {
     const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
     alert(allInfo); 
     } 
    
    }
```

Modify src/app/home/home.component.html

```html
    <section class="hero is-info is-fullheight is-bold">
     <div class="hero-body">
     <div class="container">
    
     <h1 class="title">Home Page!</h1>
    
     </div>
     </div>
    </section>
```

Modify src/app/core/components/header/header.component.html

```html
    <nav class="navbar is-dark">
    
     <!-- logo -->
     <div class="navbar-brand">
     <a class="navbar-item">
     <img src="assets/img/Angular.png">
     </a>
    
     <a (click)="toggleNavbar()" role="button" #navBurger class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
     <span aria-hidden="true"></span>
     <span aria-hidden="true"></span>
     <span aria-hidden="true"></span>
     </a> 
     </div>
    
     <!-- menu -->
     <div class="navbar-menu" #navMenu (click)="toggleNavbar()">
     <div class="navbar-start">
     <a class="navbar-item" [routerLink]="['']" routerLinkActive="router-link-active" >Home</a>
     <a class="navbar-item" [routerLink]="['/contact']" routerLinkActive="router-link-active" >Contact</a>
     <a class="navbar-item" [routerLink]="['/users']" routerLinkActive="router-link-active" >Users</a>
     </div>
     </div>
     </nav>
```

Modify src/app/core/components/header/header.component.ts

```javascript
    import { Component, ViewChild, ElementRef } from '@angular/core';
    
    @Component({
     selector: 'app-header',
     templateUrl: './header.component.html',
     styleUrls: ['./header.component.scss']
    })
    export class HeaderComponent {
     @ViewChild('navBurger', {static:true }) navBurger: ElementRef;
     @ViewChild('navMenu', {static : true }) navMenu: ElementRef;
    
     toggleNavbar() {
     this.navBurger.nativeElement.classList.toggle('is-active');
     this.navMenu.nativeElement.classList.toggle('is-active');
     }
    }
```

Modify src/app/core/components/footer/footer.component.html

```html
    <footer class="footer">
     <div class="container">
     <div class="content has-text-centered">
     <p>
     Made with by <a href="https://twitter.com/wpbest">wpbest</a>
     </p>
     </div>
     </div>
    </footer>
```

Modify src/app/core/services/user.service.ts

```javascript
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    
    @Injectable({
     providedIn: 'root'
    })
    export class UserService {
     apiUrl = 'https://api.github.com/users';
     constructor(private http: HttpClient) { }
    
     getUsers() {
     return this.http.get(`${this.apiUrl}?per_page=10`);
     }
    
     getUser(username: string) {
     return this.http.get(`${this.apiUrl}/${username}`); 
     } 
    }
```

Modify src/app/core/core.module.ts

```javascript
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FooterComponent } from './components/footer/footer.component';
    import { HeaderComponent } from './components/header/header.component';
    import { UserService } from './services/user.service'; 
    import { RouterModule } from '@angular/router';
    
    
    @NgModule({
     declarations: [
     FooterComponent, 
     HeaderComponent
     ],
     imports: [
     CommonModule,
     RouterModule
     ],
     exports: [
     HeaderComponent,
     FooterComponent 
     ],
     providers:[UserService]
    })
    export class CoreModule { }
```

Modify/src/app/users/user-list/user-list.component.html

```html
    <section class="section">
     <div class="container">
     <div class="columns is-multiline">
    
     <!-- loop over our users and give them each a card -->
     <div class="column is-4" *ngFor="let user of users | async">
     <div class="card">
     <div class="card-content">
     <a routerLink="/users/{{ user.login }}">{{ user.login }}</a>
     </div> 
     </div> 
     </div>
    
     </div>
     </div>
    </section>
```

Modify/src/app/users/user-list/user-list.component.ts

```javascript
    import { Component, OnInit } from '@angular/core';
    import { UserService } from '../../core/services/user.service';
    @Component({
     selector: 'app-user-list',
     templateUrl: './user-list.component.html',
     styleUrls: ['./user-list.component.scss']
    })
    export class UserListComponent implements OnInit {
     users;
     constructor(private userService: UserService) { }
    
     ngOnInit() {
     this.users = this.userService.getUsers();
     }
    
    }
```

Modify src/app/users/user-signal/user-signal.component.html

```html
    <section class="section">
     <div class="container">
     
     <div class="card" *ngIf="user">
     <img [src]="user.avatar_url">
     <h2>{{ user.login }}</h2>
     </div>
    
     </div>
    </section>
```

Modify src/app/users/user-signal/user-signal.component.ts

```javascript
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';
    import { UserService } from '../../core/services/user.service';
    
    @Component({
     selector: 'app-user-signal',
     templateUrl: './user-signal.component.html',
     styleUrls: ['./user-signal.component.scss']
    })
    export class UserSignalComponent implements OnInit {
     user; // property to hold our user when we eventually grab them from github api
    
     // inject the things we need
     constructor(
     private route: ActivatedRoute,
     private userService: UserService
    ) { }
    
     ngOnInit() {
     this.route.params.subscribe(params => {
     const username = params['username'];
     this.userService
     .getUser(username)
     .subscribe(user => this.user = user);
     }); 
     }
    
    }
```

Modify src/app/users/users-routing.module.ts

```javascript
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { UserListComponent } from './user-list/user-list.component'
    import { UserSignalComponent } from './user-signal/user-signal.component'
    
    const routes: Routes = [
     {
     path: '',
     component: UserListComponent
     },
     {
     path: ':username',
     component: UserSignalComponent
     }
    ];
    
    @NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
    })
    export class UsersRoutingModule { }
```

Modify src/app/users/users.module.ts

```javascript
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    
    import { UsersRoutingModule } from './users-routing.module';
    import { UserListComponent } from './user-list/user-list.component';
    import { UserSignalComponent } from './user-signal/user-signal.component';
    
    @NgModule({
     declarations: [
     UserListComponent, 
     UserSignalComponent
     ],
     imports: [
     CommonModule,
     UsersRoutingModule
     ]
    })
    export class UsersModule { }
```

Modify src/app/app-routing.module.ts

```javascript
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { ContactComponent } from './contact/contact.component';
    
    const routes: Routes = [
     {
     path: '',
     pathMatch: 'full',
     component: HomeComponent
     },
     {
     path: 'contact',
     component: ContactComponent
     },
     {
     path: 'users',
     loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
     }
    ];
    
    @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
    })
    export class AppRoutingModule { }
```

Modify src/app/app.component.html

```html
    <!-- header -->
    <app-header></app-header>
    
    <!-- app-user-list></app-user-list -->
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>
    
    <!-- footer -->
    <app-footer></app-footer>
```

## Install Node Packages

```
npm install
```

## Install NPM Check Update (NCU) and Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```javascript
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

## Development server

Run `ng serve -o` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SEO-Bulma%2FAngular-SEO-Bulma-01.png?alt=media&token=d3a43080-ad94-491f-8235-b159994b1d1a)


Home Page


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SEO-Bulma%2FAngular-SEO-Bulma-02.png?alt=media&token=aad633a6-b58e-4e6b-af74-6b786e86f3b6)


Contact Page


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SEO-Bulma%2FAngular-SEO-Bulma-03.png?alt=media&token=6abdeef8-2df0-4d3b-89b8-0cf547931de3)

Contact Page Submit



![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SEO-Bulma%2FAngular-SEO-Bulma-04.png?alt=media&token=99400b05-c741-4d32-a6bc-7997bf7582f7)


User List Page


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SEO-Bulma%2FAngular-SEO-Bulma-05.png?alt=media&token=4b6c7567-aaa7-457f-962a-3da8a349074e)


User Single Page

# Summary

Now you can run the application. Even though this is a simple app, as you can see, it is really easy to use the Bulma framework with Angular! 


# Source Code

The source code is on [GitHub](https://github.com/wpbest/Angular-Bulma-Github-Users).



