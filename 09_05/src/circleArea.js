/**
 * function calculates the area from the radius of a circle
 * @param {number} radius - radius of the circle
 * @returns {number} - area of the circle
 * 
 * 
 * @throws {Error} - when radius is less than or equal to 0
 * @author wuja
 */

function circleArea(radius) {
    if (radius <= 0) {
        throw new Error('The radius must be greater than zero');
    }
    return Math.PI * radius * radius;
}