require('./ancestry.js')
var ancestry = JSON.parse(ANCESTRY_FILE)

function average(array) {
  function plus(a,b) { return a + b }
  return array.reduce(plus) / array.length;
}

function age(person) { return person.died - person.born }
function male(person) { return person.sex == "m" }
function female(person) { return person.sex == "f"}
console.log ((average(ancestry.filter(male).map(age))).toFixed(2))