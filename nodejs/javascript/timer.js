
//start interval
var id1 = setInterval(function() {
  console.log("setInterval: Hey! 1 second completed!..");
}, 100);

// kill interval
clearInterval(id1)

// start timeout
var id2 = setTimeout(function() {
  console.log("setTimeout: Hey! 1.5 second completed!..");
}, 100);

// kill timeout
clearTimeout(id2);

// immediate
var id3 = setImmediate(function() {
  console.log('imediate');
})

clearImmediate(id3)
