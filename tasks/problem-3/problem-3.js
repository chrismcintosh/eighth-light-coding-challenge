// Problem 3
// Given a list of string IDs (possibly with duplicates) and a list of specialties with IDs, return a list of
// specialty names, without duplicates, that are represented by the given IDs (after being "cleaned up" by the process from step one).
// For example, given this list of IDs:
// ["7-623", "8235", "8-235"]
// and this list of specialties (the first item being a canonical ID):
// [[1381, "front-end web development"],
// [8235, "data engineering"],
// [3434, "API design"],
// [7623, "security"],
// [9153, "UX"]]
// your code should return:
// ["security", "data engineering"]

// You can assume there are no duplicates in the list of specialties: no ID will appear for multiple
// specialty areas. Note that this specialties list should have real numbers as the IDs, not just strings
// with numeric characters.

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

let result = pluckResultFromArrayByID(key, specialties)

console.log(result)