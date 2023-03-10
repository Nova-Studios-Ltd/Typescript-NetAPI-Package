[![Node.js Package](https://github.com/Nova-Studios-Ltd/Typescript-NetAPI-Package/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Nova-Studios-Ltd/Typescript-NetAPI-Package/actions/workflows/npm-publish.yml)
# Typescript NetAPI

## Description

NPM package for our internal NetAPI class

## Requirements

- [Node.js](https://nodejs.org/en/download/)
  - npm (normally included)
  - typescript


## Installation
```sh
npm install @nova-studios-ltd/typescript-netapi
```

## Basic Usage
```typescript
import { NetAPI } from "@nova-studios-ltd/typescript-netapi";

NetAPI.Init("https://api.novastudios.uk");

// GET (Applies to all methods) Without headers
await NetAPI.GET<string>("/Channel/my-new-channel");

// GET (Applies to all methods) With headers
await NetAPI.GET<string>("/Channel/my-new-channel-2", new NetHeaders().WithAuthorization("MyPassword"));

```

## Getting the Source Code

Download a zipped version [here](https://github.com/Nova-Studios-Ltd/Typescript-NetAPI-Package/archive/refs/heads/master.zip)
or clone via HTTPS:

```sh
git clone https://github.com/Nova-Studios-Ltd/Typescript-NetAPI-Package.git
```

## License

This project is currently licensed under a GPLv3 license.