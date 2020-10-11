'use strict';

const ObfuscatorEmail = require('../src/');

describe('Obfuscator Email', () => {
    it('should return obfuscate email equal to "on*****@gmail.com"', () => {
        const obfuscateEmail = ObfuscatorEmail('onildo.aguiar@gmail.com');

        expect(obfuscateEmail).toEqual('on*****@gmail.com');
    });

    it('should return obfuscate email equal to "oni***@gmail.com"', () => {
        const obfuscateEmail = ObfuscatorEmail('onildo.aguiar@gmail.com', { numberOfAsteriks: 3, numberOfCharacters: 3 });

        expect(obfuscateEmail).toEqual('oni***@gmail.com');
    });

    it('should return obfuscate email equal to "oni***@gma***"', () => {
        const obfuscateEmail = ObfuscatorEmail('onildo.aguiar@gmail.com', { numberOfAsteriks: 3, numberOfCharacters: 3, withDomainObfuscated: true });

        expect(obfuscateEmail).toEqual('oni***@gma***');
    });

    it('should return obfuscate email equal to "n*****@gmail.com"', () => {
        const obfuscateEmail = ObfuscatorEmail('nil@gmail.com', { numberOfCharacters: 4 });

        expect(obfuscateEmail).toEqual('n*****@gmail.com');
    });

    it('should return obfuscate email equal to "n*****@gmai*****"', () => {
        const obfuscateEmail = ObfuscatorEmail('nil@gmail.com', { numberOfCharacters: 4 , withDomainObfuscated: true});

        expect(obfuscateEmail).toEqual('n*****@gmai*****');
    });
});