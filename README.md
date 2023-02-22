[![Node.js Package](https://github.com/Nova-Studios-Ltd/Typescript-Dictionary-Package/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Nova-Studios-Ltd/Typescript-NetAPI-Package/actions/workflows/npm-publish.yml)
# Typescript Dictionary

## Description

NPM package for our internal Dictionary class

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
import { KeyValuePair, Dictionary } from "@nova-studios-ltd/typescript-netapi";

// Create new instance
const dict = new Dictionary<string, string>();

// Set key/value
dict.setValue("Hello", "Bonjour");

// Get value
dict.getValue("Hello") // -> Returns 'Bonjour'

```

## Getting the Source Code

Download a zipped version [here](https://github.com/Nova-Studios-Ltd/Typescript-NetAPI-Package/archive/refs/heads/master.zip)
or clone via HTTPS:

```sh
git clone https://github.com/Nova-Studios-Ltd/Typescript-NetAPI-Package.git
```

## License

This project is currently licensed under a GPLv3 license.