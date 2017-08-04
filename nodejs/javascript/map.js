var user = {
  "user1" : {
    "name" : "mohit",
    "password" : "password1",
    "profession" : "teacher",
    "id": 1
  },

  "user2" : {
    "name" : "mohit",
    "password" : "password2",
    "profession" : "teacher",
    "id": 2
  },

  "user3" : {
    "name" : "mohit",
    "password" : "password3",
    "profession" : "teacher",
    "id": 3
  }
}

var tmp = {"user5" : {
  "name" : "mohit",
  "password" : "password5",
  "profession" : "teacher",
  "id": 5
}}

// Get
console.log(user['user2']);

// Add
user['user5'] =  tmp['user5']

// Remove
delete user['user2']

console.log(user);
