var array = [1,2,3,4,5];

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce(array), function(a, b){
  return a+b;
}, 0)