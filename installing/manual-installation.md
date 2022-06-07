# Manual installation

It's a good idea to understand how programs are installed on your system before we make use of an additional tool to manage the process.

## Environment variables

Generally, most operating systems (**OS**) make use of environment variables (**Env**) to "communicate" a given state or context to the running system and other programs that run on the OS.

Open a terminal and write either `env` or `printenv` to view your current context. You should see something like the following.

```bash
SYSTEMD_EXEC_PID=653702
GNOME_TERMINAL_SCREEN=/org/gnome/Terminal/screen/0d39d6b8_7a92_47e0_8f89_6cab8d1681ce
LANG=en_US.UTF-8
XDG_CURRENT_DESKTOP=ubuntu:GNOME
PWD=/home/roxell/Documents/elva/nodejs-crash-course
WAYLAND_DISPLAY=wayland-0
LC_IDENTIFICATION=sv_SE.UTF-8
QT_IM_MODULE=ibus
LC_MEASUREMENT=sv_SE.UTF-8
DESKTOP_SESSION=ubuntu
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin
```

Try to note the **notorious** `PATH` variable; in most systems, this variable is used to look up your system's binaries. In short, when you write a command in the terminal **, your OS will try to look through the different folders specified in the PATH variable to find a matching executable**. Finally, your OS will execute the binary.

Suppose you've downloaded and installed a program but can't seem to run it. In that case, you've likely forgotten to add the install directory to the PATH variable.

### Writing and Reading Env(s)

If you export a variable, the given variable will exist in the current session until it's removed or if the session terminates.

```bash
# Set the variable
export HELLO=world

# Read the variable
echo $HELLO

# Remove the variable
unset HELLO
```

## Downloading and Installing Node

Either go [here](https://nodejs.org/en/download/) and download node, or run the following: `wget -O wget -O ~/Downloads/node-v16 https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.gz`

Complete version listing can be found [here](https://nodejs.org/dist)

## Installing Node

Next, we need to unpack and move the files to our install folder.

```bash

# Move to the "Downloads" folder
cd ~/Downloads

# unzip the downloaded file
tar -xvf node-v16.tar.gz

# create your installation folder
mkdir -p ~/local/node

# moving the extracted files
mv node-v16.15.0-linux-arm64 ~/local/node

# you should now be able to run this command to output the node version
~/local/node/node-v16.15.0-linux-x64/bin/node --version

```

Finally, to help ourselves and spare our fingers. Add the folder path of the executable to the `PATH` variable.

```bash
# Run this command and then the following command to ~/.bashrc or your other startup file.
export PATH="$PATH:~/local/node/node-v16.15.0-linux-x64/bin"
```

Then, we'll be able just to run `node --version`. To not have to do this export every time after a reboot or once we open a new terminal (session), we can add the command to one of our profile file(s) (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc) which run every time we sign in to our system.

To uninstall NodeJS, remove the files we previously installed, remove the PATH re-export from your startup script, and reload your terminal session.

```bash
rm -r ~/local/node
```

Now head over to the next [section](nvm.md), where we'll utilize a tool that simplifies and automates this process and gives us a neat solution to swap between multiple node versions.
