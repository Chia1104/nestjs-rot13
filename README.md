# ROT13 API

A simple API for encrypting and decrypting text using the ROT13 cipher, and build with [Nest.js](https://nestjs.com/).

 - [API Documentation](https://nestjs-rot13.herokuapp.com/api/documentation)

## Languages and Tools

<div align="center">
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  </a>
  <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/> 
  </a>
  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> 
  </a>
</div>

## Get Started

Generate the .env file, and add your database credentials.

```bash
$ cp .env.example .env
```

Install the dependencies with [PnPm](https://pnpm.io/)

```bash
$ pnpm install
```

Running the app

```bash
# development
$ pnpm start
# watch mode
$ pnpm start:dev
# production mode
$ pnpm start:prod
```

Testing the app

```bash
# unit tests
$ pnpm test
# e2e tests
$ pnpm test:e2e
# test coverage
$ pnpm test:cov
```
