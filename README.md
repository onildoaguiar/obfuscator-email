# About
Obfuscates email addresses with *'s.

[![NPM](https://nodei.co/npm/obfuscator-email.png)]
(https://nodei.co/npm/obfuscator-email/)

## Purpose?

This module will to obfuscate email addresses with *'s.

##### Example

Email: onildo.aguiar@gmail.com
Obfuscate Email: on*****@gmail.com

## Usage

#### Default values
```js
const obfuscatorEmail = require('obfuscator-email');

// Default values
const obfuscateEmail = obfuscatorEmail('onildo@gmail.com');
```

##### With options
```js
const obfuscatorEmail = require('obfuscator-email');

// With options
const obfuscateEmail = obfuscatorEmail('onildo@gmail.com', { numberOfAsteriks: 3, numberOfCharacters: 3 });
```

# License
This project is licensed under the MIT License - see the LICENSE.md file for details