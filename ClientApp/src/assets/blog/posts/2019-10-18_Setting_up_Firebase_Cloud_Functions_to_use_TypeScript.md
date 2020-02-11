# Setting up Firebase Cloud Functions to use TypeScript

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FFirebase-Cloud-Functions-TypeScript%2FFirebase-Cloud-Functions-TypeScript.png?alt=media&token=5e9d3fb4-d2ac-4d4d-a129-07e63c6a5e15)

# Introduction

The idea of strong typing made possible by Typescript, which allows you to create data models and interfaces. Firebase now supports TypeScript to create cloud function.

# Use TypeScript for Cloud Functions

For developers who prefer to write functions in TypeScript, Cloud Functions provides two types of support:

- Create and configure TypeScript projects for automatic transpilation at initialization (firebase init functions).
- Transpile existing TypeScript source to JavaScript at deploy time via a predeploy hook.

Following instructions in this guide, you can migrate an existing JavaScript project to TypeScript and continue deploying functions using a predeploy hook to transpile your source code. TypeScript offers many benefits over vanilla JavaScript when writing functions:

- TypeScript supports latest JavaScript features like async/await, simplifying promise management
- A Cloud Functions linter highlights common problems while you're coding
- Type safety helps you avoid runtime errors in deployed functions

For a working sample of Cloud Functions written in TypeScript, see typescript-getting-started in our GitHub repo. If you're new to TypeScript, see TypeScript in 5 minutes.

## Initializing a new Cloud Functions project with TypeScript

Run firebase init in a new directory. The tool gives you options to build the project with JavaScript or TypeScript. Choose TypeScript to output the following project structure:

```javascript
    myproject
     +- functions/     # Directory containing all your functions code
          |
          +- package.json  # npm package file describing your Cloud Functions code
          |
          +- tsconfig.json
          |
          +- tslint.json # Optional file
          |
          +- src/     # Directory containing TypeScript source
          |   |
          |   +- index.ts  # main source file for your Cloud Functions code
          |
          +- lib/
              |
              +- index.js  # Built/transpiled JavaScript code
              |
              +- index.js.map # Source map for debugging

```
## Using an existing TypeScript project

If you have an existing TypeScript project, you can add a predeploy hook to make sure your project is transpiled every time you deploy your code to Cloud Functions for Firebase. You'll need a properly formed tsconfig.json file and a Firebase project, and you'll need to make the following modifications to your Firebase configuration:
Edit package.json to add a bash script to build your TypeScript project. For example:
```javascrip
     {
       "name": "functions",
       "scripts": {
         "build": "./node_modules/.bin/tslint -p tslint.json && ./node_modules/.bin/tsc"
       }
     ...
```
Edit firebase.json to add a predeploy hook to run the build script. For example:
```javascrip
     {
       "functions": {
         "predeploy": "npm --prefix functions run build",
       }
     }
```
With this configuration, a firebase deploy --only functions command builds your TypeScript code and deploys it as functions.

## Migrating an existing JavaScript project to TypeScript

If you have an existing Cloud Functions project that you initialized and developed in JavaScript, you can migrate it to TypeScript. You're strongly encouraged to create a git checkpoint or other backup before starting.
**To migrate an existing JavaScript Cloud Functions project:**
Create a git checkpoint and save copies of your existing JavaScript source files.
In the project directory, run firebase init functions and select TypeScript when prompted for a language for writing functions.
When prompted whether to overwrite the existing package.json file, select No unless you are sure you don't want to keep the existing file.
Delete index.ts in the directory functions/src, replacing it with your existing source code.
In the tsconfig.json file created at initialization, set the compiler options to allow JavaScript: "allowJs": "true".
Copy your saved package.json file into the functions directory, and edit it to set "main" to "lib/index.js".
Also in package.json, add a build script for TypeScript like the following:
```javascrip
     {
       "name": "functions",
       "scripts": {
         "build": "./node_modules/.bin/tslint --project tsconfig.json && ./node_modules/.bin/tsc"
       }
     ...
```
Add "typescript" as a dev dependency by running npm install --save --only=dev tslint typescript.
For all dependencies, run npm install --save @types/<dependency>.
Rewrite source code from .js to .ts as desired.


## Emulating TypeScript functions

To test TypeScript functions locally, you can use the emulation tools. It's important to compile your code before using these tools, so make sure to run npm run build inside your functions directory before running firebase serve or firebase functions:shell. Alternatively, run npm run serve or npm run shell as a shortcut; these commands both run the build and serve/start the functions shell.

## Functions logs for TypeScript projects

During firebase deploy, your project's index.ts is transpiled to index.js, meaning that the Cloud Functions log will output line numbers from the index.js file and not the code you wrote. To make it easier for you to find the corresponding paths and line numbers in index.ts, firebase deploy creates functions/lib/index.js.map. You can use this source map in your preferred IDE or via a node module.

