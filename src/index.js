'use strict';

const NUMBER_OF_ASTERIKS = 5;
const NUMBER_OF_CHARACTERS = 2;
const WITH_DOMAIN_OBFUSCATED = false;

module.exports = (email, options) => {
    let emailObfuscate = '';
    let parts = [];
    const numberOfAsteriks = options && options.numberOfAsteriks ? options.numberOfAsteriks : NUMBER_OF_ASTERIKS;
    const numberOfCharacters = options && options.numberOfCharacters ? options.numberOfCharacters : NUMBER_OF_CHARACTERS;
    const withDomainObfuscated = options && options.withDomainObfuscated ? options.withDomainObfuscated : WITH_DOMAIN_OBFUSCATED;

    try {
        parts = email.split('@');
    } catch (err) {
        throw new Error('Invalid email format ' + email);
    } finally {
        const endPosition = parts[0].length <= numberOfCharacters ? parts[0].length / 2 : numberOfCharacters;
        const domainEndPosition = parts[1].length <= numberOfCharacters ? parts[1].length / 2 : numberOfCharacters;

        let asteriks = '';
    
        for (let i = 0; i < numberOfAsteriks; i++) {
            asteriks += '*';
        }
        
        if (withDomainObfuscated){
            emailObfuscate = `${parts[0].substring(0, endPosition)}${asteriks}@${parts[1].substring(0, domainEndPosition)}${asteriks}`;
        } else {
            emailObfuscate = `${parts[0].substring(0, endPosition)}${asteriks}@${parts[1]}`;
        }
    
        return emailObfuscate;
    }
}