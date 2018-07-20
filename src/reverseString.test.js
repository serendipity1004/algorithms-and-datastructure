let methods = require('./reverseString');

describe('Reverse String', () => {
    it('Should reverse string correctly', ()=>{
        let inputs = ['hello', 'test', ''];

        for(let method of methods){
            for(let input of inputs){
                expect(method(input)).toBe(input.split('').reverse().join(''));
            }
        }
    })
});