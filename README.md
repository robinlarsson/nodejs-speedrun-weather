# Nodejs speedrun

This project aims to present different topics quick and easy. You may find presentational slides in the folder "presentation" and find exercises under the "exercises" folder.

To get started, run `npm install` to install project dependencies. Then run `npm run test:0` to validate that you've everything correctly set up.

This project aims to get someone familiar with programming up n running with NodeJS in a day, which means that most topics are distilled to a minimum where we've decided only to note stuff one really must know. Each section will include links to more in-depth run downs.

If you find typos or want to make changes to any documents in this project, please do. Create a PR or open an issue with the requested change. For instance, if you'd like us to add a topic or expand on something you find ambiguous.

> This course use node v16.14.0 and es-module imports

See [presentation](https://nodejs-speedrun.vercel.app/1?clicks=1)

## Curriculum

### Installing

- [manual](installing/manual-installation.md)
- [automated (nvm)](installing/nvm.md)

### The Basics

- [First program](the-basics/first-program/first-program.md)
- [Declaring a variable](the-basics/variables/variables.md)
- [Data types](the-basics/data-types/data-types.md)
- [Callback & Promise](the-basics/callbacks-promises/callbacks-promises.md)

### Structuring a program

- [Control Flows](the-basics/control-flows/control-flow.md)
- [Modules](the-basics/control-flows/modules.md)

### I/O

- [Buffers & Streams](io/buffers-streams.md)
- [Files](io/files.md)
- [Http](io/http.md)

### Packages

- [Package manger (npm)](package-manager.md)

### Testing

- jest

### Future work

- Building my own package
- Lexical scoping / closures / currying
- `this` & function binding
- Class
- tcp/udp & sockets
- web-sockets
- Ascci, utf-8...
- V8 engine + libuv, what is it and should I care?
- The **Event Loop** & non-blocking I/O
- Typescript
- Running in docker
- Running in the cloud (AWS) - EC2, Fargate, Lambda
