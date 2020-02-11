# AWS Toolkit for VSCode

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode.png?alt=media&token=df100cf3-57f9-453d-acb3-112ea7326caa)

# Deploy an Angular SEO App on AWS
# Introduction

Visual Studio Code has become an enormously popular tool for serverless developers, partly due to the intuitive user interface. It’s also because of the rich ecosystem of extensions that can customize and automate so much of the development experience. We are excited to announce that the AWS Toolkit for Visual Studio Code extension is now generally available, making it even easier for the development community to build serverless projects using this editor. The AWS Toolkit for Visual Studio Code is open-sourced on [GitHub](https://github.com/aws/aws-toolkit-vscode), allowing builders to make their contributions to the code base and feature set. The toolkit enables you to easily develop serverless applications, including creating a new project, local debugging, and deploying your project—all conveniently from within the editor. The toolkit supports Node.js, Python, and .NET.
Using the AWS Toolkit for Visual Studio Code, you can:

- Test your code locally with step-through debugging in a Lambda-like environment.
- Deploy your applications to the AWS Region of your choice.
- Invoke your Lambda functions locally or remotely.
- Specify function configurations such as an event payload and environment variables.

Amazon is distributing the AWS Toolkit for Visual Studio Code under the open source Apache License, version 2.0.

# Requirements

Before installing the AWS Toolkit for Visual Studio Code the AWS CLI and AWS SAM CLI must be installed. Note: Docker is also required for the AWS SAM CLI.

# AWS (Amazon Web Services)

**Note**: **For macOS,  recommend using Homebrew to set up the needed Amazon AWS utilities for macOS. It's much easier. I show both ways for completeness.**
Please referer to [Homebrew Package Manager for macOS](https://wpbest.io/homebrew-package-manager-for-macos) for more information on installation and set up.

## Installing PIP on macOS

Modern Mac systems come with Python and PIP already installed. However, this version of Python tends to be outdated and not the best choice for serious Python development, so it’s highly recommended that you install a more current version of Python and PIP.
If you want to use the native system Python installation but don’t have PIP available, you can install PIP with the following command in Terminal:
```
    sudo easy_install pip
```
Output:
```javascript
    $ sudo easy_install pip
    Password:
    Searching for pip
    Reading https://pypi.python.org/simple/pip/
    Best match: pip 19.1.1
    Downloading https://files.pythonhosted.org/packages/93/ab/f86b61bef7ab14909bd7ec3cd2178feb0a1c86d451bc9bccd5a1aedcde5f/pip-19.1.1.tar.gz#sha256=44d3d7d3d30a1eb65c7e5ff1173cdf8f7467850605ac7cc3707b6064bddd0958
    Processing pip-19.1.1.tar.gz
    Writing /tmp/easy_install-oMr0CB/pip-19.1.1/setup.cfg
    Running pip-19.1.1/setup.py -q bdist_egg --dist-dir /tmp/easy_install-oMr0CB/pip-19.1.1/egg-dist-tmp-eLmyrA
    /System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/distutils/dist.py:267: UserWarning: Unknown distribution option: 'python_requires'
     warnings.warn(msg)
    warning: no files found matching 'docs/docutils.conf'
    warning: no previously-included files found matching '.coveragerc'
    warning: no previously-included files found matching '.mailmap'
    warning: no previously-included files found matching '.appveyor.yml'
    warning: no previously-included files found matching '.travis.yml'
    warning: no previously-included files found matching 'tox.ini'
    warning: no files found matching 'Makefile' under directory 'docs'
    warning: no files found matching '*.bat' under directory 'docs'
    warning: no previously-included files found matching 'src/pip/_vendor/six'
    warning: no previously-included files found matching 'src/pip/_vendor/six/moves'
    warning: no previously-included files matching '*.pyi' found under directory 'src/pip/_vendor'
    no previously-included directories found matching '.github'
    no previously-included directories found matching '.azure-pipelines'
    no previously-included directories found matching 'docs/build'
    no previously-included directories found matching 'news'
    no previously-included directories found matching 'tasks'
    no previously-included directories found matching 'tests'
    no previously-included directories found matching 'tools'
    creating /Library/Python/2.7/site-packages/pip-19.1.1-py2.7.egg
    Extracting pip-19.1.1-py2.7.egg to /Library/Python/2.7/site-packages
    Adding pip 19.1.1 to easy-install.pth file
    Installing pip script to /usr/local/bin
    Installing pip2.7 script to /usr/local/bin
    Installing pip2 script to /usr/local/bin
    
    Installed /Library/Python/2.7/site-packages/pip-19.1.1-py2.7.egg
    Processing dependencies for pip
    Finished processing dependencies for pip
    $ 
```

## Installing Python with Homebrew

Homebrew makes installing utilities so much easier. One great feature of Homebrew is that it sets up all your paths. Other package managers install the software but the paths to the application need to be set up manually.

    brew install python

Output:
```javascript
    Updating Homebrew...
    ==> Auto-updated Homebrew!
    Updated 1 tap (homebrew/cask).
    No changes to formulae.
    
    ==> Installing dependencies for python: gdbm, openssl, readline, sqlite and xz
    ==> Installing python dependency: gdbm
    ==> Downloading https://homebrew.bintray.com/bottles/gdbm-1.18.1.mojave.bottle.1.tar.gz
    ######################################################################## 100.0%
    ==> Pouring gdbm-1.18.1.mojave.bottle.1.tar.gz
    🍺 /usr/local/Cellar/gdbm/1.18.1: 20 files, 586.8KB
    ==> Installing python dependency: openssl
    ==> Downloading https://homebrew.bintray.com/bottles/openssl-1.0.2s.mojave.bottle.tar.gz
    ==> Downloading from https://akamai.bintray.com/c4/c4a762d719c2be74ac686f1aafabb32f3c5d5ff3a98935c4925a1ddb9c750ee1?__gda__=exp=1562952964~hmac=b2539f67ea669d8b2ca2fc525d368e6d6b262c
    ######################################################################## 100.0%
    ==> Pouring openssl-1.0.2s.mojave.bottle.tar.gz
    ==> Caveats
    A CA file has been bootstrapped using certificates from the SystemRoots
    keychain. To add additional certificates (e.g. the certificates added in
    the System keychain), place .pem files in
     /usr/local/etc/openssl/certs
    
    and run
     /usr/local/opt/openssl/bin/c_rehash
    
    openssl is keg-only, which means it was not symlinked into /usr/local,
    because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.
    
    If you need to have openssl first in your PATH run:
     echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile
    
    For compilers to find openssl you may need to set:
     export LDFLAGS="-L/usr/local/opt/openssl/lib"
     export CPPFLAGS="-I/usr/local/opt/openssl/include"
    
    ==> Summary
    🍺 /usr/local/Cellar/openssl/1.0.2s: 1,795 files, 12.0MB
    ==> Installing python dependency: readline
    ==> Downloading https://homebrew.bintray.com/bottles/readline-8.0.0_1.mojave.bottle.tar.gz
    ==> Downloading from https://akamai.bintray.com/fa/faab004773e6449dd97971311cb62a9bbaa44f1483b82640e818f0c355c8266d?__gda__=exp=1562952969~hmac=bb0a9b947a59ed5528f60c25a24120c1444413
    ######################################################################## 100.0%
    ==> Pouring readline-8.0.0_1.mojave.bottle.tar.gz
    ==> Caveats
    readline is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides the BSD libedit library, which shadows libreadline.
    In order to prevent conflicts when programs look for libreadline we are
    defaulting this GNU Readline installation to keg-only.
    
    For compilers to find readline you may need to set:
     export LDFLAGS="-L/usr/local/opt/readline/lib"
     export CPPFLAGS="-I/usr/local/opt/readline/include"
    
    ==> Summary
    🍺 /usr/local/Cellar/readline/8.0.0_1: 48 files, 1.5MB
    ==> Installing python dependency: sqlite
    ==> Downloading https://homebrew.bintray.com/bottles/sqlite-3.28.0.mojave.bottle.tar.gz
    ==> Downloading from https://akamai.bintray.com/e3/e360850758d2104b4ae9eab8ae57903a37b62c550c779ddf32100720f832508d?__gda__=exp=1562952971~hmac=2a0653a59f3f156759dad3adad76ac48569e88
    ######################################################################## 100.0%
    ==> Pouring sqlite-3.28.0.mojave.bottle.tar.gz
    ==> Caveats
    sqlite is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides an older sqlite3.
    
    If you need to have sqlite first in your PATH run:
     echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.bash_profile
    
    For compilers to find sqlite you may need to set:
     export LDFLAGS="-L/usr/local/opt/sqlite/lib"
     export CPPFLAGS="-I/usr/local/opt/sqlite/include"
    
    ==> Summary
    🍺 /usr/local/Cellar/sqlite/3.28.0: 11 files, 3.7MB
    ==> Installing python dependency: xz
    ==> Downloading https://homebrew.bintray.com/bottles/xz-5.2.4.mojave.bottle.tar.gz
    ==> Downloading from https://akamai.bintray.com/01/010667293df282c8bceede3bcd36953dd57c56cef608d09a5b50694ab7d4b96b?__gda__=exp=1562952974~hmac=5e7e094c4b1cfbbb9afa44e82d0b351706ca28
    ######################################################################## 100.0%
    ==> Pouring xz-5.2.4.mojave.bottle.tar.gz
    🍺 /usr/local/Cellar/xz/5.2.4: 92 files, 1MB
    ==> Installing python
    ==> Downloading https://homebrew.bintray.com/bottles/python-3.7.4.mojave.bottle.tar.gz
    ==> Downloading from https://akamai.bintray.com/81/81fc6e5914a16387bd09387ce08e99122ea3ad65c55ded42ea07f40952aa20d1?__gda__=exp=1562952975~hmac=6f611dd3abcfff822ac56d25e3bc82ace8f3b3
    ######################################################################## 100.0%
    ==> Pouring python-3.7.4.mojave.bottle.tar.gz
    ==> /usr/local/Cellar/python/3.7.4/bin/python3 -s setup.py --no-user-cfg install --force --verbose --install-scripts=/usr/local/Cellar/python/3.7.4/bin --install-lib=/usr/local/lib/p
    ==> /usr/local/Cellar/python/3.7.4/bin/python3 -s setup.py --no-user-cfg install --force --verbose --install-scripts=/usr/local/Cellar/python/3.7.4/bin --install-lib=/usr/local/lib/p
    ==> /usr/local/Cellar/python/3.7.4/bin/python3 -s setup.py --no-user-cfg install --force --verbose --install-scripts=/usr/local/Cellar/python/3.7.4/bin --install-lib=/usr/local/lib/p
    ==> Caveats
    Python has been installed as
     /usr/local/bin/python3
    
    Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
    `python3`, `python3-config`, `pip3` etc., respectively, have been installed into
     /usr/local/opt/python/libexec/bin
    
    If you need Homebrew's Python 2.7 run
     brew install python@2
    
    You can install Python packages with
     pip3 install <package>
    They will install into the site-package directory
     /usr/local/lib/python3.7/site-packages
    
    See: https://docs.brew.sh/Homebrew-and-Python
    ==> Summary
    🍺 /usr/local/Cellar/python/3.7.4: 3,865 files, 60MB
    ==> `brew cleanup` has not been run in 30 days, running now...
    Pruned 0 symbolic links and 2 directories from /usr/local
    ==> Caveats
    ==> openssl
    A CA file has been bootstrapped using certificates from the SystemRoots
    keychain. To add additional certificates (e.g. the certificates added in
    the System keychain), place .pem files in
     /usr/local/etc/openssl/certs
    
    and run
     /usr/local/opt/openssl/bin/c_rehash
    
    openssl is keg-only, which means it was not symlinked into /usr/local,
    because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.
    
    If you need to have openssl first in your PATH run:
     echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile
    
    For compilers to find openssl you may need to set:
     export LDFLAGS="-L/usr/local/opt/openssl/lib"
     export CPPFLAGS="-I/usr/local/opt/openssl/include"
    
    ==> readline
    readline is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides the BSD libedit library, which shadows libreadline.
    In order to prevent conflicts when programs look for libreadline we are
    defaulting this GNU Readline installation to keg-only.
    
    For compilers to find readline you may need to set:
     export LDFLAGS="-L/usr/local/opt/readline/lib"
     export CPPFLAGS="-I/usr/local/opt/readline/include"
    
    ==> sqlite
    sqlite is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides an older sqlite3.
    
    If you need to have sqlite first in your PATH run:
     echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.bash_profile
    
    For compilers to find sqlite you may need to set:
     export LDFLAGS="-L/usr/local/opt/sqlite/lib"
     export CPPFLAGS="-I/usr/local/opt/sqlite/include"
    
    ==> python
    Python has been installed as
     /usr/local/bin/python3
    
    Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
    `python3`, `python3-config`, `pip3` etc., respectively, have been installed into
     /usr/local/opt/python/libexec/bin
    
    If you need Homebrew's Python 2.7 run
     brew install python@2
    
    You can install Python packages with
     pip3 install <package>
    They will install into the site-package directory
     /usr/local/lib/python3.7/site-packages
    
    See: https://docs.brew.sh/Homebrew-and-Python

```
## Installing the AWS CLI

There are two common ways to install the AWS CLI on macOS.

1. Homebrew
2. pip

The easiest way is to use Homebrew. 

## Installing the AWS CLI Using pip

The primary distribution method for the AWS CLI on Linux, Windows, and macOS is pip. This is a package manager for Python that provides an easy way to install, upgrade, and remove Python packages and their dependencies.
**Current AWS CLI Version**
The AWS CLI is updated frequently with support for new services and commands. To determine whether you have the latest version, see the releases page on GitHub.
If you already have pip and a supported version of Python, you can install the AWS CLI by using the following command. If you have Python version 3+ installed, we recommend that you use the pip3 command.

    pip3 install awscli --upgrade --user

Output:
```javascript
    $ pip3 install awscli --upgrade --user
    Collecting awscli
     Downloading https://files.pythonhosted.org/packages/48/f1/0cf4f0e0ed1943069d665319890dd1453edb40833b6269def875a997ea4c/awscli-1.16.197-py2.py3-none-any.whl (1.7MB)
     |████████████████████████████████| 1.7MB 1.9MB/s 
    Collecting PyYAML<=5.1,>=3.10; python_version != "2.6" (from awscli)
     Downloading https://files.pythonhosted.org/packages/9f/2c/9417b5c774792634834e730932745bc09a7d36754ca00acf1ccd1ac2594d/PyYAML-5.1.tar.gz (274kB)
     |████████████████████████████████| 276kB 8.0MB/s 
    Collecting botocore==1.12.187 (from awscli)
     Downloading https://files.pythonhosted.org/packages/ed/c1/41ea5d5c5dad3e028c6ce750f9ed7db3535cbfd43d9fb84afe9504f75a5d/botocore-1.12.187-py2.py3-none-any.whl (5.6MB)
     |████████████████████████████████| 5.6MB 4.5MB/s 
    Collecting colorama<=0.3.9,>=0.2.5 (from awscli)
     Downloading https://files.pythonhosted.org/packages/db/c8/7dcf9dbcb22429512708fe3a547f8b6101c0d02137acbd892505aee57adf/colorama-0.3.9-py2.py3-none-any.whl
    Collecting docutils>=0.10 (from awscli)
     Downloading https://files.pythonhosted.org/packages/36/fa/08e9e6e0e3cbd1d362c3bbee8d01d0aedb2155c4ac112b19ef3cae8eed8d/docutils-0.14-py3-none-any.whl (543kB)
     |████████████████████████████████| 552kB 4.9MB/s 
    Collecting s3transfer<0.3.0,>=0.2.0 (from awscli)
     Downloading https://files.pythonhosted.org/packages/16/8a/1fc3dba0c4923c2a76e1ff0d52b305c44606da63f718d14d3231e21c51b0/s3transfer-0.2.1-py2.py3-none-any.whl (70kB)
     |████████████████████████████████| 71kB 12.5MB/s 
    Collecting rsa<=3.5.0,>=3.1.2 (from awscli)
     Downloading https://files.pythonhosted.org/packages/e1/ae/baedc9cb175552e95f3395c43055a6a5e125ae4d48a1d7a924baca83e92e/rsa-3.4.2-py2.py3-none-any.whl (46kB)
     |████████████████████████████████| 51kB 17.1MB/s 
    Collecting jmespath<1.0.0,>=0.7.1 (from botocore==1.12.187->awscli)
     Downloading https://files.pythonhosted.org/packages/83/94/7179c3832a6d45b266ddb2aac329e101367fbdb11f425f13771d27f225bb/jmespath-0.9.4-py2.py3-none-any.whl
    Collecting python-dateutil<3.0.0,>=2.1; python_version >= "2.7" (from botocore==1.12.187->awscli)
     Downloading https://files.pythonhosted.org/packages/41/17/c62faccbfbd163c7f57f3844689e3a78bae1f403648a6afb1d0866d87fbb/python_dateutil-2.8.0-py2.py3-none-any.whl (226kB)
     |████████████████████████████████| 235kB 13.7MB/s 
    Collecting urllib3<1.26,>=1.20; python_version >= "3.4" (from botocore==1.12.187->awscli)
     Downloading https://files.pythonhosted.org/packages/e6/60/247f23a7121ae632d62811ba7f273d0e58972d75e58a94d329d51550a47d/urllib3-1.25.3-py2.py3-none-any.whl (150kB)
     |████████████████████████████████| 153kB 9.0MB/s 
    Collecting pyasn1>=0.1.3 (from rsa<=3.5.0,>=3.1.2->awscli)
     Downloading https://files.pythonhosted.org/packages/7b/7c/c9386b82a25115cccf1903441bba3cbadcfae7b678a20167347fa8ded34c/pyasn1-0.4.5-py2.py3-none-any.whl (73kB)
     |████████████████████████████████| 81kB 9.1MB/s 
    Collecting six>=1.5 (from python-dateutil<3.0.0,>=2.1; python_version >= "2.7"->botocore==1.12.187->awscli)
     Downloading https://files.pythonhosted.org/packages/73/fb/00a976f728d0d1fecfe898238ce23f502a721c0ac0ecfedb80e0d88c64e9/six-1.12.0-py2.py3-none-any.whl
    Building wheels for collected packages: PyYAML
     Building wheel for PyYAML (setup.py) ... done
     Stored in directory: /Users/william.best/Library/Caches/pip/wheels/ad/56/bc/1522f864feb2a358ea6f1a92b4798d69ac783a28e80567a18b
    Successfully built PyYAML
    Installing collected packages: PyYAML, jmespath, six, python-dateutil, urllib3, docutils, botocore, colorama, s3transfer, pyasn1, rsa, awscli
     WARNING: The scripts pyrsa-decrypt, pyrsa-decrypt-bigfile, pyrsa-encrypt, pyrsa-encrypt-bigfile, pyrsa-keygen, pyrsa-priv2pub, pyrsa-sign and pyrsa-verify are installed in '/Users/william.best/Library/Python/3.7/bin' which is not on PATH.
     Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
    Successfully installed PyYAML-5.1 awscli-1.16.197 botocore-1.12.187 colorama-0.3.9 docutils-0.14 jmespath-0.9.4 pyasn1-0.4.5 python-dateutil-2.8.0 rsa-3.4.2 s3transfer-0.2.1 six-1.12.0 urllib3-1.25.3
    $ 
```
Unfortunately, the path to python is not set up after the install process. That takes an extra step. Modify your ~/.bash_profile file and add the line at the end of the file:

    export PATH=~/Library/Python/3.7/bin/:$PATH

Make sure the path is correct for the version you are installing.

## Installing the AWS CLI Using Homebrew

An easier way is to use Homebrew to install the AWS CLI. It will set up the paths for you and it works.

    brew install awscli

Output:
```javascript
    $ brew install awscli
    Updating Homebrew...
    ==> Auto-updated Homebrew!
    Updated 1 tap (homebrew/cask).
    No changes to formulae.
    
    ==> Downloading https://homebrew.bintray.com/bottles/awscli-1.16.190.mojave.bottle.tar.gz
    ==> Downloading from https://akamai.bintray.com/f9/f95c57a90b9a61cc5676de0b0eac0779a8ed832d95e70ce9408b74933656c98e?__gda__=exp=1562956419~hmac=75dbfcac69405fdb40c1649ad59514f6165854399f482eea387ea5d20c3aa8aa&response-content-disposition
    ######################################################################## 100.0%
    ==> Pouring awscli-1.16.190.mojave.bottle.tar.gz
    ==> Caveats
    The "examples" directory has been installed to:
     /usr/local/share/awscli/examples
    
    Bash completion has been installed to:
     /usr/local/etc/bash_completion.d
    
    zsh completions and functions have been installed to:
     /usr/local/share/zsh/site-functions
    ==> Summary
    🍺 /usr/local/Cellar/awscli/1.16.190: 5,840 files, 51.9MB
    $ 
```

## Installing the AWS SAM CLI on macOS

**Prerequisites**
Docker is required to run the AWS SAM CLI. Please refer to following for installing Docker for the specific platform:

[Setting Up Docker on macOS 10.14 (Mojave)](https://wpbest.io/setting-up-docker-on-macos-10-14-mojave)
[Setting Up Docker on Debian 10 (Buster) Linux](https://wpbest.io/setting-up-docker-on-debian-10-buster-linux)
[Setting Up Docker on Windows 10 (19H1)](https://wpbest.io/setting-up-docker-on-windows-10-19h1)

Add a brew tap from GitHub.

    brew tap aws/tap

Output:
```javascript
    $ brew tap aws/tap
    Updating Homebrew...
    ==> Auto-updated Homebrew!
    Updated 1 tap (homebrew/cask).
    No changes to formulae.
    
    ==> Tapping aws/tap
    Cloning into '/usr/local/Homebrew/Library/Taps/aws/homebrew-tap'...
    remote: Enumerating objects: 6, done.
    remote: Counting objects: 100% (6/6), done.
    remote: Compressing objects: 100% (5/5), done.
    remote: Total 6 (delta 0), reused 4 (delta 0), pack-reused 0
    Unpacking objects: 100% (6/6), done.
    Tapped 1 formula (32 files, 42.2KB).
    $ 
```
Install aws-sam-cli from the brew tap.

    brew install aws-sam-cli

Output:
```javascript
    $ brew install aws-sam-cli
    ==> Installing aws-sam-cli from aws/tap
    ==> Downloading https://github.com/awslabs/aws-sam-cli/releases/download/v0.18.0//aws-sam-cli-0.18.0.sierra.bottle.tar.gz
    ==> Downloading from https://github-production-release-asset-2e65be.s3.amazonaws.com/92205085/6df45e80-a330-11e9-8970-89b5f8a58a0e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=A
    ######################################################################## 100.0%
    ==> Pouring aws-sam-cli-0.18.0.sierra.bottle.tar.gz
    🍺 /usr/local/Cellar/aws-sam-cli/0.18.0: 3,794 files, 57.4MB
    $ 
```    
## Configuring the AWS CLI

For general use, the aws configure command is the fastest way to set up your AWS CLI installation. In the terminal enter the command:

    aws configure

Output:
```javascript
    $ aws configure
    AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
    AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
    Default region name [None]: us-west-2
    Default output format [None]: json
    $
```
When you type this command, the AWS CLI prompts you for four pieces of information (access key, secret access key, AWS Region, and output format), and stores them in a profile (a collection of settings) named default. This profile is then used any time you run an AWS CLI command that doesn't explicitly specify a profile to use.
**Access Key and Secret Access Key**
The AWS Access Key ID and AWS Secret Access Key are your AWS credentials. They are associated with an AWS Identity and Access Management (IAM) user or role that determines what permissions you have. For a tutorial on how to create a user with the IAM service, see [Creating Your First IAM Admin User and Group](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html) in the IAM User Guide.
Access keys consist of an access key ID and secret access key, which are used to sign programmatic requests that you make to AWS. If you don't have access keys, you can create them from the AWS Management Console. As a best practice, do not use the AWS account root user access keys for any task where it's not required. Instead, [create a new administrator IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html) with access keys for yourself.
The only time that you can view or download the secret access key is when you create the keys. You cannot recover them later. However, you can create new access keys at any time. You must also have permissions to perform the required IAM actions. For more information, see [Permissions Required to Access IAM Resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_permissions-required.html) in the IAM User Guide.
**Create access keys for an IAM user**
Sign in to the AWS Management Console and open the [IAM console](https://console.aws.amazon.com/iam/home#/home).

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode-01.png?alt=media&token=1b71c8c7-d397-4af3-93a9-bb518710ba38)


In the navigation pane, choose Users.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode-02.png?alt=media&token=83981ca7-4ef0-4f8d-8633-4709ad44c13e)


Choose the name of the user whose access keys you want to create.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode-03.png?alt=media&token=bbe8de23-620e-4cff-9470-a24e6cc615d4)


Choose the Security credentials tab.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode-04.png?alt=media&token=f4cc8cba-e242-4ca6-a464-2e99fac43269)


In the Access keys section, choose to Create an access key.
To view the new access key pair, choose Show. You will not have access to the secret access key again after this dialog box closes. Your credentials will look something like this:
Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
To download the key pair, choose Download .csv file. Store the keys in a secure location. You will not have access to the secret access key again after this dialog box closes.
Keep the keys confidential in order to protect your AWS account and never email them. Do not share them outside your organization, even if an inquiry appears to come from AWS or Amazon.com. No one who legitimately represents Amazon will ever ask you for your secret key.
After you download the .csv file, choose Close. When you create an access key, the key pair is active by default, and you can use the pair right away.


# Install AWS Toolkit for VS Code

Start the VS Code editor. Choose the Extensions icon in the Activity Bar on the side of VS Code to open the Extensions view. This opens the VS Code Marketplace. Using the search box for Extensions, search for AWS Toolkit for Visual Studio Code. Choose the entry to see its details in the right pane.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode-05.png?alt=media&token=f62482ad-1226-4958-a402-ce72e7c84a34)


In the right pane, choose Install. Once installed, if you're prompted to restart the editor, choose Reload Required to finish the installation.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode-06.png?alt=media&token=65751a79-a82f-47eb-a67c-02d234697943)


The AWS Toolkit extension for VS Code is now installed. After you install the Toolkit for VS Code, you should configure your AWS credentials to enable you to access your AWS resources from within VS Code.

# Hosting on Amazon S3 and CloudFront

The AWS Amplify CLI provides a pluggable, categorical toolchain for managing your AWS backend using AWS CloudFormation. It only requires an AWS account which can be a free tier account. You can install the CLI via NPM (the CLI requires node version 8.11+).


## Install the AWS Amplify CLI
    npm install -g @aws-amplify/cli

Output:
```javascript
    npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
    npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
    npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
    npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
    npm WARN deprecated set-value@1.0.0: Critical bug fixed in v3.0.1, please upgrade to the latest version.
    npm WARN deprecated set-value@0.4.3: Critical bug fixed in v3.0.1, please upgrade to the latest version.
    /Users/william.best/.nvm/versions/node/v10.16.0/bin/amplify -> /Users/william.best/.nvm/versions/node/v10.16.0/lib/node_modules/@aws-amplify/cli/bin/amplify
    
    > fsevents@1.2.9 install /Users/william.best/.nvm/versions/node/v10.16.0/lib/node_modules/@aws-amplify/cli/node_modules/fsevents
    > node install
    
    node-pre-gyp WARN Using request for node-pre-gyp https download 
    [fsevents] Success: "/Users/william.best/.nvm/versions/node/v10.16.0/lib/node_modules/@aws-amplify/cli/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote
    
    > core-js@2.6.9 postinstall /Users/william.best/.nvm/versions/node/v10.16.0/lib/node_modules/@aws-amplify/cli/node_modules/core-js
    > node scripts/postinstall || echo "ignore"
    
    Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
    
    The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
    > https://opencollective.com/core-js 
    > https://www.patreon.com/zloirock 
    
    Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
    
    + @aws-amplify/cli@1.8.1
    added 2003 packages from 1363 contributors in 41.918s
```    
## Clode Repository

Clone the Angular-SEO-Reference from [GitHub](https://github.com/wpbest/Angular-SEO-Reference).
```javascript
    git clone https://github.com/wpbest/Angular-SEO-Reference
```
Change directory to the project directory

    cd Angular-SEO-Reference
## Project Initialization

Run the command "amplify init" from your root project directory.

    amplify init

Output:
```javascript
    Note: It is recommended to run this command from the root of your app directory
    ? Enter a name for the project AngularSEOReference
    ? Enter a name for the environment production
    ? Choose your default editor: Visual Studio Code
    ? Choose the type of app that you're building javascript
    Please tell us about your project
    ? What javascript framework are you using angular
    ? Source Directory Path: src
    ? Distribution Directory Path: dist/ngseoref
    ? Build Command: ng build --prod
    ? Start Command: npm start
    Using default provider awscloudformation
    
    For more information on AWS Profiles, see:
    https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html
    
    ? Do you want to use an AWS profile? Yes
    ? Please choose the profile you want to use default
    ⠙ Initializing project in the cloud...
    
    CREATE_IN_PROGRESS angularseoreference-production-20190714180952 AWS::CloudFormation::Stack Sun Jul 14 2019 18:09:53 GMT-0600 (Mountain Daylight Time) User Initiated 
    CREATE_IN_PROGRESS AuthRole AWS::IAM::Role Sun Jul 14 2019 18:09:55 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Sun Jul 14 2019 18:09:55 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS UnauthRole AWS::IAM::Role Sun Jul 14 2019 18:09:56 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS AuthRole AWS::IAM::Role Sun Jul 14 2019 18:09:56 GMT-0600 (Mountain Daylight Time) Resource creation Initiated
    CREATE_IN_PROGRESS UnauthRole AWS::IAM::Role Sun Jul 14 2019 18:09:57 GMT-0600 (Mountain Daylight Time) Resource creation Initiated
    CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Sun Jul 14 2019 18:09:57 GMT-0600 (Mountain Daylight Time) Resource creation Initiated
    ⠸ Initializing project in the cloud...
    
    CREATE_COMPLETE AuthRole AWS::IAM::Role Sun Jul 14 2019 18:10:14 GMT-0600 (Mountain Daylight Time) 
    CREATE_COMPLETE UnauthRole AWS::IAM::Role Sun Jul 14 2019 18:10:15 GMT-0600 (Mountain Daylight Time) 
    CREATE_COMPLETE DeploymentBucket AWS::S3::Bucket Sun Jul 14 2019 18:10:17 GMT-0600 (Mountain Daylight Time) 
    ⠸ Initializing project in the cloud...
    
    CREATE_COMPLETE angularseoreference-production-20190714180952 AWS::CloudFormation::Stack Sun Jul 14 2019 18:10:19 GMT-0600 (Mountain Daylight Time) 
    ✔ Successfully created initial AWS cloud resources for deployments.
    ✔ Initialized provider successfully.
    Initialized your environment successfully.
    
    Your project has been successfully initialized and connected to the cloud!
    
    Some next steps:
    "amplify status" will show you what you've added already and if it's locally configured or deployed
    "amplify <category> add" will allow you to add features like user login or a backend API
    "amplify push" will build all your local backend resources and provision it in the cloud
    "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
    
    Pro tip:
    Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

```
![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode-07.png?alt=media&token=51eafeb8-e216-4f72-bb08-b291ba8a7591)


Click on CloudFormation and you can now see the entries.

## Add Hosting

Once your project environment is configured the next step is to add hosting for your application. Service workers require a secure origin. For serving HTTPs you have two options:

1. Enable the PROD mode in hosting for HTTPs with CloudFront
2. Setup your own custom domain with Route53 and Amazon Certificate Manager and point it to your S3 bucket

For this time, we will use the PROD mode in hosting so we get HTTPs out-of-the-box with the Amplify CLI and Amazon CloudFront. From the root of your project, run:

    amplify add hosting

Output:
```javascript
    ? Select the environment setup: PROD (S3 with CloudFront using HTTPS)
    ? hosting bucket name ngulareference-20190714181256-hostingbucket
    ? index doc for the website index.html
    ? error doc for the website index.html
    
    You can now publish your app using the following command:
    Command: amplify publish
```

## Publish
    amplify publish

Output:

```javascript    
    Current Environment: production
    
    | Category | Resource name | Operation | Provider plugin |
    | -------- | --------------- | --------- | ----------------- |
    | Hosting | S3AndCloudFront | Create | awscloudformation |
    ? Are you sure you want to continue? Yes
    ⠴ Updating resources in the cloud. This may take a few minutes...
    
    UPDATE_IN_PROGRESS angularseoreference-production-20190714180952 AWS::CloudFormation::Stack Sun Jul 14 2019 18:13:57 GMT-0600 (Mountain Daylight Time) User Initiated 
    CREATE_IN_PROGRESS hostingS3AndCloudFront AWS::CloudFormation::Stack Sun Jul 14 2019 18:14:00 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS hostingS3AndCloudFront AWS::CloudFormation::Stack Sun Jul 14 2019 18:14:01 GMT-0600 (Mountain Daylight Time) Resource creation Initiated
    ⠏ Updating resources in the cloud. This may take a few minutes...
    
    CREATE_IN_PROGRESS angularseoreference-production-20190714180952-hostingS3AndCloudFront-1PK2T0XA8ZIB1 AWS::CloudFormation::Stack Sun Jul 14 2019 18:14:01 GMT-0600 (Mountain Daylight Time) User Initiated
    ⠏ Updating resources in the cloud. This may take a few minutes...
    
    CREATE_IN_PROGRESS OriginAccessIdentity AWS::CloudFront::CloudFrontOriginAccessIdentity Sun Jul 14 2019 18:14:05 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Sun Jul 14 2019 18:14:05 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Sun Jul 14 2019 18:14:06 GMT-0600 (Mountain Daylight Time) Resource creation Initiated
    ⠏ Updating resources in the cloud. This may take a few minutes...
    
    CREATE_IN_PROGRESS OriginAccessIdentity AWS::CloudFront::CloudFrontOriginAccessIdentity Sun Jul 14 2019 18:14:10 GMT-0600 (Mountain Daylight Time) Resource creation Initiated
    CREATE_COMPLETE OriginAccessIdentity AWS::CloudFront::CloudFrontOriginAccessIdentity Sun Jul 14 2019 18:14:10 GMT-0600 (Mountain Daylight Time) 
    ⠏ Updating resources in the cloud. This may take a few minutes...
    
    CREATE_COMPLETE S3Bucket AWS::S3::Bucket Sun Jul 14 2019 18:14:28 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS CloudFrontDistribution AWS::CloudFront::Distribution Sun Jul 14 2019 18:14:30 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS PrivateBucketPolicy AWS::S3::BucketPolicy Sun Jul 14 2019 18:14:30 GMT-0600 (Mountain Daylight Time) 
    CREATE_IN_PROGRESS PrivateBucketPolicy AWS::S3::BucketPolicy Sun Jul 14 2019 18:14:31 GMT-0600 (Mountain Daylight Time) Resource creation Initiated
    CREATE_COMPLETE PrivateBucketPolicy AWS::S3::BucketPolicy Sun Jul 14 2019 18:14:32 GMT-0600 (Mountain Daylight Time) 
    ⠏ Updating resources in the cloud. This may take a few minutes...
    
    CREATE_IN_PROGRESS CloudFrontDistribution AWS::CloudFront::Distribution Sun Jul 14 2019 18:14:34 GMT-0600 (Mountain Daylight Time) Resource creation Initiated
    ⠸ Updating resources in the cloud. This may take a few minutes...
    
    CREATE_COMPLETE CloudFrontDistribution AWS::CloudFront::Distribution Sun Jul 14 2019 18:24:57 GMT-0600 (Mountain Daylight Time) 
    ⠼ Updating resources in the cloud. This may take a few minutes...
    
    CREATE_COMPLETE angularseoreference-production-20190714180952-hostingS3AndCloudFront-1PK2T0XA8ZIB1 AWS::CloudFormation::Stack Sun Jul 14 2019 18:24:59 GMT-0600 (Mountain Daylight Time) 
    ⠴ Updating resources in the cloud. This may take a few minutes...
    
    CREATE_COMPLETE hostingS3AndCloudFront AWS::CloudFormation::Stack Sun Jul 14 2019 18:25:50 GMT-0600 (Mountain Daylight Time) 
    UPDATE_COMPLETE_CLEANUP_IN_PROGRESS angularseoreference-production-20190714180952 AWS::CloudFormation::Stack Sun Jul 14 2019 18:25:52 GMT-0600 (Mountain Daylight Time) 
    ⠇ Updating resources in the cloud. This may take a few minutes...
    
    UPDATE_COMPLETE angularseoreference-production-20190714180952 AWS::CloudFormation::Stack Sun Jul 14 2019 18:25:52 GMT-0600 (Mountain Daylight Time) 
    ✔ All resources are updated in the cloud
    
    Hosting endpoint: https://d2i1ngiiuyzqo0.cloudfront.net
    
     
    chunk {0} runtime-es2015.703a23e48ad83c851e49.js (runtime) 1.41 kB \[entry\] [rendered]
    chunk {1} main-es2015.729fef3b0bf39e2e6916.js (main) 206 kB \[initial\] [rendered]
    chunk {2} polyfills-es2015.7a264d14fd7126ba8db0.js (polyfills) 36.4 kB \[initial\] [rendered]
    chunk {3} styles.09e2c710755c8867a460.css (styles) 0 bytes \[initial\] [rendered]
    Date: 2019-07-15T00:26:17.544Z - Hash: bf92d631695d2cc835e5 - Time: 8647ms
     
    chunk {0} runtime-es5.465c2333d355155ec5f3.js (runtime) 1.41 kB \[entry\] [rendered]
    chunk {1} main-es5.490501119fb70222ab2f.js (main) 230 kB \[initial\] [rendered]
    chunk {2} polyfills-es5.2219c87348e60efc0076.js (polyfills) 113 kB \[initial\] [rendered]
    Date: 2019-07-15T00:26:25.354Z - Hash: 73b3113db3543422ea31 - Time: 7777ms
    frontend build command exited with code 0
    ✔ Uploaded files successfully.
    Your app is published successfully.
    https://AngularSEOReference.cloudfront.net 
```    

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2FAWS-Toolkit-VSCode%2FAWS-Toolkit-VSCode-08.png?alt=media&token=350618c4-d268-47f1-9ab9-709372454273)

# Conclusion

The initial release of the AWK toolkit for VS Code is a good start. I'm looking forward to Amazon supporting more of features for AWS.

