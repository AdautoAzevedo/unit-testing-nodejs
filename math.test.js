const {sum, subtraction} = require('./math');

describe('math.js', () => {
    //We can describe what the function does.
    test('sums 2 numbers', () => {
        //Here we call the sum function and pass the parameters, then we need to write the expected result
        expect(sum(2, 5)).toBe(7)
    })

    //We follow the same logic here for the subtraction function
    test('subtraction of 2 numbers', () => {
        expect(subtraction(5, 2)).toBe(3)
    })
});
