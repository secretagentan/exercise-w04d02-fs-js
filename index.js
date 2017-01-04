var fs = require("fs");

// fs.readFile('./readme.md', 'utf-8', function(err, data){
//   if (err) throw err;
//   console.log(data);
// });

// fs.readFile('./readme.md', 'utf8', function(trash, data){
//   if (trash) throw trash;
//   console.log(data);
// });
// trash or err works the same (placeholder)

// *** NAME PICKER! ***

var data = fs.readFile('./students.txt', 'utf-8', function(err, data){
  if (err) throw err;
  // console.log(data);

  var names = data.split('\n'); // turn string into array of names
  names.pop(); // removes empty ''

  var randomIndex = Math.floor( Math.random() * names.length);
  // picks random name from array

  var name = names[randomIndex];
  console.log(name);
});

// *** RANDOM PAIRS ***

var data = fs.readFile('./students.txt', 'utf-8', function(err, data){
  if (err) throw err;

  // turn string into array of names
  var names = data.split('\n');
  // removes empty ''
  names.pop();
  var groups = [];
  while (names.length) {
    var group = names.splice(0,2);
    groups.push(group);
  }
  var lastGroup = groups.pop();
  if (lastGroup.length != 2) {
    var odd = lastGroup.pop();
    lastGroup = groups.pop();
    lastGroup.push(odd);
    groups.push(lastGroup);
  }
  console.log(groups);
});

//   for (var i = 0; i < names.length; i++) {
//     // picks random name from array
//     var randomIndex = Math.floor( Math.random() * names.length);
//     var nameOne = names[randomIndex];
//     // remove name1 from array
//     names.pop(nameOne);

//     // pick a second random name
//     var randomIndexTwo = Math.floor( Math.random() * names.length);
//     var nameTwo = names[randomIndexTwo];
//     names.pop(nameTwo);

//     console.log(nameOne + " & " + nameTwo);
//   }

// });


