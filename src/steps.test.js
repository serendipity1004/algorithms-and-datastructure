const methods = require('./steps');

describe('Steps', () => {
    it('Should create steps correctly', () => {
        for(let method of methods){
            let result = method(3);
            let expected = `#@@\n##@\n###`;

            expect(result).toEqual(expected);
        }
    })
});