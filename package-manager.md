# Npm

Eventually we'll want to re-use or share our abstraction(s). To do that, we make use of npm. [Npm (Node package manager)](https://www.npmjs.com/) is an open source project that help developers easily share packages (modules of code). In brief, the npm Registry is a public collection of packages of open-source code for Node.js.

To start using npm in our project, run `npm init` in your directory. That command will prompt for some information and then create a `package.json` file. The `package.json` includes information about your project and outlines external dependencies the project needs.

Since we're working with es-modules, add `"type": "module"` to the package.json file to support es-styled imports.

```json
// package.json
{
  "name": "npm-example",
  "version": "1.0.0",
  "description": "A simple example of how to make use of external packages",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Next, we'll install a package called express and another one called change-case. Express is
a minimal web framework that makes a few things for us to speed up our API development. change-case is a lib that gives us some handy functions to transform between different text-casing-styles.

`npm install express change-case`

Your package.json should look something like this after the install command. As seen we now have a new property in the configuration called "dependencies".

```json
{
  "name": "npm-example",
  "version": "1.0.0",
  "description": "A simple example of how to make use of external packages",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "hello": "echo world",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "change-case": "^4.1.2",
    "express": "^4.18.1"
  }
}
```

Note that we have a `script` section, that property includes all commands we can directly run from the command line using npm. For instance, run `npm run hello` will `echo world` since that's what we've specified on that property. You can trigger or run any script you'd like in this way.

more on [custom commands](https://docs.npmjs.com/cli/v6/commands/npm-run-script)

Furthermore, npm will create a new file called package-lock.json after you've installed dependencies. This file describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

more on [package-lock.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json)

Next, we'll create a super-simple server that takes a message (from query params) and transform's it to camelcase...

```js
// index.js
import express from 'express';
import { camelCase } from 'change-case';

const app = express();

app.get('/', function (req, res) {
  res.send(camelCase(req.query.message));
});

app.listen(3000);
```

## Different types of dependencies

In npm, we have three distinctions between dependencies:

1. [dependency](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#devdependencies) - this section includes dependencies which we need during runtime.
2. [dev-dependency](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#devdependencies) - these are dependencies we only require during build or release.
3. [peer-dependency](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#peerdependencies) - these are dependencies that we need of some specific version, but don't want to install them in our package. We express that someone that make use of our module will need to install the appropriate version, more info [here](https://nodejs.org/es/blog/npm/peer-dependencies/#the-solution-peer-dependencies).

```json
{
  "name": "my_package",
  "version": "1.0.0",
  "dependencies": {
    "my_dep": "^1.0.0",
    "another_dep": "~2.2.0"
  },
  "devDependencies": {
    "my_test_framework": "^3.1.0",
    "another_dev_dep": "1.0.0 - 1.2.0"
  },
  "peerDependencies": {
    "another_dep_that_we_need": "1.x"
  }
}
```
