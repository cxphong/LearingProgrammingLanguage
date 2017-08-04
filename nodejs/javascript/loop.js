// 1. for
console.log('------------');
var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

// 2. do-while
console.log('------------');
var x = 5;
do {
  console.log(x);
  x --;
} while(x >= 0);

// 3. while
console.log('------------');
x = 0;
while(x <= 5) {
  console.log(x);
  x++;
}
