const dedupeArray = require('./dedupeArray')
const stripLetters = require('./stripLetters')
const collect = require('collect.js')

const stripAndDedupe = (data) => {

    let collection = collect(data).map(item => {
        return parseInt(stripLetters(item))
    }).toArray()

    return dedupeArray(collection);
}

module.exports = stripAndDedupe