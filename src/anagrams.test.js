const methods = require('./anagrams');

describe('Anagram', () => {
    it('Should recognize anagrams correctly', () => {
        for(let method of methods){
            expect(method('rail safety', 'fairy tales')).toEqual(true);
            expect(method('RAIL SAFETY', 'fairy tales')).toEqual(true);
            expect(method('Hi there', 'Bye there')).toEqual(false);
        }
    })
});