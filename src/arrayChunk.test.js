const methods = require('./arrayChunk');

describe('Array Chunk', () => {
    it('Should chunk arrays correctly', () => {
        for (let method of methods) {
            expect(method([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
            expect(method([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
        }
    });
});