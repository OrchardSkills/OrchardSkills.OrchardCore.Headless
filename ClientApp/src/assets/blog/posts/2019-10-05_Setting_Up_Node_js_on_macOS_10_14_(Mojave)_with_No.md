# Setting Up Node.js on macOS 10.14 (Mojave) with Node Version Manager

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fnvm%2FModeVersionManagerMac.png?alt=media&token=4edd5678-3729-4fa5-825e-fe14aed4d487)

## Introduction

Node.js can be difficult to install and if you need a different Node.js version it can be frustrating switching or reinstalling but with NVM it can make things much easier.

**Prerequisites**
Make sure you have completed: [Setting Up a macOS 10.14 (Mojave) Basic Development Environment](https://angularadvisors.com/blog/2019-10-02_Setting_Up_a_macOS_10_14_%28Mojave%29_Basic_Development_Environment).
If there is no.bash_profile file, create it before running the installation command.

    touch ~/.bash_profile


## Install NVM

First of all, you need to install NVM on your system. A bash script is available to install nvm on your system. Use the following command to install NVM
```javascript
    curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```
Reload your profile by entering the following command (or close/re-open the Terminal window).
```javascript
    source ~/.bash_profile
```

## Display Version
    nvm --version

v0.34.0


## List Available Node.js Version
    nvm ls-remote


## Install Node.js Version
    nvm install 10.16


## Use a Specific Node.js Version
    nvm use 10.16


## List the Installed Node.js Versions
    nvm list


## Remove Unused Node.js Version
    nvm uninstall v10.16.0


## Display currently activated version of Node
    nvm current


## Benefits of Node Version Manager

Aside from saving time and effort, being able to switch between Node versions has a few significant benefits. For instance, let’s say a tool claims to support just one specific version of Node.js, but you want to see if it works with another version that you prefer. If you encounter bugs, Version Manager makes it simple to switch node versions for quick troubleshooting. Otherwise, you’d have to continuously uninstall and reinstall node versions and their global packages to switch back and forth.

## Summary

Knowing how to use Node Version Manager can help you save a lot of time, which is usually extremely important to development teams. Keep this guide handy just in case you ever need a refresher, but with such a slight learning curve, you’ll likely memorize the commands fairly quickly.

