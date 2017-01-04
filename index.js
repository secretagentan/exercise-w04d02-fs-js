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

// Asynchronously reads through the file data
var data = fs.readFile('./students.txt', 'utf-8', function(err, data){
  if (err) throw err;
  // console.log(data);

  var names = data.split('\n'); // turn string into array of names
  names.pop(); // removes empty ''

  var randomIndex = Math.floor( Math.random() * names.length);
  // picks random name from array

  var name = names[randomIndex];
  // console.log(name);
  fs.writeFile('randomStudent.txt', name, function(err){
    if (err) throw err;
    console.log('random student file saved');
  })
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
  fs.writeFile('groups.txt', groups.join('\n'), function(err){
    if (err) throw err;
    console.log('pairs file saved');
  })
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

// *** fs.writeFile ***

// fs.writeFile('example', 'this is an example', function(err) {
//   if (err) throw err;
//   console.log('saved');
// });

// *** WEEKLY CHECKINS ***

var data = fs.readFile('./students.txt', 'utf-8', function(err, data){
  if (err) throw err;

  var students = data.split('\n');
  students.pop();

  // var groups = [];
  var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  var filename = 'checkins.md';
  var filecontents = 'These are the check-ins:\n';

  weekdays.forEach(function(day) {
    filecontents += '\n';
    filecontents += '## ';
    filecontents += day;
    filecontents += ' ##';
    filecontents += '\n';
    filecontents += students.splice(0,4).join('\n');
    filecontents += '\n';
  })

  // while (names.length) {
  //   var group = names.splice(0,4);
  //   groups.push(group);

  //   for (var i = 0; i < weekdays.length; i++) {
  //     var day = weekdays[i];
  //   }

  //     console.log(day + '\n' + group);

  // }

  fs.writeFile(filename, filecontents, function(err){
    if (err) throw err;
    console.log('checkin file saved');
  })

});






