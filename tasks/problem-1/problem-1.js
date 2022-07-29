// Problem 1
// Given an input string, return a new "cleaned-up" string with any non-numeric characters removed.
// For example:
// an input of: "7-623" should return: "7623"
// and an input of: "..2965a" should return "2965"

const stripLetters = require('../../helpers/stripLetters')

console.log(stripLetters("7-623"))
console.log(stripLetters("..2965a"))