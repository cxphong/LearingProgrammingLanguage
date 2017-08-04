// 1. Object to JSON
var person = {
    //firstName:"John",
    //lastName:"Doe",
    age:50,
    eyeColor: "blue",
    arr: ["Saab", "Volvo", "BMW"]
};
var json_data = JSON.stringify(person);

// 2. Iterating
JSON.parse(json_data, (key, value)=>{
  // console.log(key)
  // console.log(value)
  // console.log('----------')
  // console.log('          ')

  if (key == 'age') {
    console.log(value)
  }
})

// 3. parse
console.log(person['age']);
