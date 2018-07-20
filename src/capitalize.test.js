const methods = require('./capitalize');

describe('Capitalize', () => {
    it('Should capitalize words correctly', () => {
        for(let method of methods){
            expect(method('a short sentence')).toEqual('A Short Sentence');
        }
    });
});