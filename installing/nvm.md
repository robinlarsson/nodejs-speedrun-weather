# Nvm

NVM is a tool that allows us to swap between different node versions on one system. You may find the source files and installation instructions [here](https://github.com/nvm-sh/nvm#installing-and-updating). Various functionality is provided in other versions of NodeJS; therefore, we might need to swap between versions when we change between projects.

## Installing Nvm

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Running either of the above commands downloads a script and runs it. The script clones the nvm repository to `~/.nvm` and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

## Installing Node using Nvm

Next, we'll use of `nvm` to swap between different node versions.

```bash
# List remote long term support (lts) releases
nvm ls-remote --lts

# Select a version and install it
nvm install v16.14.2

# Verify node version by output
node --version
```

### Managing versions

```bash
# List installed version
nvm ls

# change version to 14
nvm install v14.19.1
nvm use v14

# change back to 16
nvm use v16
```

Now you know the important stuff when it comes to managing node versions... Let's write [our first program](../examples/first-program.md).
