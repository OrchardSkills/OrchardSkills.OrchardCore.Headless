# Setting Up Docker on Debian 10 (Buster) Linux

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fdocker%2FDocker-Debian.png?alt=media&token=78dbdc1f-6c71-4351-8397-57085b212569)

# Introduction

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production. This section will describe how to install and setup Docker on Debian 10 (Buster).

# Prerequisites

Make sure you have completed: [Setting Up a Debian 10 (Buster) Linux Basic Development Environment](https://angularadvisors.com/blog/2019-10-01_Setting_Up_a_Debian_10_%28Buster%29_Linux_Basic_Development_Environment).

## Uninstall Old Docker Versions

Older versions of Docker were called `docker`, `docker.io` , or `docker-engine`. If these are installed, uninstall them:

```javascript
sudo apt-get remove docker docker-engine docker.io containerd runc
```

It’s OK if `apt-get` reports that none of these packages are installed.
The contents of `/var/lib/docker/`, including images, containers, volumes, and networks, are preserved. The Docker CE package is now called `docker-ce`.


# Install Docker CE
## Install using the repository
## Update the `apt` package index:

```javascript
sudo apt-get update
```

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fdocker%2FDebian-Docker-001.png?alt=media&token=912a2107-35ee-47e8-9185-723b68353b86)

## Install packages to allow `apt` to use a repository over HTTPS:

```javascript
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common
```

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fdocker%2FDebian-Docker-002.png?alt=media&token=01e4ca1b-2d12-47e8-a950-2a5918d31817)

## Add Docker’s official GPG key:

```javascript
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```

## Verify Key

Verify that you now have the key with the fingerprint `9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88`, by searching for the last 8 characters of the fingerprint.

```javascript
sudo apt-key fingerprint 0EBFCD88
pub   4096R/0EBFCD88 2017-02-22
      Key fingerprint = 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid   Docker Release (CE deb) <docker@docker.com>
sub   4096R/F273FCD8 2017-02-22
```

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fdocker%2FDebian-Docker-003.png?alt=media&token=4c28d5b9-288a-4512-a73a-fe965b6556b0)

## Add Docker Stable Repository

```javascript
sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/debian \
    $(lsb_release -cs) \
    stable"
```

## Update Repository

```javascript
    $ sudo apt update
```

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fdocker%2FDebian-Docker-004.png?alt=media&token=8dc74c92-06ab-440f-9264-da2ebb28bd7c)

# Install Docker CE

```javascript
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Docker is now set up and ready to be used.


# Uninstall Docker CE

In case you need to uninstall Docker, follow the instructions below.

## Uninstall the Docker CE package:

```javascript
sudo apt-get purge docker-ce
```

## Delete all Images, Containers, and Volumes

Images, containers, volumes, or customized configuration files on your host are not automatically removed. To delete all images, containers, and volumes:

```javascript
sudo rm -rf /var/lib/docker
```

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fdocker%2FDebian-Docker-005.png?alt=media&token=1c4728cb-83e7-4496-9b0c-aded31118dfa)

# Install Docker Compose

```javascript
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

## Apply Executable Permissions to the Binary

```javascript
sudo chmod +x /usr/local/bin/docker-compose
```

## Test the Installation

```javascript
docker-compose --version
docker-compose version 1.24.0, build 1110ad01
```

## Add the current user to the Docker Group

```javascript
sudo usermod -a -G docker $USER
```

Both Docker and Docker Compose are installed and set up on the system.
