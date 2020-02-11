# Setting Up a Debian 10 (Buster) Linux Basic Development Environment

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-debian-10-buster.png?alt=media&token=8760fca8-18fa-4551-b5e0-333e173b521c)


I will be setting up a Debian 10 (Buster) Linux basic development environment. This environment will have the Google Chrome web browser, Microsoft VSCode, an IDE (Integrated Development Environment) and Git, GitHub Desktop, CMS (Code Management System).


![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-001.png?alt=media&token=05d7848b-0b61-4b21-b35b-42d94ed975b7)


Download the Debian 10 (Buster) Linux distribution. Browse to the URL: [https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/buster_di_rc1+nonfree/amd64/iso-cd/](https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/buster_di_rc1+nonfree/amd64/iso-cd/)
And click on the file: firmware-buster-DI-rc1-amd64-netinst.iso.
At the time of the writing, Debian 10 is in RC1 (Release Candidate #1).

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-002.png?alt=media&token=c4fa2f5a-587a-46ee-a3bc-28be12a33535)


Click the “Save” button.
Create a bootable USB drive with the image.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-003.png?alt=media&token=aa470582-24ad-4dc5-8729-94334d326b0b)


Select “Graphical install”

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-004.png?alt=media&token=79eb229f-b5ce-4e43-bed2-1005f30a8c9c)


Select “English” and press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-005.png?alt=media&token=466f53da-ac27-4702-b924-b78e9699a6ec)


Select “United Stated” and press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-006.png?alt=media&token=cd6bab89-8773-49fe-a12c-7c4157181dfc)


Select “American English” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-007.png?alt=media&token=3f0c3570-3c73-418a-b303-642f27c51e09)


Installing Debian 10 (Buster) Linux.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-008.png?alt=media&token=70f0438b-66e5-4dfd-946f-a8b2071e67ab)


Use the default and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-009.png?alt=media&token=eea89617-beac-45ab-96ac-f13d83a58f3a)


Use the default and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-010.png?alt=media&token=58d986b8-135d-432c-9446-95e2cb0c7265)


Enter the root password and confirmation, Press “Continue”.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-011.png?alt=media&token=de6421c2-f2b6-449d-ba7e-adc3f7793e5d)


Enter the Full name and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-012.png?alt=media&token=8969f9bb-9866-49cf-b1c2-9705126aee6e)


Enter the username and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-013.png?alt=media&token=93ecd2a6-d42e-4f07-adce-c41d229359c8)


Enter the username password and confirmation. Press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-014.png?alt=media&token=ff8cbd9e-7abd-4042-b52e-6072d30899a2)


Select the time zone and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-015.png?alt=media&token=a32f49b0-bba7-4912-bee0-ad1ab0661a08)


Select “Guided – use entire disk” and then press “Continue”.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-016.png?alt=media&token=779f3920-49dc-43a6-aab4-973a26d744b1)


Select the disk partition and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-017.png?alt=media&token=91f82a78-648f-473d-85d8-b1f8af79685d)


Select “All files in one partition” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-018.png?alt=media&token=d858767e-1a90-47ce-b37f-0dbd5c8790f7)


Select “Finish partition and write changes to disk” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-019.png?alt=media&token=8ba41d30-865f-425a-9e4f-ded765874f04)


Select “Yes” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-020.png?alt=media&token=60cf4a3e-1270-4366-ba05-33e31768aa2e)


Select “No” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-021.png?alt=media&token=ff3a5c60-9869-4161-ba59-5ad37faa0ce0)


Select the “United State” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-022.png?alt=media&token=1e1079c8-da48-4cc3-8b48-b8a5a75201be)


Select the “deb.debuan.org” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-023.png?alt=media&token=35e87a48-e966-48b8-b6d1-7f741d67468f)


Use the default [blank] and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-024.png?alt=media&token=7028dfd2-16d2-4dff-81e2-e42e47f38d7d)


Setting up and configuring package manager.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-025.png?alt=media&token=5da188a7-face-4ba5-8580-c70edde51d89)


Select “Yes” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-026.png?alt=media&token=7857918e-28b3-483b-8471-8263fc9d0d70)


Select “Debian desktop environment”, “GNOME”, “print server”, “SSH server” and “standard system utilities”. Press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-027.png?alt=media&token=c43d752b-9851-4661-ba3c-7a9ee8db9165)


Installing software.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-028.png?alt=media&token=ff22fcb4-d812-4ce5-b510-7dfff225de9b)


Select “Yes” and then press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-029.png?alt=media&token=302d881f-48b0-42a3-bb20-15bfc632f88b)


Select “/dev/sda” and press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-030.png?alt=media&token=1be10fe5-2b09-4aa6-a453-f693dcaa3f19)


Debian 10 (Buster) installation is complete. Press the “Continue” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-031.png?alt=media&token=7ad72523-2e16-46bd-8c32-881c4a995e16)


Browse to [https://code.visualstudio.com/download/](https://code.visualstudio.com/download/).
Select the .deb 64 bit.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-032.png?alt=media&token=4827ee42-2eed-4e75-8e21-1a7cb2f22643)


Open the terminal.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-033.png?alt=media&token=48236bb2-7f04-4281-885a-e8f2ca38766c)


Run the command:

```javascript
sudo dpkg -I code_1.35.1-1560350270_amd64.deb
```

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-034.png?alt=media&token=5f8a00fc-5e5b-40c6-8add-3b508b1165c3)


Press “Down Chrome” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-035.png?alt=media&token=e66247f5-688f-4154-a4c2-af6420e9b7c7)


Press the “Accept and Install” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-036.png?alt=media&token=f0e49672-c370-4ec6-bbcf-0455ea4471ab)


Select “Save File” and press the “OK” button.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-037.png?alt=media&token=df2480fa-56ff-42ac-b58c-3fbe46a5ca47)


Run the command:
sudo dpkg -i google-chrome-stabe_current_amd64.deb

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-038.png?alt=media&token=5e8c5db4-5094-4f30-9940-3cec5d8204cb)


Error processing packages.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-039.png?alt=media&token=cd018c18-55f9-4a8b-ac69-96add17e0a10)


Run the command to fix errors:
sudo apt install -f

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-040.png?alt=media&token=d562bc62-ba64-4856-b332-f9a2a2072605)


Press “Y” to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-041.png?alt=media&token=3fb8d649-ad50-4690-866e-47fbfdb63bf8)


Install now fixed.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-042.png?alt=media&token=b1d44d18-5f8d-4362-9f91-9f52e8accaec)


upgrade

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-043.png?alt=media&token=ca2485ba-ff79-4ee7-9127-a325b62e9283)


Update to the latest. Run the commands:

```javascript
sudo apt udate
sudo apt udgrade
```

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-044.png?alt=media&token=5cafc36e-309f-4e28-b716-7d6d5736f4e7)


Press “Y” to continue.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-045.png?alt=media&token=3e21bdfd-c045-483e-bf9e-1b50576d947d)


Select “2.04 Linux RC1” by clicking on the link.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-046.png?alt=media&token=6ffd254c-6579-42e2-8929-ed1b9fe99d87)


Click on “GitHubDesktop-linux-2.0.4-linux1.deb” to download file.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-047.png?alt=media&token=5c67d240-6984-4d24-b8d4-451783886402)


Click on “GitHubDesktop-linux-2.0.4-linux1.deb” to download file.

![](https://firebasestorage.googleapis.com/v0/b/prod-angular-advisors.appspot.com/o/blog%2Fposts%2Flinux%2Flinux-048.png?alt=media&token=ca025d5c-9dec-42af-8881-fd69a5e4ded4)


Run the command:
sudo dpkg -I GitHubDesktop-linux-2.0.4-linux1.deb

![](https://wpbest.io/Media/Default/linux/linux-049.png)


Errors in install. Need to fix.
To fix, run the command:

```javascript
sudo apt install -f
Press 'Y'
```

![](https://wpbest.io/Media/Default/linux/linux-050.png)


Log into GitHub desktop to finish the configuration.
The Debian 10 (Buster) development environment is now ready for basic development.
