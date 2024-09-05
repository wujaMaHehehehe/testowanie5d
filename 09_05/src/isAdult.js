/**
 * checks if person is an adult
 * @param {number} age - the age of the person
 * @returns {boolean} - true if the age is greater than or equal to 18, false otherwise
 * 
 * @throws {Error} - if the age is less than or equal to 0
 * @author wuja
 */

function isAdult(age) {
    if (age <= 0) {
        throw new Error('The age must be greater than 0');
    }
    return age >= 18;
}