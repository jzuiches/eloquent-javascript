require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE)
function map (array, transform) {
  var mapped = []
  for (var i=0; i<array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

console.log(map(overNinety, function(person){
  return person.name;
}));

function average(array){
  var total = array.reduce(function (a, b){
    return a + b;
  })
  return total/array.length
}

console.log(average(ancestry.map(function(person){
  return (person.died - person.born);
})));
//this is another comment on the master branch

//this is the learn branch comment

//I am making a change

//just messing around with the git commits
