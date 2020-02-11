# Setting Up Node.js on Debian 10 (Buster) Linux with Node Version Manager

![Node Version Manager](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fnvm%2FNVM-Debian.png?alt=media&token=65fc3240-9678-4371-9521-b7616d6b2ba6)

## Introduction

Node.js can be difficult to install and if you need a different Node.js version it can be frustrating switching or reinstalling but with NVM it can make things much easier.

**Prerequisites**
Make sure you have completed: [Setting Up a Debian 10 (Buster) Linux Basic Development Environment](https://angularadvisors.com/blog/2019-10-01_Setting_Up_a_Debian_10_%28Buster%29_Linux_Basic_Development_Environment).


## Install NVM

First of all, You need to install NVM on your system. A bash script is available to install nvm on your system. Use the following command to install NVM

curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash


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

