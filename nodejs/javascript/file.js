// synchoronous using try/catch for exception
var fs = require('fs');

// 1. Read file asynchorous, return raw buffer
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
});

// 2. Read file asynchorous, return utf8
fs.readFile('/etc/passwd', 'utf8', (err, data) => {
  if (err) throw err;
});

// 3. Read file synchoronous, return utf8
var data = fs.readFileSync('/etc/passwd');

// 4. chmod
fs.chmod('../input.txt', 0666, (err) => {
  console.log(err);
});

// 5. Write async. File is created if not exists
fs.writeFile('../input.txt', 'Hello Node >>>>', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

// 6. Write sync
fs.writeFileSync('../input.txt', '<<<< Hello Node >>>>');

// 7. append asynchorous
fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

fs.appendFileSync('message.txt', ' xxxx ');
