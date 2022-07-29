const collect = require('collect.js')

const dedupeArray = (data) => {
    const collection = collect(data);
    return collection.unique().toArray()
}

module.exports = dedupeArray