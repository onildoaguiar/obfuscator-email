'use strict';

const NUMBER_OF_ASTERIKS = 5;
const NUMBER_OF_CHARACTERS = 2;

module.exports = (email, options) => {
    let emailObfuscate = '';
    let numberOfAsteriks = options && options.numberOfAsteriks ? options.numberOfAsteriks : NUMBER_OF_ASTERIKS;
    let numberOfCharacters = options && options.numberOfCharacters ? options.numberOfCharacters : NUMBER_OF_CHARACTERS;

    try {
        const parts = email.split('@');
        const endPosition = parts[0].length <= numberOfCharacters ? parts[0].length / 2 : numberOfCharacters;

        let asteriks = '';

        for (let i = 0; i < numberOfAsteriks; i++) {
            asteriks += '*';
        }

        emailObfuscate = `${parts[0].substring(0, endPosition)}${asteriks}@${parts[1]}`;

        return emailObfuscate;
    } catch (err) {
        throw new Error('Invalid email format ' + email);
    }
}