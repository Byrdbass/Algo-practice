const assert = require('assert');
const { expect } = require('chai')
const { add, subtract, multiply, divide } = require('../arithmetic.js')

describe('the add function', () => {
    it('should add 2 numbers together', () => {
        const result = add(5,5)
        //assert.equal(result, 10); 
        
    }); 
});

describe('the subtract function', () => {
    it('should find the absolute difference between the numbers', () =>{
        const result = subtract(5,10)
        //assert.equal(result, 5);
    });
});

describe('the multiply function', () => {
    it('should find the product of the two numbers', () =>{
        const result = multiply(5,5)
        //assert.equal(result, 25);
    });
});

describe('the divide function', () => {
    it('should find the quotient between the numbers', () =>{
        const result = divide(25, 5)
        //assert.equal(result, 5);
    });
});

