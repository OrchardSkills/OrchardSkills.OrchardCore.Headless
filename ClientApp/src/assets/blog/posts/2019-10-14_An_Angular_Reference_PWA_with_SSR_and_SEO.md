# An Angular Reference PWA with SSR and SEO

![](https://wpbest.io/Media/Default/Angular-PWA-SSR-SEO/Angular-PWA-SSR-SEO.png)

# Introduction

When developing an Angular application, it's great to start off with a reference application that has the basic requirements for the web. It's essential to have a web application which includes server-side rendering and search engine optimization. Having a progressive web application allows the user to have a more native application experience.


# Requirements

Instead of starting out from scratch, Let's use what we already accomplished. Please clone the application [An Angular Reference SPA with SEO](https://angularadvisors.com/blog/2019-10-13_An_Angular_Reference_SPA_with_SEO). The GitHub link is at the end of the page.
Do a global search on the text "ngseoref" and change the application name from "ngseoref" to "angularpwassrseoref".

Add a service worker to your project (PWA)
[Getting started with service workers](https://angular.io/guide/service-worker-getting-started)
Lets now make the Angular application a PWA.
Execute the following command in the terminal:
```javascript
    ng add @angular/pwa --project angularpwassrseoref
```
The Angular CLI will generate the following output:
```javascript
    Installing packages for tooling via npm.
    + @angular/pwa@0.801.0
    added 5 packages from 2 contributors and audited 17175 packages in 5.562s
    found 0 vulnerabilities
    
    Installed packages for tooling via npm.
    CREATE ngsw-config.json (585 bytes)
    CREATE src/manifest.webmanifest (1095 bytes)
    CREATE src/assets/icons/icon-128x128.png (1253 bytes)
    CREATE src/assets/icons/icon-144x144.png (1394 bytes)
    CREATE src/assets/icons/icon-152x152.png (1427 bytes)
    CREATE src/assets/icons/icon-192x192.png (1790 bytes)
    CREATE src/assets/icons/icon-384x384.png (3557 bytes)
    CREATE src/assets/icons/icon-512x512.png (5008 bytes)
    CREATE src/assets/icons/icon-72x72.png (792 bytes)
    CREATE src/assets/icons/icon-96x96.png (958 bytes)
    UPDATE angular.json (3789 bytes)
    UPDATE package.json (1365 bytes)
    UPDATE src/app/app.module.ts (604 bytes)
    UPDATE src/index.html (488 bytes)
    added 1 package from 1 contributor and audited 17177 packages in 4.707s
    found 0 vulnerabilities
```

## Add Support for Apple Mobile Devices

Add the "meta name" and "link rel" tags in the `<head>` section in the index.html file in the src folder:
```html
    <link rel="apple-touch-icon" href="./assets/icons/icon-96x96.png">
    <meta name="apple-mobile-web-app-status-bar" content="#1976d2">
    <meta name="apple-mobile-web-app-title" content="AngularReference">
```

# Add Server-side Rendering (SSR)

[Server-side Rendering (SSR): An intro to Angular Universal](https://angular.io/guide/universal)
Lets now add server-side Rendering.

Execute the following command in the terminal:
```javascript
    ng add @nguniversal/express-engine --clientProject angularpwassrseoref
```
The Angular CLI will generate the following output:
```javascript
    Installing packages for tooling via npm.
    + @angular/pwa@0.801.0
    added 5 packages from 2 contributors and audited 17175 packages in 5.562s
    found 0 vulnerabilities
    
    Installed packages for tooling via npm.
    CREATE ngsw-config.json (585 bytes)
    CREATE src/manifest.webmanifest (1095 bytes)
    CREATE src/assets/icons/icon-128x128.png (1253 bytes)
    CREATE src/assets/icons/icon-144x144.png (1394 bytes)
    CREATE src/assets/icons/icon-152x152.png (1427 bytes)
    CREATE src/assets/icons/icon-192x192.png (1790 bytes)
    CREATE src/assets/icons/icon-384x384.png (3557 bytes)
    CREATE src/assets/icons/icon-512x512.png (5008 bytes)
    CREATE src/assets/icons/icon-72x72.png (792 bytes)
    CREATE src/assets/icons/icon-96x96.png (958 bytes)
    UPDATE angular.json (3789 bytes)
    UPDATE package.json (1365 bytes)
    UPDATE src/app/app.module.ts (604 bytes)
    UPDATE src/index.html (488 bytes)
    added 1 package from 1 contributor and audited 17177 packages in 4.707s
    found 0 vulnerabilities

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

# Compile and Run Angular Client and Express Server(SSR)

Execute the following command in the terminal:
```javascript
    npm run build:ssr
    npm run serve:ssr
```
Browse to [http://localhost:4000](http://localhost:4000/)

![](https://wpbest.io/Media/Default/Angular-PWA-SSR-SEO/Angular-PWA-SSR-SEO-001.png)


The Angular App is running.


![](https://wpbest.io/Media/Default/Angular-PWA-SSR-SEO/Angular-PWA-SSR-SEO-002.png)


Open Chrome DevTools


![](https://wpbest.io/Media/Default/Angular-PWA-SSR-SEO/Angular-PWA-SSR-SEO-003.png)


Just running on a local computer we are getting great results. In order to get 100%, it will have to be hosted on a fast cloud server with HTTPS, and HTTP/2 enabled.

This reference app can be used as a basis for other more complex Angular Applications.

# Source Code

The source code can be found on [GitHub](https://github.com/wpbest/Angular-PWA-SSR-SEO-Reference)

