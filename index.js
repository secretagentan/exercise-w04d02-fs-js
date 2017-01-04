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
