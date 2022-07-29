const stripAndDedupe = require('../../helpers/stripAndDedupe');
const pluckResultFromArrayByID = require("../../helpers/pluckResultFromArrayByID")

var stringIDs = ["7-623", "8235", "8-235"];
const key = stripAndDedupe(stringIDs)

let specialties = [
  [1381, "front-end web development"],
  [8235, "data engineering"],
  [3434, "API design"],
  [7623, "security"],
  [9153, "UX"],
];

test('Returns and array of specialties based on a list of target IDs', () => {
    expect(pluckResultFromArrayByID(key, specialties)).toStrictEqual([ 'security', 'data engineering' ])
})