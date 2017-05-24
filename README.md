> TSLint [shareable config](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html) for [FLYACTS GmbH](http://www.flyacts.com/)


## Installation

```
$ npm install --global tslint @flyacts/tslint-config
```


## Usage

Once the package is installed, you can use it by specifying `@flyacts/tslint-config` in the `extends` section of your [TSLint configuration](https://palantir.github.io/tslint/usage/configuration/).

```js
{
  "extends": "@flyacts/tslint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```


## License

MIT © 2017 FLYACTS GmbH
