
var array = ["Wampeter","Foma", "Granfalon"]


array.forEach(function(name){ console.log(name) })

function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
noisy(Boolean)(0)


function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function (n) {
  unless(n%2, function () {
    console.log(n, 'is even');
  });
});
//the .apply function takes the arguments of as an array 
//and applys the function to each in the array of arguments
