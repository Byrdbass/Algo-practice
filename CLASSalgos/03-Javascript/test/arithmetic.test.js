const assert = require('assert');
const { add } = require('../arithmetic.js')

describe('the add function', () => {
    it('should add 2 numbers together', () => {
        const result = add(5,5)
        assert.equal(result, 10); 
    }); 
});