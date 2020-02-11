# An Angular Reference PWA with SSR, SEO and Firebase


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase.png?alt=media&token=44852cfc-3d2f-4fca-8180-9623f17492cc)



# Introduction

When developing an Angular application, it's great to start off with a reference application that has the basic requirements for the web. It's essential to have a web application which includes server-side rendering and search engine optimization. Having a progressive web application allows the user to have a more native application experience. Let's host the application on Google's Firebase Cloud hosting.

# Requirements

Instead of starting out from scratch, let's clone [An Angular Reference PWA with SSR and SEO](https://wpbest.io/an-angular-reference-pwa-with-ssr-and-seo). The GitHub link is at the end of the page.
Do a global search on the text "angularpwassrseoref" and change the application name from "angularpwassrseoref" to "angularpwassrseofbref".


# Documentation

It's always important to go to the original documentation. Here are the links to Firebase, Firebase CLI, and AngularFire.
[Firebase](https://firebase.google.com/docs/)
[Firebase CLI (Command Line Interface)](https://firebase.google.com/docs/cli/)
[AngularFire](https://github.com/angular/angularfire2)

# Create a Firebase Project

Let's go ahead and create a new Firebase project. Browse to the [Firebase console](https://console.firebase.google.com/). 


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-001.png?alt=media&token=8cba733c-5629-4c4f-bb03-2c8031f15065)


Enter your Google credentials by entering your username, email or phone number.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-002.png?alt=media&token=f417d7cb-36f5-438f-a0ee-f2b034d30c63)


Enter your password.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-003.png?alt=media&token=cac9df15-6a70-406d-9401-79b379f9e8e9)


If multifactor authentication is enabled, go through the verification process.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-004.png?alt=media&token=f1a4bb6d-4bed-4139-a80b-70db7caf58c8)


Chick the "+", Add project to create a new Firebase project.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-005.png?alt=media&token=1273e6de-d144-4c41-8bae-b9c4c4de8d16)


Enter a project name and check both checkboxes.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-006.png?alt=media&token=27661807-a8eb-42ba-97a0-2e4410f178b3)


Please wait for it to complete.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-007.png?alt=media&token=65f73fe3-39f5-4ee6-add7-317b67e2442f)


Click the "Continue" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-008.png?alt=media&token=e442df29-36f6-4939-8247-5599bbf7d765)


Click "Authentication" under the Develop section on the left side.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-009.png?alt=media&token=9289e532-44b3-4f91-a021-780fadbac34f)


Chick the "Sign-in method".


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-010.png?alt=media&token=3a6075de-e45f-4827-bd74-59d244713d39)


Let's enable the "Email/Password" Sign-in provider. Click on the pencil icon to edit.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-011.png?alt=media&token=aa061194-795d-44c0-a869-8777b86a6ed2)


Enable both switches and press the "Save" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-012.png?alt=media&token=2c9863ef-c171-4026-83e6-1e8852f4a434)


Click on the "Database" under the Develop section on the left side.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-013.png?alt=media&token=6936643a-9c6a-4362-9ea0-aeecd1ea2c12)


Click the "Next" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-014.png?alt=media&token=71519564-1ca6-4aef-ba51-829c50e36b71)


Click the "Done" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-015.png?alt=media&token=014fed05-fcc3-4c7f-bb29-d7b4fb44dce6)


Please wait for the database settings to complete.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-016.png?alt=media&token=4c8526dc-3019-4d7a-80a7-bcfed9261663)


Click on the "Storage" under the Develop section on the left side.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-017.png?alt=media&token=b89ce6f3-7064-4557-896d-bb6438459562)


Click on "Get Started".


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-018.png?alt=media&token=cd04af19-43fc-4f42-88e4-39245fa44d34)


Click the "Next" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-019.png?alt=media&token=f495ce09-8950-40e8-8e5a-590dfd50ba0e)


Click the "Done" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-020.png?alt=media&token=bffba5e6-1ddf-4d3e-b97e-fe58f1e7a045)


Please wait for the storage configuration to complete.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-021.png?alt=media&token=c96d2342-3741-4b5e-9d87-b0de3bfcfc60)


Select "Hosting" under the Develop section on the left side.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-022.png?alt=media&token=fcc8bcab-d7a6-47db-b405-3c6a7dff2d13)


Click on the "Get started" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-023.png?alt=media&token=31ef3c11-05be-4d55-b518-0d0d06703370)


Click on the "Continue" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-024.png?alt=media&token=39c1f69c-2e1b-448b-854d-1cdae95ea524)


Click on the "Finish" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-025.png?alt=media&token=779d8566-8dd7-4612-a31d-15e7a33ae194)


Click on the "Functions" under the Develop section on the left side.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-026.png?alt=media&token=89b23565-c5dd-4604-8b39-36a9690eae31)


Click the "Get started" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-027.png?alt=media&token=2e81dfa2-9153-4971-8684-58472c9c08bf)


Click the "Continue" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-028.png?alt=media&token=1b092acf-cec2-4c94-b437-e33be16c0f57)


Click on the "Finish" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-029.png?alt=media&token=c5552a76-1ecb-4f97-bc69-d793fdcf7b4f)


Setting up Function is complete.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-030.png?alt=media&token=1d901c0d-5b44-465f-9922-52ce1be475aa)


Click on the gear icon left to "Project Overview" and select "Project settings".


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-031.png?alt=media&token=21384d0a-7903-4741-994f-685d4a80cd6a)


Add an App nickname and press the "Register app" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-032.png?alt=media&token=2b5e3805-ce8c-40cf-b7f0-ec1e76e86dd5)


Click the "Next" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-033.png?alt=media&token=7dca4e09-6fd4-45f0-8b46-9ddb75548f7d)


Click the "Next" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-034.png?alt=media&token=f0b23ccc-f133-4a2b-b94d-565d3ab45ab6)


Click the "Continue to console" button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-035.png?alt=media&token=df95120f-ff51-4b27-b90a-5937eaf8e233)


Click on the "Config" radio button under Firebase SDK snippet.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-036.png?alt=media&token=4c84fbe9-d2c9-4387-8921-598241fa8fe8)


This is the Firebase project credentials. Copy your own project credentials to be entered in the source code.


# Add Firebase Functionality

Add the needed packages firebase and @angular/fire

```
npm install firebase @angular/fire --save
```

## Import the AngularFire libraries

Modify app.module.ts to import the Firebase libraries. Add import for the environment. These settings are located in the Firebase Console, Project Overview, Settings, firebaseConfig.


```javascript
    import { AngularFireModule } from '@angular/fire';
    import { AngularFirestoreModule } from '@angular/fire/firestore';
    import { AngularFireStorageModule } from '@angular/fire/storage';
    import { AngularFireAuthModule } from '@angular/fire/auth';
    import { environment } from '../environments/environment';
    
    @NgModule({
     imports: [
     ...
     AngularFireModule.initializeApp(firebaseConfig), // initialize
     AngularFirestoreModule, // firestore
     AngularFireAuthModule, // auth
     AngularFireStorageModule, // storage
     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // service worker
     ],
     ...
    })
```

Modify environment.ts and environment.prod.ts and add the firebase credentials.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-037.png?alt=media&token=1615025d-b40e-43ec-8451-f7774519ce1d)


environment.ts:

```javascript
    export const environment = {
     production: false,
     firebaseConfig: {
     apiKey: '...',
     authDomain: '...',
     databaseURL: '...',
     projectId: '...',
     storageBucket: '...',
     messagingSenderId: '...',
     appId: '...'
     }
    };
```

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-038.png?alt=media&token=8cc5f892-e0c1-4480-a857-4f6fb57e638e)


environment.prod.ts

```javascript
    export const environment = {
     production: true,
     firebaseConfig: {
     apiKey: '...',
     authDomain: '...',
     databaseURL: '...',
     projectId: '...',
     storageBucket: '...',
     messagingSenderId: '...',
     appId: '...'
     }
    };
```

# Setup Firebase Tools

In order to develop with Firebase, the Firebase tools need to be configured in the project directory.
Use the following commands to configure the tools.

```javascript
    firebase login
    ? Allow Firebase to collect anonymous CLI usage and error reporting information? (Y/n) Y
    
    Visit this URL on any device to log in:
    https://accounts.google.com/o/oauth2/auth?client_id=...
    
    Waiting for authentication...
    
    Select the google account and then Authorize it for firebase
    
    +  Success! Logged in as wpbest@gmail.com
    
    firebase init
    
         ######## #### ########  ######## ########     ###     ######  ########
         ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
         ######    ##  ########  ######   ########  #########  ######  ######
         ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
         ##       #### ##     ## ######## ########  ##     ##  ######  ########
    
    You're about to initialize a Firebase project in this directory:
    
      /Users/william.best/Documents/GitHub/angular-pwa-ssr-seo-firebase
    
    ? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choi
    ces. 
     ◯ Database: Deploy Firebase Realtime Database Rules
    ❯◉ Firestore: Deploy rules and create indexes for Firestore
     ◉ Functions: Configure and deploy Cloud Functions
     ◉ Hosting: Configure and deploy Firebase Hosting sites
     ◉ Storage: Deploy Cloud Storage security rules
    
    You're about to initialize a Firebase project in this directory:
    
      /Users/william.best/Documents/GitHub/angular-pwa-ssr-seo-firebase
    
    ? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choi
    ces. Firestore: Deploy rules and create indexes for Firestore, Functions: Configure and deploy Cloud Functions, Hosting: Configure a
    nd deploy Firebase Hosting sites, Storage: Deploy Cloud Storage security rules
    
    === Project Setup
    
    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add, 
    but for now we'll just set up a default project.
    
    ? Select a default Firebase project for this directory: 
    ❯ angular-pwa-ssr-seo-firebase (angular-pwa-ssr-seo-firebase) 
    
    === Firestore Setup
    
    Firestore Security Rules allow you to define how and when to allow
    requests. You can keep these rules in your project directory
    and publish them with firebase deploy.
    
    ? What file should be used for Firestore Rules? (firestore.rules) 
    
    Firestore indexes allow you to perform complex queries while
    maintaining performance that scales with the size of the result
    set. You can keep index definitions in your project directory
    and publish them with firebase deploy.
    
    ? What file should be used for Firestore indexes? (firestore.indexes.json) 
    
    
    === Functions Setup
    
    A functions directory will be created in your project with a Node.js
    package pre-configured. Functions can be deployed with firebase deploy.
    
    ? What language would you like to use to write Cloud Functions? 
      JavaScript 
    ❯ TypeScript
    ? Do you want to use TSLint to catch probable bugs and enforce style? (Y/n) Y
    
    === Functions Setup
    
    A functions directory will be created in your project with a Node.js
    package pre-configured. Functions can be deployed with firebase deploy.
    
    ? What language would you like to use to write Cloud Functions? TypeScript
    ? Do you want to use TSLint to catch probable bugs and enforce style? Yes
    ✔  Wrote functions/package.json
    ✔  Wrote functions/tslint.json
    ✔  Wrote functions/tsconfig.json
    ✔  Wrote functions/src/index.ts
    ✔  Wrote functions/.gitignore
    ? Do you want to install dependencies with npm now? (Y/n) Y
    
    === Hosting Setup
    
    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to be uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.
    
    ? What do you want to use as your public directory? dist
    ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) Y
    ✔  Wrote dist/index.html
    
    === Storage Setup
    
    Firebase Storage Security Rules allow you to define how and when to allow
    uploads and downloads. You can keep these rules in your project directory
    and publish them with firebase deploy.
    
    ? What file should be used for Storage Rules? (storage.rules)
    
    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...
    
    ✔  Firebase initialization complete!
```

## Use Firebase Cloud Functions for SSR

Modify the firebase.json file:

```javascript
    {
      "hosting": {
        "public": "dist/browser",
         // ...
        "rewrites": [
          {
            "source": "**",
            "function": "ssr"
          }
        ]
      }
    }
```

## Remove the Express Server Listener

When deploying to AppEngine we need to tell the server to listen to requests. In Cloud Functions, this is already happening under the hood, so we need to update our server code.
Make sure to export the express app, then remove the call to listen.

```javascript
    export const app = express();
    
    // ...
    
    // remove or comment out these lines
    
    // Start up the Node server
    // app.listen(PORT, () => {
    // console.log(`Node Express server listening on http://localhost:${PORT}`);
    // })
```

Update the Webpack Config file webpack.server.config.js

```javascript
      output: {
      // Puts the output at the root of the dist folder
      path: path.join(__dirname, 'dist'),
      library: 'app',
      libraryTarget: 'umd',
      filename: '[name].js',
      },
```

## Add Firebase Polyfills to Express

Firebase uses Websockets and XHR not included in Angular that we need to polyfill.

```javascript
npm install ws xhr2 bufferutil utf-8-validate  --save
```

Modify server.ts by declaring them on Node global at the top of the file.

```javascript
    (global as any).WebSocket = require('ws');
    (global as any).XMLHttpRequest = require('xhr2');
```

## Modify index.ts

The function itself only needs to import the universal app into the current working directory. That’s why we need to copy it to the function’s environment.
Modify index.ts

```javascript
    import * as functions from 'firebase-functions';
    const universal = require(`${process.cwd()}/dist/server`).app;
    
    export const ssr = functions.https.onRequest(universal);
```

## Update Build Scripts

Update the package.json build:ssr to call the functions build script. Also update the serve:ssr to call firebase serve.

```javascript
    {
      "scripts": {
        "serve:ssr": "firebase serve",
        "build:ssr": "npm run build:client-and-server-bundles && npm run compile:server && npm run build:functions",
      }
    }
```

Update the package.json in the functions subdirectory build script. Notice the functions to be deployed with Node v8.

```javascript
    {
      "name": "functions",
      "engines": {
        "node": "8"
      },
      "scripts": {
        ...
        "build": "mkdir -p dist && rm -r ./dist && cp -r ../dist . && tsc",
        ...
      }
    }
```

# Install Node Packages in the Angular application and the Firebase functions.

```javascript
npm install
cd functions
npm install
cd ..
```

## Install NPM Check Update (NCU) ad Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```javascript
npm install -g npm-check-updates
ncu
ncu -u
```

# Compile the Angular Client and Firebase Function Code.

```javascript
npm run build:ssr
```

# Run Angular Client and Firebase serve.

```javascript
    npm run serve:ssr
```

# Deploy Firebase Project

```javascript
firebase deploy
    === Deploying to 'angular-pwa-ssr-seo-firebase'...
    
    i  deploying storage, firestore, functions, hosting
    Running command: npm --prefix "$RESOURCE_DIR" run lint
    
    > functions@ lint C:\Users\willi\OneDrive\Documents\GitHub\angular-pwa-ssr-seo-firebase\functions
    > tslint --project tsconfig.json
    
    Running command: npm --prefix "$RESOURCE_DIR" run build
    
    > functions@ build C:\Users\willi\OneDrive\Documents\GitHub\angular-pwa-ssr-seo-firebase\functions
    > node cp-angular && tsc
    
    +  functions: Finished running predeploy script.
    i  storage: checking storage.rules for compilation errors...
    +  storage: rules file storage.rules compiled successfully
    i  firestore: checking firestore.rules for compilation errors...
    i  firestore: reading indexes from firestore.indexes.json...
    +  firestore: rules file firestore.rules compiled successfully
    i  functions: ensuring necessary APIs are enabled...
    +  functions: all necessary APIs are enabled
    i  storage: uploading rules storage.rules...
    i  firestore: uploading rules firestore.rules...
    +  firestore: deployed indexes in firestore.indexes.json successfully
    i  functions: preparing functions directory for uploading...
    i  functions: packaged functions (3.05 MB) for uploading
    +  functions: functions folder uploaded successfully
    i  hosting[angular-pwa-ssr-seo-firebase]: beginning deploy...
    i  hosting[angular-pwa-ssr-seo-firebase]: found 28 files in dist/browser
    +  hosting[angular-pwa-ssr-seo-firebase]: file upload complete
    +  storage: released rules storage.rules to firebase.storage/angular-pwa-ssr-seo-firebase.appspot.com
    +  firestore: released rules firestore.rules to cloud.firestore
    i  functions: updating Node.js 8 function ssr(us-central1)...
    +  functions[ssr(us-central1)]: Successful update operation.
    i  hosting[angular-pwa-ssr-seo-firebase]: finalizing version...
    +  hosting[angular-pwa-ssr-seo-firebase]: version finalized
    i  hosting[angular-pwa-ssr-seo-firebase]: releasing new version...
    +  hosting[angular-pwa-ssr-seo-firebase]: release complete
    
    +  Deploy complete!
    
    Project Console: https://console.firebase.google.com/project/angular-pwa-ssr-seo-firebase/overview
    Hosting URL: https://angular-pwa-ssr-seo-firebase.firebaseapp.com
```

# Google Developer Tools Audit

Lets now look at how the application will perform on The Google Firebase Cloud Platform.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO-Firebase%2FAngular-PWA-SSR-SEO-Firebase-042.png?alt=media&token=d9d80b56-cec6-4c06-a9c3-03d717ab2193)


As you can see, the results of the Audit went well. All 100% expect performance which was 98%. The "First Contentful Paint",  "First Meaningful Paint", "Speed Index" and "Time to Interactive" were 2 seconds. The "Estimate Input Latency" was 10ms.


# Source Code

The source code for this project can be found on [GitHub](https://github.com/wpbest/Angular-PWA-SSR-SEO-Firebase-Reference).

