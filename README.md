# About
Obfuscates email addresses with *'s.

[![NPM](https://nodei.co/npm/obfuscator-email.png)](https://nodei.co/npm/obfuscator-email/)

## Purpose?

This module will to obfuscate email addresses with *'s.

##### Example

```js
email: onildo.aguiar@gmail.com
obfuscateEmail: on*****@gmail.com
```

## Usage

#### Default values
```js
const obfuscatorEmail = require('obfuscator-email');

// Default values
const obfuscateEmail = obfuscatorEmail('onildo.aguiar@gmail.com');
```

#### With options
```js
const obfuscatorEmail = require('obfuscator-email');

// With options
const options = { numberOfAsteriks: 3, numberOfCharacters: 3 };
const obfuscateEmail = obfuscatorEmail('onildo.aguiar@gmail.com', options);
```

# License
This project is licensed under the MIT License - see the LICENSE.md file for details