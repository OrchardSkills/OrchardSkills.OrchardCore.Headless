# Setting Up Node.js on Windows 10 (19H1) with Node Version Manager

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fnvm%2FNoveVersionManagerWindows.png?alt=media&token=b7aca2ce-bd8f-467a-a97b-ca20da6998b1)

## Introduction

Node.js can be difficult to install and if you need a different Node.js version it can be frustrating switching or reinstalling but with NVM it can make things much easier.

**Prerequisites**
Make sure you have completed: [Setting Up a Windows 10 (19H1) Basic Development Environment](https://angularadvisors.com/blog/2019-10-03_Setting_Up_a_Windows_10_%2819H1%29_Basic_Development_Environmnt).


## Install NVM

Open PowerShell and run the command:

```javascript
choco install nvm.portable
```

## Display Version

```javascript
nvm --version
v0.34.0
```

## List Available Node.JS Version

```javascript
nvm ls-remote
```

## Install Node.js Version

```javascript
nvm install 10.16
```

## Use a Specific Node.js Version

```javascript
nvm use 10.16
```

## List the Installed Node.js Version

```javascript
nvm list
```

## Remove Unused Node.js Version

```javascript
nvm uninstall v10.16.0
```

## Display currently activated version of Node

```javascript
nvm current
```

## Benefits of Node Version Manager

Aside from saving time and effort, being able to switch between Node versions has a few significant benefits. For instance, let’s say a tool claims to support just one specific version of Node.js, but you want to see if it works with another version that you prefer. If you encounter bugs, Version Manager makes it simple to switch node versions for quick troubleshooting. Otherwise, you’d have to continuously uninstall and reinstall node versions and their global packages to switch back and forth.

## Summary

Knowing how to use Node Version Manager can help you save a lot of time, which is usually extremely important to development teams. Keep this guide handy just in case you ever need a refresher, but with such a slight learning curve, you’ll likely memorize the commands fairly quickly
