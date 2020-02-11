# Homebrew Package Manager for macOS

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FHomebrew-Package-Manager%2FHomebrew-macOS.png?alt=media&token=0d1c5b77-a7c0-4780-9fc1-643935120a87)

# Introduction

Homebrew is a package manager designed for installing UNIX tools and other open-source applications on Mac OS X. It will quickly download and install them, compiling them from the source. Homebrew Cask extends Homebrew with support for installing binary apps — the kind you normally drag to your Applications folder from DMG files.

# Documentation

The official website for [Homebrew Documentation](https://docs.brew.sh/)

# Install Homebrew

The ruby script installs Homebrew to /usr/local so that you don’t need sudo when you brew install. It is a careful script; it can be run even if you have stuff installed to /usr/local already. It tells you exactly what it will do before it does it too. You have to confirm everything it will do before it starts.
Paste that in a macOS Terminal prompt.

```javascript
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Output:
```javascript
    ==> This script will install:
    /usr/local/bin/brew
    /usr/local/share/doc/homebrew
    /usr/local/share/man/man1/brew.1
    /usr/local/share/zsh/site-functions/_brew
    /usr/local/etc/bash_completion.d/brew
    /usr/local/Homebrew
    ==> The following new directories will be created:
    /usr/local/etc
    /usr/local/include
    /usr/local/lib
    /usr/local/sbin
    /usr/local/share
    /usr/local/var
    /usr/local/opt
    /usr/local/share/zsh
    /usr/local/share/zsh/site-functions
    /usr/local/var/homebrew
    /usr/local/var/homebrew/linked
    /usr/local/Cellar
    /usr/local/Caskroom
    /usr/local/Homebrew
    /usr/local/Frameworks
    
    Press RETURN to continue or any other key to abort
    ==> /usr/bin/sudo /bin/mkdir -p /usr/local/etc /usr/local/include /usr/local/lib /usr/local/sbin /usr/local/share /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Homebrew /usr/local/Frameworks
    Password:
    ==> /usr/bin/sudo /bin/chmod g+rwx /usr/local/etc /usr/local/include /usr/local/lib /usr/local/sbin /usr/local/share /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Homebrew /usr/local/Frameworks
    ==> /usr/bin/sudo /bin/chmod 755 /usr/local/share/zsh /usr/local/share/zsh/site-functions
    ==> /usr/bin/sudo /usr/sbin/chown william.best /usr/local/etc /usr/local/include /usr/local/lib /usr/local/sbin /usr/local/share /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Homebrew /usr/local/Frameworks
    ==> /usr/bin/sudo /usr/bin/chgrp admin /usr/local/etc /usr/local/include /usr/local/lib /usr/local/sbin /usr/local/share /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Homebrew /usr/local/Frameworks
    ==> /usr/bin/sudo /bin/mkdir -p /Users/william.best/Library/Caches/Homebrew
    ==> /usr/bin/sudo /bin/chmod g+rwx /Users/william.best/Library/Caches/Homebrew
    ==> /usr/bin/sudo /usr/sbin/chown william.best /Users/william.best/Library/Caches/Homebrew
    ==> Downloading and installing Homebrew...
    remote: Enumerating objects: 31, done.
    remote: Counting objects: 100% (31/31), done.
    remote: Compressing objects: 100% (23/23), done.
    remote: Total 124622 (delta 16), reused 17 (delta 8), pack-reused 124591
    Receiving objects: 100% (124622/124622), 29.52 MiB | 3.37 MiB/s, done.
    Resolving deltas: 100% (91309/91309), done.
    From https://github.com/Homebrew/brew
     * [new branch] master -> origin/master
     * [new tag] 0.1 -> 0.1
     * [new tag] 0.2 -> 0.2
     * [new tag] 0.3 -> 0.3
     * [new tag] 0.4 -> 0.4
     * [new tag] 0.5 -> 0.5
     * [new tag] 0.6 -> 0.6
     * [new tag] 0.7 -> 0.7
     * [new tag] 0.7.1 -> 0.7.1
     * [new tag] 0.8 -> 0.8
     * [new tag] 0.8.1 -> 0.8.1
     * [new tag] 0.9 -> 0.9
     * [new tag] 0.9.1 -> 0.9.1
     * [new tag] 0.9.2 -> 0.9.2
     * [new tag] 0.9.3 -> 0.9.3
     * [new tag] 0.9.4 -> 0.9.4
     * [new tag] 0.9.5 -> 0.9.5
     * [new tag] 0.9.8 -> 0.9.8
     * [new tag] 0.9.9 -> 0.9.9
     * [new tag] 1.0.0 -> 1.0.0
     * [new tag] 1.0.1 -> 1.0.1
     * [new tag] 1.0.2 -> 1.0.2
     * [new tag] 1.0.3 -> 1.0.3
     * [new tag] 1.0.4 -> 1.0.4
     * [new tag] 1.0.5 -> 1.0.5
     * [new tag] 1.0.6 -> 1.0.6
     * [new tag] 1.0.7 -> 1.0.7
     * [new tag] 1.0.8 -> 1.0.8
     * [new tag] 1.0.9 -> 1.0.9
     * [new tag] 1.1.0 -> 1.1.0
     * [new tag] 1.1.1 -> 1.1.1
     * [new tag] 1.1.10 -> 1.1.10
     * [new tag] 1.1.11 -> 1.1.11
     * [new tag] 1.1.12 -> 1.1.12
     * [new tag] 1.1.13 -> 1.1.13
     * [new tag] 1.1.2 -> 1.1.2
     * [new tag] 1.1.3 -> 1.1.3
     * [new tag] 1.1.4 -> 1.1.4
     * [new tag] 1.1.5 -> 1.1.5
     * [new tag] 1.1.6 -> 1.1.6
     * [new tag] 1.1.7 -> 1.1.7
     * [new tag] 1.1.8 -> 1.1.8
     * [new tag] 1.1.9 -> 1.1.9
     * [new tag] 1.2.0 -> 1.2.0
     * [new tag] 1.2.1 -> 1.2.1
     * [new tag] 1.2.2 -> 1.2.2
     * [new tag] 1.2.3 -> 1.2.3
     * [new tag] 1.2.4 -> 1.2.4
     * [new tag] 1.2.5 -> 1.2.5
     * [new tag] 1.2.6 -> 1.2.6
     * [new tag] 1.3.0 -> 1.3.0
     * [new tag] 1.3.1 -> 1.3.1
     * [new tag] 1.3.2 -> 1.3.2
     * [new tag] 1.3.3 -> 1.3.3
     * [new tag] 1.3.4 -> 1.3.4
     * [new tag] 1.3.5 -> 1.3.5
     * [new tag] 1.3.6 -> 1.3.6
     * [new tag] 1.3.7 -> 1.3.7
     * [new tag] 1.3.8 -> 1.3.8
     * [new tag] 1.3.9 -> 1.3.9
     * [new tag] 1.4.0 -> 1.4.0
     * [new tag] 1.4.1 -> 1.4.1
     * [new tag] 1.4.2 -> 1.4.2
     * [new tag] 1.4.3 -> 1.4.3
     * [new tag] 1.5.0 -> 1.5.0
     * [new tag] 1.5.1 -> 1.5.1
     * [new tag] 1.5.10 -> 1.5.10
     * [new tag] 1.5.11 -> 1.5.11
     * [new tag] 1.5.12 -> 1.5.12
     * [new tag] 1.5.13 -> 1.5.13
     * [new tag] 1.5.14 -> 1.5.14
     * [new tag] 1.5.2 -> 1.5.2
     * [new tag] 1.5.3 -> 1.5.3
     * [new tag] 1.5.4 -> 1.5.4
     * [new tag] 1.5.5 -> 1.5.5
     * [new tag] 1.5.6 -> 1.5.6
     * [new tag] 1.5.7 -> 1.5.7
     * [new tag] 1.5.8 -> 1.5.8
     * [new tag] 1.5.9 -> 1.5.9
     * [new tag] 1.6.0 -> 1.6.0
     * [new tag] 1.6.1 -> 1.6.1
     * [new tag] 1.6.10 -> 1.6.10
     * [new tag] 1.6.11 -> 1.6.11
     * [new tag] 1.6.12 -> 1.6.12
     * [new tag] 1.6.13 -> 1.6.13
     * [new tag] 1.6.14 -> 1.6.14
     * [new tag] 1.6.15 -> 1.6.15
     * [new tag] 1.6.16 -> 1.6.16
     * [new tag] 1.6.17 -> 1.6.17
     * [new tag] 1.6.2 -> 1.6.2
     * [new tag] 1.6.3 -> 1.6.3
     * [new tag] 1.6.4 -> 1.6.4
     * [new tag] 1.6.5 -> 1.6.5
     * [new tag] 1.6.6 -> 1.6.6
     * [new tag] 1.6.7 -> 1.6.7
     * [new tag] 1.6.8 -> 1.6.8
     * [new tag] 1.6.9 -> 1.6.9
     * [new tag] 1.7.0 -> 1.7.0
     * [new tag] 1.7.1 -> 1.7.1
     * [new tag] 1.7.2 -> 1.7.2
     * [new tag] 1.7.3 -> 1.7.3
     * [new tag] 1.7.4 -> 1.7.4
     * [new tag] 1.7.5 -> 1.7.5
     * [new tag] 1.7.6 -> 1.7.6
     * [new tag] 1.7.7 -> 1.7.7
     * [new tag] 1.8.0 -> 1.8.0
     * [new tag] 1.8.1 -> 1.8.1
     * [new tag] 1.8.2 -> 1.8.2
     * [new tag] 1.8.3 -> 1.8.3
     * [new tag] 1.8.4 -> 1.8.4
     * [new tag] 1.8.5 -> 1.8.5
     * [new tag] 1.8.6 -> 1.8.6
     * [new tag] 1.9.0 -> 1.9.0
     * [new tag] 1.9.1 -> 1.9.1
     * [new tag] 1.9.2 -> 1.9.2
     * [new tag] 1.9.3 -> 1.9.3
     * [new tag] 2.0.0 -> 2.0.0
     * [new tag] 2.0.1 -> 2.0.1
     * [new tag] 2.0.2 -> 2.0.2
     * [new tag] 2.0.3 -> 2.0.3
     * [new tag] 2.0.4 -> 2.0.4
     * [new tag] 2.0.5 -> 2.0.5
     * [new tag] 2.0.6 -> 2.0.6
     * [new tag] 2.1.0 -> 2.1.0
     * [new tag] 2.1.1 -> 2.1.1
     * [new tag] 2.1.2 -> 2.1.2
     * [new tag] 2.1.3 -> 2.1.3
     * [new tag] 2.1.4 -> 2.1.4
     * [new tag] 2.1.5 -> 2.1.5
     * [new tag] 2.1.6 -> 2.1.6
     * [new tag] 2.1.7 -> 2.1.7
    HEAD is now at 74920d966 Merge pull request #6290 from lembacon/bottle_publisher-bottle_info
    ==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
     https://github.com/Homebrew/brew#donations
    ==> Tapping homebrew/core
    Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
    remote: Enumerating objects: 5021, done.
    remote: Counting objects: 100% (5021/5021), done.
    remote: Compressing objects: 100% (4796/4796), done.
    remote: Total 5021 (delta 51), reused 1090 (delta 34), pack-reused 0
    Receiving objects: 100% (5021/5021), 4.02 MiB | 5.03 MiB/s, done.
    Resolving deltas: 100% (51/51), done.
    Tapped 2 commands and 4809 formulae (5,064 files, 12.5MB).
    Already up-to-date.
    ==> Installation successful!
    
    ==> Homebrew has enabled anonymous aggregate formulae and cask analytics.
    Read the analytics documentation (and how to opt-out) here:
     https://docs.brew.sh/Analytics
    
    ==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
     https://github.com/Homebrew/brew#donations
    ==> Next steps:
    - Run `brew help` to get started
    - Further documentation: 
     https://docs.brew.sh
```
When prompted enter your password.
Run the following command once you’re done to ensure Homebrew is installed and working properly:

```javascript
brew doctor
```
Output:
```javascript
brew doctor
Your system is ready to brew.
```

# Install Open-source Utilities With Homebrew

The Homebrew command is the underlying package manager that installs all those UNIX and open-source utilities you might want. It’s the easiest way to install them on macOS, just as it is on Linux.
To search for a utility:

```javascript
brew search name
```

To download and install that package:

```javascript
brew install name
```

To remove that package from your system later:

```javascript
brew remove name
```
