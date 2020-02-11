# An Angular Reference SPA with SEO

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-SEO%2FAngular-SEO.png?alt=media&token=b1165a01-34b9-4e30-a72e-1d1c5d7d6a6a)

# Introduction

When developing an Angular application, it's great to start off with a reference application that has the basic requirements for the web. One very important key feature is SEO (Search Engine Optimization)


# Requirements

Instead of starting out from scratch, Let's use what we already accomplished. Please clone the application [Angular Single Page Application](https://angularadvisors.com/blog/2019-10-12_Angular_Single_Page_Application). The GitHub link is at the end of the page.

Do a global search on the text "ngref" and change the application name from "ngref" to "ngseoref".

## Add SEO (Search Engine Optimization)
## robots.txt

Create the file robots.txt to the src folder and create the text

```javascript
User-agent: *
Allow: /
```

## sitemap.xml

Create the file sitemap.xml to the src folder and create the text. Instead of using "localhost", use the URL of the website.

```html
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>localhost/</loc>
        <lastmod>2019-07-03</lastmod>
        <changefreq>always</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
```

## angular.json

Modify angular.json and add "src/robots.txt" and "src/sitemap.xml" in the assets,

```javascript
            assets": [
                "src/favicon.ico",
                "src/assets",
                "src/robots.txt",
                "src/sitemap.xml"
            ],
```

## index.html

Add the "meta name" tags in the `<head>` section in the index.html file in the src folder:

```html
    <meta name="description" content="Angular SPA with SEO.">
```

# Install Node Packages

The first step in building an Angular application is to install the packages to build the application. These packages are listed in the package.json file. Us the following command in the terminal to install.

    npm install


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

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO%2FAngular-PWA-SSR-SEO-001.png?alt=media&token=1a9a213c-31de-46b5-8c3d-f7ac1a3e9d66)


The Angular SPA rendered page.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAngular-PWA-SSR-SEO%2FAngular-PWA-SSR-SEO-002.png?alt=media&token=95989f57-9fec-4b4b-89f5-0a62b3ff3fd4)


Open Chrome DevTools. The SPA audit is at 100% for SEO.

This reference app can be used as a basis for other more complex Angular Applications.

# Source Code

The source code can be found on [GitHub](https://github.com/wpbest/Angular-SEO-Reference)
