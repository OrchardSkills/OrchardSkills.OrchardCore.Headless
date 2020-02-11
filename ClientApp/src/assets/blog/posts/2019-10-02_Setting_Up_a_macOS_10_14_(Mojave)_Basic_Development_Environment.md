# Setting Up a macOS 10.14 (Mojave) Basic Development Environment

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOSMojave.jpg?alt=media&token=48ed3775-4245-4157-9c4b-d76dbabe242d)


I will be setting up a basic macOS 10.14 (Mojave) basic development environment. This environment will have the Chrome web browser, VSCode, an IDE (Integrated Development Environment), and Git, GitHub Desktop, CMS (Code Management System).

# How to create a bootable installer for macOS

It can be useful to install macOS on multiple computers without downloading the installer each time.

## Download macOS

Download a macOS installer URL:

https://support.apple.com/kb/HT201475


Find the installer in your Applications folder as a single ”Install” file, such as Install macOS Mojave.

## Use the 'createinstallmedia' command in Terminal

After downloading the installer, connect the USB flash drive or other volume you're using for the bootable installer. Make sure that it has at least 12GB of available storage and is formatted as Mac OS Extended.
Open Terminal, which is in the Utilities folder of your Applications folder.
Type or paste one of the following commands in Terminal. These assume that the installer is still in your Applications folder, and MyVolume is the name of the USB flash drive or other volume you're using. If it has a different name, replace MyVolume accordingly.
sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
Press Return after typing the command.
When prompted, type your administrator password and press Return again. Terminal doesn't show any characters as you type your password.
When prompted, type Y to confirm that you want to erase the volume, then press Return. Terminal shows the progress as the bootable installer is created.
When Terminal says that it's done, the volume will have the same name as the installer you downloaded, such as Install macOS Mojave. You can now quit Terminal and eject the volume.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-001.png?alt=media&token=5eec8e0a-f4e0-4565-b44e-7261a35698a5)


To start up from macOS Recovery, turn on your Mac and immediately press and hold one of the following combinations on your keyboard.
 
Command (⌘)-R


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-001.png?alt=media&token=5eec8e0a-f4e0-4565-b44e-7261a35698a5)


Booting macOS 10.14 Mojave


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-003.png?alt=media&token=2561a246-294a-4379-bbba-3f2086630b01)


Select the “United States”


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-004.png?alt=media&token=01c4efd6-abdd-4e76-9578-c66a1d322e90)


Choose the US keyboard layout and then press the continue button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-005.png?alt=media&token=f9018eef-7117-4409-9b84-8d5fa4498f4e)


Press the Continue button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-006.png?alt=media&token=9ff216b4-12c1-4fcf-b98e-c080c578522a)


Select the “Don’t transfer any information now” and then press the continue button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-007.png?alt=media&token=e3935f28-ade7-45f0-9065-4ff76be43bc3)


Enter the Apple ID.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-008.png?alt=media&token=84a126f0-8fe4-4e68-97b1-cffd18e67ccf)


Enter the password and press the continue button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-009.png?alt=media&token=395fae5b-485d-4fed-8be4-fa7c064c50f1)


Press the “Agree” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-010.png?alt=media&token=c03f7a32-1775-4234-8324-88130db50368)


Press the “Agree” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-011.png?alt=media&token=65885537-9e1f-45b7-94d3-e8f0b97cd0c0)


Enter he Full name, account name, password, password confirm, password hint and then press the continue button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-012.png?alt=media&token=741c43a9-8c5e-4cc9-a8be-e7a668925a03)


Press the “Continue” button. Pressing the “Customize Settings” is out of scope for this topic.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-013.png?alt=media&token=51414810-9d87-4ab6-90ce-c382457e9fc1)


Press the “Continue” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-014.png?alt=media&token=902afaf9-be97-4e6e-b1ae-a0d81398a51b)


Select a theme and press the continue button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-015.png?alt=media&token=371b04b4-56a9-4e0a-a38a-6c3e509eb2c4)


The operating system and settings are now installed.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-016.png?alt=media&token=fc9c5398-d13e-469e-a2ef-eb9887e7c0f2)


Navigate to the Chrome download page and press the “Download Chrome for Mac” button.
URL: [https://www.google.com/chrome/?brand=CHBD&gclid=EAIaIQobChMIp4uIypWL4wIVT_DACh3YeQkLEAAYASAAEgLVqPD_BwE&gclsrc=aw.ds](https://www.google.com/chrome/?brand=CHBD&gclid=EAIaIQobChMIp4uIypWL4wIVT_DACh3YeQkLEAAYASAAEgLVqPD_BwE&gclsrc=aw.ds)


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-017.png?alt=media&token=6a27ea20-d62f-4ec4-a14f-12deab87bfdd)


Chrome is downloading.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-018.png?alt=media&token=c7deba97-03d8-415e-aa22-fc15df37bf19)


Copy the Chrome App to the Applications folder.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-019.png?alt=media&token=3f5c04cf-1f2a-496d-95b5-2997b3fcfb99)


Copying the Chrome App to the Applications folder.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-020.png?alt=media&token=5ad486e9-3b59-48b9-9b42-c8c90cb1f63f)


Run Chrome by clicking on the icon and confirm by selecting the “Open” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-021.png?alt=media&token=f50cda63-51be-4043-9c31-dd45982e32cc)


Press the “Get Started” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-022.png?alt=media&token=517eaa8f-81da-4e2f-8fc8-57738665311b)


Press the “Set as default” button to make Chrome the default browser.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-023.png?alt=media&token=3c538f58-17b6-4e16-9beb-970cf76cb67c)


Select the “Use Chrome” button to accept.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-024.png?alt=media&token=8bf91009-79fe-4ec5-b388-426dc17d3aa9)


Open the Terminal App and type the git command.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-025.png?alt=media&token=c433af64-d35b-4909-8a0a-638e2ec02975)


Select the “Install” button to install git.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-026.png?alt=media&token=a57094c9-3ccc-41ae-b538-dcb3f77ec897)


Press the “Agree” button to continue.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-027.png?alt=media&token=8b4c9f32-b63f-4fac-b6c2-9f49bcaeed96)


Git is now being installed.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-028.png?alt=media&token=716e5ae6-ae14-4f7f-9b6d-d17310cfd415)


Downloading the Git software.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-029.png?alt=media&token=977b67ba-12d1-4c09-9cb9-a9b2742c7e02)


Press the “Done” Button to complete the install.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-030.png?alt=media&token=a65b2939-e944-447b-87e7-894cff743a11)


Browse to Visual Studio Code website and press the “Mac” download button.
URL: [https://code.visualstudio.com/download](https://code.visualstudio.com/download).


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-031.png?alt=media&token=eaf788ba-ac1e-44ee-9b89-f6f246fb3791)


Click on the downloaded file top open it.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-032.png?alt=media&token=8c9ae1a8-7f4e-42c8-9b40-adc718855cf6)


Unzip the file.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-033.png?alt=media&token=9a48cf83-ef88-43b5-b80c-09e4c2b25061)


Unzipping file. Once unzip, move the app to the Applications folder.


![](https://wpbest.io/Media/Default/macos/macOS-034.png)


Run the command in the terminal:
```javascript
    cat << EOF >> ~/.bash_profile
    # Add Visual Studio Code (code)
    export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
    EOF
```    
![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-034.png?alt=media&token=d8ac8504-b3f3-4d18-9347-e175e21c5635)


Browse to the GitHub Desktop website and press the “Download for macOS” button.
URL: [https://desktop.github.com](https://desktop.github.com/)


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fmacos%2FmacOS-036.png?alt=media&token=b499a75f-7364-4833-a998-e0ade5ac962e)


Unzip the file and move the app to the Applications folder.

The Mac is now set up for basic software development.
