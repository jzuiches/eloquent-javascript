require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

var byName={}


ancestry.forEach(function(person) {
  byName[person.name] = person;
});
// this is confusing. Setting the variable to be an empty
// object then iterating through the array of objects
// byName[person.name] is undefined outside of the loop
// but it picks it up from the console log call?
//
//
console.log(byName["Philibert Haverbeke"]);

function reduceAncestors(person, f, defaultValue)

// this is a bunch of comment in order to make this
// file different than the remote file on github. Then I'm
// going to push this branch up and see if I get a fast forward this
// git hub wont let me push to a non fast forward.
// a fast forward is then the merge only adds to the branch
// so the branch and the master have the same commit parent
