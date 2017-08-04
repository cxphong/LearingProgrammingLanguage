var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add(5);
mySet.add(5);
mySet.add('some text');
console.log(mySet);

// Iterating
for (let item of mySet) {
  console.log(item);
}
