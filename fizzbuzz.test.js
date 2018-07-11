let methods = require('./fizzbuzz');

describe('FizzBuzz', () => {
    it('Should return correct string', () => {
        for(let method of methods){
            expect(method(20)).toBe('12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz1617fizz19buzz');
        }
    });
});