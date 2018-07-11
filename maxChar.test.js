let methods = require('./maxChar');

describe('Max Char', () => {

    it('Should return Max Char', () => {
        let inputs = [{str: 'abcc', result: 'c'}, {str: 'abbaaaa', result: 'a'}];

        for(let method of methods){
            for(let input of inputs){
                expect(method(input.str)).toBe(input.result);
            }
        }
    });
});