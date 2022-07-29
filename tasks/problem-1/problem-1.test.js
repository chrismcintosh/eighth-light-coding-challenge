const stripLetters = require('../../helpers/stripLetters')

test('Removes Letters from a String', () => {
    expect(stripLetters("7-623")).toBe("7623")
    expect(stripLetters("..2965a")).toBe("2965")
})