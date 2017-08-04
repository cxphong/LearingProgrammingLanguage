var cars = ["Saab", "Volvo", "BMW"];

// 1. length
var length = cars.length

// 2. get object at index
var x = cars[1]

// 3. add
cars.push('Toyota')
cars.push('Honda', 'Bus')

// 4. remove last
cars.pop()

// 5. insert at index 1, '0': delete no element
cars.splice(1, 0, "Lene");
cars.splice(1, 0, 'Ota', 'Oto')

// 6. get index of object
var index = cars.indexOf('Honda')

// 7. concat
var number = [1, 2, 3]
cars = cars.concat(number)

// 8. check includes
console.log(cars.includes(1))
console.log(cars.includes(4))

// 9. interate
cars.forEach((element)=> {
    //
})

// 10. sort
cars.sort()

// 11. empty
cars = []
