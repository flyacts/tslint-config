> TSLint [shareable config](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html) for [FLYACTS GmbH](http://www.flyacts.com/)


## Installation

```
$ npm install --global tslint tslint-config-flyacts
```


## Usage

Once the `tslint-config-flyacts` package is installed, you can use it by specifying `tslint-config-flyacts` in the extends section of your [TSLint configuration](https://palantir.github.io/tslint/usage/configuration/).

```js
{
  "extends": "tslint-config-flyacts",
  "rules": {
    // Additional, per-project rules...
  }
}
```


## License

MIT © 2017 FLYACTS GmbH
