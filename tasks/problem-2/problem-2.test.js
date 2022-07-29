const dedupeArray = require('../../helpers/dedupeArray')

test('Deduplicates an array and maintains order', () => {
    expect(dedupeArray([3, 1, 1, 1, 2, 3, 3])).toStrictEqual([3, 1, 2])
})