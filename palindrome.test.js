let methods = require('./palindrome');

describe('Palindrome', () => {

    it('Should detect palindromes correctly', () => {
        let inputs = [{str:'test', pal:false}, {str:'abba', pal:true}];

        for(method of methods){
            for(input of inputs){
                expect(method(input.str)).toBe(input.pal);
            }
        }
    });
});