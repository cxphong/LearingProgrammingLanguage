// https://github.com/epeli/underscore.string

// 1. split
var str = '   Hello the world   '
console.log(str.split(' '))

// 2. anchor
console.log(str.anchor())

// 3. chartAt
console.log(str.charAt(0))

// 4. concat
console.log(str.concat(' !'))

// 5. include
console.log(str.includes('o'))

// 6. index of
console.log(str.indexOf('o'))

// 7. tolowercase
console.log(str.toLowerCase())

// 8. tolowercase
console.log(str.toUpperCase())

// 9. extract
console.log(str.slice(0,2))

// 10 .trim
console.log(str.trim())
console.log(str.trimLeft())
console.log(str.trimRight())

// 11. regrex
