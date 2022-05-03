const assert = require('assert');
const { oddOrEven } = require('../odd-or-even')

describe('odd or even function', () => {
    it ('should tell if a number is odd', () => {
        const result = oddOrEven(3)
        assert.equal(result, 'odd')
    })
    it ('should tell if a number is even', () => {
        const result = oddOrEven(4)
        assert.equal(result, 'even')
    })
})