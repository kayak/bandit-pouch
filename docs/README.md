<h1 align="center">
  Bandit Pouch's Documentation
</h1>

This is the official documentation for Bandit Pouch. Once deployed it will be available on 
https://kayak.github.io/bandit-pouch. 

## Installing

Before building the documentation you need to install its dependencies, given it relies on a
separate package.json. For such run:

```sh
$ npm install
```

## Quick start

For running a local instance:

```sh
$ npm start
```

## Testing

For running the snapshot tests, generated with storybook's storyshots addon:

```sh
$ npm test
```

Whenever you need to update the storyshots:

```sh
$ npm test -- -u
```

## Deploy

To build the documentation and publish it to github pages run:

```sh
$ npm run deploy
```

## License

Copyright 2016 KAYAK Germany, GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
