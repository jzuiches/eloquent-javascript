require('./ancestry.js')
var ancestry = JSON.parse(ANCESTRY_FILE)

var testArray = [1,2,3,4,5];
var otherArray = [1,2,3,4]
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce(testArray, function(a, b){
  return a+b;
}, 0));

function re(array){
  var answer = array.reduce(function (a,b){
   return a + b;
})
  console.log(answer)

};

re(otherArray);

console.log(ancestry.reduce(function(min, cur){
  if (cur.born < min.born)
    return cur;
  else
    return min;
}));

