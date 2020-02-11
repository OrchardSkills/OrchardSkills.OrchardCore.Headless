# Setting Up a Windows 10 (19H1) Basic Development Environment

![Windows 10 19H1](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2Fwindows-10-19h1.jpg?alt=media&token=840ae2ba-cae5-465e-b09a-3a58bb5867a0)

# Download Windows 10 (19H1)

In the post, I will be setting up a basic Windows 10 (19H1) Development Environment. This environment will have VSCode, an IDE (Integrated Development Environment) and Git, GitHub Desktop, CMS (Code Management System).


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-001.png?alt=media&token=073d8181-ae91-4464-8cb2-2abf025c10b2)



## Create Windows 10 Installation Media

The first thing to do is to get a copy of Windows 10 (19H1). Browse to the URL:
[https://www.microsoft.com/en-us/software-download/windows10](https://www.microsoft.com/en-us/software-download/windows10) 
Press the “Download tool now” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-002.png?alt=media&token=62feecc2-4ad5-4127-8e8c-55dc7b89f1c2)


Download the “MediaCreationTool1903.exe” tool to your downloads folder and run the application by double-clicking on the file.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-003.png?alt=media&token=dbd56c3c-c77e-4104-a96f-4acfc5b3362b)


Select the “Yes” button to continue.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-004.png?alt=media&token=5caf9885-9b68-4edd-b6ad-dcefbc456ab0)


Accept the license terms by clicking on the “Accept” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-005.png?alt=media&token=0ae4cead-5a05-40c6-a2c7-ea6e1609b21e)


Select the “Create installation media (USB flash drive, DVD, or ISO file) for another PC” option.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-006-0.png?alt=media&token=639f71a7-6d69-41b4-843d-4939436d5470)


Select “English (United State)”, “Windows 10” and “64-bit (x64) for the language, edition, and architecture and press the “Next” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-006-1.png?alt=media&token=597b9087-ee94-4228-91b9-24c9243a6edc)


Select the “USB flash drive” option and then press the “Next” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-006-2.png?alt=media&token=e9f557ef-402e-4273-b2ed-9e83c1d6740c)


Once it detects and displays the USB flash drive, press the “Next” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-006-2.png?alt=media&token=e9f557ef-402e-4273-b2ed-9e83c1d6740c)


Another option is to save the media to an ISO file. Select the “ISO file” option and press the “Next” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-008.png?alt=media&token=fc5695e9-dd2b-46a0-bf09-893777ced656)


Select the downloads folder and default file name and then press the “Save” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-009.png?alt=media&token=637622a1-5378-4193-8f12-d7bce522f312)


The file download will begin. It may take some time to complete the download depending on how fast the internet connection.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-010.png?alt=media&token=1de72aa5-54be-4bb5-b3fd-20278634e674)


Now creating the media.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-011.png?alt=media&token=c6c9fcda-63a5-4c32-a637-c5d1d680b26a)


Once the download is complete press the “Finish” button.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-013.png?alt=media&token=d458de29-51e4-4cba-b28b-34d1c9881031)


Reboot the computer with the USB flash drive plugged in to start the boot process.


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-014.png?alt=media&token=93469499-e8a1-4e5d-84e1-501a65622be6)


Select the language, time currency format and keyboard input method and press next.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-015.png?alt=media&token=53d87d5b-cca6-4b5e-9da3-09f3c4a5b102)


Press the “Install now” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-016.png?alt=media&token=393c0381-c324-440b-95ca-af78266a3b05)


Setup is starting.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-017.png?alt=media&token=93743cca-dec3-458a-873f-4e9f31c3e728)


Enter the product key and press the “Next” button. If you do not have a product key press the “I don’t have a product key” text.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-018.png?alt=media&token=5d3676b0-3112-4f6d-9a26-643812fb4dcf)


Select “Windows 10 Pro” and then press the “Next” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-019.png?alt=media&token=e7fac7a2-ea91-4665-a6a7-ec192a8d2216)


Accept the license term and then press the “Next” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-020.png?alt=media&token=24aaa84e-f3c7-4892-bdbf-2136f1b4e1f0)


Select “Custom: Install Windows only (advanced)”.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-021.png?alt=media&token=8e8ba14e-6609-4229-8389-99ebb4d22fe3)


Select the drive to load Windows on and press the “Next” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-022.png?alt=media&token=1d4ddf4b-d899-4581-945f-d4cf88015285)


Windows is now being installed. Wait until it is finishing up

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-023.png?alt=media&token=9a9ae8de-e717-4736-a43a-db871c7ed093)


After finishing up, it will need to be restarted.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-024.png?alt=media&token=9adb43de-2dc1-400d-82e6-fa5160bfb1bf)


Windows is starting to boot.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-025.png?alt=media&token=810fdbc4-77b6-4667-a6fd-8b13074cdbf7)


Windows has almost completed the boot install sequence.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-026.png?alt=media&token=84d80e2f-a378-4ba2-8d67-4c92173fef94)


Select The "United States” and the press the “Yes” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-027.png?alt=media&token=cb7b4d48-6151-4ecc-a090-bc33eb73f73e)


Select the US keyboard layout and then select the “Yes” button to continue

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-028.png?alt=media&token=209c8f48-9be9-46c2-be95-84db38bb5d6d)


If there is no additional keyboard press the “Skip” button to continue otherwise add another layout.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-030.png?alt=media&token=25078202-7f11-46ff-83f3-8b8b68feb7ad)


Windows is continuing the setup process.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-032.png?alt=media&token=b5cfbbf9-42f3-4446-a903-8694f7aba271)


Select “Set up for personal use” and then press the “Next” button to continue. Setup for an organization is out of scope for this topic.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-032.png?alt=media&token=b5cfbbf9-42f3-4446-a903-8694f7aba271)


Select “Offline account” and then press the “Next” button to continue. If you have a Microsoft account you can install with your Email, phone or Skype information.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-033.png?alt=media&token=d72d03ed-5ec5-4110-969b-18faf99b9abc)


Press the “No” button to continue. Microsoft really wants telemetry.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-034.png?alt=media&token=c59ca009-bcea-43a9-a148-923a02da1344)


Enter the username and then press the “Next” button to continue

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-035.png?alt=media&token=33a94a36-4678-44e7-8dad-1592fd783dc0)


Enter the password and then press the “Next” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-036.png?alt=media&token=ce7b0262-08cf-456f-9eca-65908fe25609)


Confirm the password and then press the “Next” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-037.png?alt=media&token=accfba4a-59a0-40e9-8915-c5502f5e3a2b)


Select the first security question, enter an answer, and then press the “Next” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-038.png?alt=media&token=91fad8ec-dfe6-486a-9113-e03303cf6c51)


Select the second security question, enter an answer, and then press the “Next” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-039.png?alt=media&token=48e04efd-dc08-4e38-b4ff-ab3088fa72bb)


Select the third security question, enter an answer, and then press the “Next” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-040.png?alt=media&token=ad929703-6455-4301-9d9a-8a393fcc09a1)


Select the “No” button to continue. Selecting “Yes” is out of the scope for this topic.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-041.png?alt=media&token=58747f2d-beba-4eaa-b4ce-ef68510b0333)


Select the “Decline” button to continue. Selecting “Accept” is out of the scope for this topic.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-042.png?alt=media&token=3d98ac9d-87bd-458f-968e-ab36c8573670)


Select the default privacy settings by selecting the “Accept” button. Customizing these setting are out of the scope of this topic.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-043.png?alt=media&token=ded61b04-0cc8-4407-970a-b0f66017375c)


Windows is finishing the setup.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-044.png?alt=media&token=73d79ad6-c40b-4f61-b71a-53e4ea6203cb)


Windows setup is now completed. Install additional software development tools.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-045.png?alt=media&token=bb2ab44f-c45c-440d-8881-850bb9cb7689)


The easiest and fastest way to install software is through a package manager. Install the Chocolatey package manager. URL: [https://chocolatey.org/](https://chocolatey.org/).

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-046.png?alt=media&token=32a9a61a-32fe-4168-9813-75ec23864669)


Run the PowerShell command:
Get-ExecutionPolicy. If it returns Restricted, then run Set-ExecutionPolicy AllSigned or Set-ExecutionPolicy Bypass -Scope Process.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-047.png?alt=media&token=071f8e01-11d1-491b-b741-ab5c2239f2d7)


Run PowerShell as administrator.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-048.png?alt=media&token=bdba07ea-7f8c-4af4-bd26-117498f5018f)


Select the “Yes” button to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-049.png?alt=media&token=4123ee7d-e1e5-4a53-8cdc-c56e270ddce2)


Now run the following PowerShell command:
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')).

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-050.png?alt=media&token=ac230efb-59d6-4308-a7c5-6b1b4269177a)


Chocolatey is now installed.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-051.png?alt=media&token=55ac4db6-00c6-4975-999a-368a555643ea)


Install Git by using the PowerShell command:
choco install git.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-052.png?alt=media&token=848eaecd-9d22-4e38-9450-b91c18738bee)


Enter “A” to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-053.png?alt=media&token=d56e7e55-518e-4eaa-ada7-80dab21801a8)


Git is now installed.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-054.png?alt=media&token=ab836728-aaf1-475b-866f-e9b6c0031ff3)


Install VSCode. Enter the PowerShell command:
choco install vscode.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-055.png?alt=media&token=a3826fdb-9f9f-4de9-b547-7220ceaf8481)


Enter “A” to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-056.png?alt=media&token=645dab32-b564-4a39-8f1e-0c102d61a3af)


VSCode is now installed.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-057.png?alt=media&token=0e80cc65-1612-4f54-9697-b9bc25ecd58c)


Install Google Chrome. Enter the PowerShell command:
choco install googlechrome.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-058.png?alt=media&token=86ff47b6-51b8-473f-b22e-46254da6e302)


Enter “A” to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-059.png?alt=media&token=a123fb84-ff23-4298-bf9f-a71db860ae39)


Google Chrome is now installed.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-060.png?alt=media&token=82f3217a-fd62-4c63-9f17-041dc1b331b0)


Install GitHub desktop. Go to the URL and download the Windows 64bit edition:
URL: [https://desktop.github.com/](https://desktop.github.com/).

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-061.png?alt=media&token=920bc603-5f3a-4753-9f78-e2be1f7d142d)


Sign in to GitHub.com. If there is no GitHub account, one can be created by browsing to this URL:

https://github.com/

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-062.png?alt=media&token=4c0bffd4-2778-4ffe-bf0e-d71f05c26197)


Enter the username and password.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-063.png?alt=media&token=114764bc-fa72-4327-827e-2ab79f8247e6)


Configure get with the name and Email.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Fwindows%2FWindows-064.png?alt=media&token=c86f76b5-939d-4a0d-9038-f5da28d991b9)


GitHub desktop is now installed. The Windows 10 (19H1) is now ready for basic development.
