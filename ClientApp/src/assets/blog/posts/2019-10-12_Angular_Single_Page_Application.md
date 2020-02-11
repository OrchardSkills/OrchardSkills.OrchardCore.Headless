# Angular Single Page Application

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SPA%2FAngular-SPA.png?alt=media&token=cefbc367-3223-446e-9735-be369b6cfd99)



# Introduction

When developing an Angular application, it's great to start off with a reference application. In this single page application, it will display the application's tile.


# Requirements

In order to develop an Angular application, you will need a basic development environment along with Node.js environment installed. Please refer to the links below on how to set that up:

## Linux

[Setting Up a Debian 10 (Buster) Linux Basic Development Environment](https://angularadvisors.com/blog/2019-10-01_Setting_Up_a_Debian_10_%28Buster%29_Linux_Basic_Development_Environment)
[Setting Up Node.js on Debian 10 (Buster) Linux with Node Version Manager](https://angularadvisors.com/blog/2019-10-04_Setting_Up_Node_js_on_Debian_10_%28Buster%29_Linux_wit)

## macOS

[Setting Up a macOS 10.14 (Mojave) Basic Development Environment](https://angularadvisors.com/blog/2019-10-02_Setting_Up_a_macOS_10_14_%28Mojave%29_Basic_Development_Environment)
[Setting Up Node.js on macOS 10.14 (Mojave) with Node Version Manager](https://angularadvisors.com/blog/2019-10-05_Setting_Up_Node_js_on_macOS_10_14_%28Mojave%29_with_No)

## Windows 10

[Setting Up a Windows 10 (19H1) Basic Development Environment](https://angularadvisors.com/blog/2019-10-03_Setting_Up_a_Windows_10_%2819H1%29_Basic_Development_Environmnt)
[Setting Up Node.js on Windows 10 (19H1) with Node Version Manager](https://angularadvisors.com/blog/2019-10-06_Setting_Up_Node_js_on_Windows_10_%2819H1%29_with_Node)

## Documentation

It's always important to go to the original documentation. Here are the links to the Node.js, Angulat, and the Angular CLI.
[Node.js](https://nodejs.org/en/docs/)
[Angular](https://angular.io/)
[Angular CLI (Command Line Interface)](https://cli.angular.io/)

# Install the Angular CLI

In order to get started with Angular, the Angular CLI is needed. To install the Angular CLI use the following command in the terminal window:

```javascript
npm install -g @angular/cli
```

# Uninstall the Angular CLI

There may be times when you may want to install a specific version of the Angular CLI. If so the Angular CLI will be to be uninstalled. There are the commands:

```javascript
npm uninstall -g @angular/cli --force
npm cache clean --force
npm cache verify
```

# Install a Specific Version of the Angular CLI

```javascript
npm install -g @angular/cli@X.Y.Z
```

Where X.Y.Z is the specific version of the Angular CLI. i.e. 8.1.1.

# Generate the Base Application

Use the Angular CLI to generate the code for the base application.

## ng new command and switches used

**--style=[css | scss | less | sass | styl]**
The style option specifies what CSS preprocessor is used in building the project. the options are css, scss, less, sass, styl.
**--routing**
The routing option generates a file app-routing.module.ts file.
**--skip-git**
Creates a new project without a Git repository.
**--skip-install**
Will not perform an npm install after the code is generated.

# Code Scaffolding Command

In the terminal, Use the following Angular CLI command to generate the scaffolding:

```javascript
ng new ngref --routing --style scss --skip-install --skip-git
```

The Angular CLI will generate the following output:
```javascript
    CREATE angularpwassrseoref/README.md (1036 bytes)
    CREATE angularpwassrseoref/.editorconfig (246 bytes)
    CREATE angularpwassrseoref/.gitignore (629 bytes)
    CREATE angularpwassrseoref/angular.json (3616 bytes)
    CREATE angularpwassrseoref/package.json (1292 bytes)
    CREATE angularpwassrseoref/tsconfig.json (543 bytes)
    CREATE angularpwassrseoref/tslint.json (1988 bytes)
    CREATE angularpwassrseoref/browserslist (429 bytes)
    CREATE angularpwassrseoref/karma.conf.js (1031 bytes)
    CREATE angularpwassrseoref/tsconfig.app.json (267 bytes)
    CREATE angularpwassrseoref/tsconfig.spec.json (270 bytes)
    CREATE angularpwassrseoref/src/favicon.ico (5430 bytes)
    CREATE angularpwassrseoref/src/index.html (306 bytes)
    CREATE angularpwassrseoref/src/main.ts (372 bytes)
    CREATE angularpwassrseoref/src/polyfills.ts (2838 bytes)
    CREATE angularpwassrseoref/src/styles.scss (80 bytes)
    CREATE angularpwassrseoref/src/test.ts (642 bytes)
    CREATE angularpwassrseoref/src/assets/.gitkeep (0 bytes)
    CREATE angularpwassrseoref/src/environments/environment.prod.ts (51 bytes)
    CREATE angularpwassrseoref/src/environments/environment.ts (662 bytes)
    CREATE angularpwassrseoref/src/app/app-routing.module.ts (246 bytes)
    CREATE angularpwassrseoref/src/app/app.module.ts (393 bytes)
    CREATE angularpwassrseoref/src/app/app.component.scss (0 bytes)
```
# Install Node Packages

The first step in building an Angular application is to install the packages to build the application. These packages are listed in the package.json file. Us the following command in the terminal to install.

```javascript
npm install
```

# Install NPM Check Update (NCU) and Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```javascript
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

# Compile and Run Angular SPA

Execute the following command in the terminal:

```javascript
ng serve -o
```

Browse to [http://localhost:4200](http://localhost:4200/)


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SPA%2FAngular-SPA-001.png?alt=media&token=17292648-bc87-4171-bddd-4554924d6bf8)


Easy peasy. Completed the first angular application. The single page application displays, like a typical "Hello World" application,  the text "Welcome to ngref!". 


# Source Code

The source code can be found on [GitHub](https://github.com/wpbest/Angular-Reference).
