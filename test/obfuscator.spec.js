'use strict';

const ObfuscatorEmail = require('../src/');

describe('Obfuscator Email', () => {
    it('should return obfuscate email equal to "on*****@gmail.com"', () => {
        const obfuscateEmail = ObfuscatorEmail('onildo.aguiar@gmail.com');

        expect(obfuscateEmail).toEqual('on*****@gmail.com');
    });

    it('should return obfuscate email equal to "oni***@gmail.com"', () => {
        const obfuscateEmail = ObfuscatorEmail('onildo@gmail.com', { numberOfAsteriks: 3, numberOfCharacters: 3 });

        expect(obfuscateEmail).toEqual('oni***@gmail.com');
    });
});