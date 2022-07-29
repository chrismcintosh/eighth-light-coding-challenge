const collect = require('collect.js')

const pluckResultFromArrayByID = (key, data) => {
    const targets = collect(key)
    const specialties = collect(data)

    // Loop through the list of items to search for
    const results = targets.map(item => {
        // Loop through the specialties to check for matches
        // on the current target
        return specialties.map(specialty => {
            if(specialty[0] == item) {
                return specialty[1]
            }
        })
    }).flatten().reject(x => x == undefined).toArray()

    // Return the corresponding results for each ID
    // After throwing out bad results like "undefined"
    return results
}

module.exports = pluckResultFromArrayByID