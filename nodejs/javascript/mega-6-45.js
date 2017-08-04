// Run: node mega-6-45.js

const MIN = 1;
const MAX = 45;

function generate() {
	var n1, n2, n3, n4, n5, n6;

    var n1 = Math.floor((Math.random() * MAX) + MIN);

    do {
 		n2 = Math.floor((Math.random() * MAX) + MIN);
    } while(n2 == n1);

    do {
 		n3 = Math.floor((Math.random() * MAX) + MIN);
    } while(n3 == n1 || n3 == n1);
    
    do {
 		n4 = Math.floor((Math.random() * MAX) + MIN);
    } while(n4 == n1 || n4 == n1 || n4 == n3);

    do {
 		n5 = Math.floor((Math.random() * MAX) + MIN);
    } while(n5 == n1 || n5 == n1 || n5 == n3 | n5 == n4);


    do {
 		n6 = Math.floor((Math.random() * MAX) + MIN);
    } while(n6 == n1 || n6 == n1 || n6 == n3 || n6 ==n4 || n6 == n5);
    
    var result = [n1, n2, n3, n4, n5, n6];

    return result.sort();
}

var mega;
var i;
for (i = 1991; i < 2018; i++) {
    mega = generate();
}

console.log('MEGA = ' + mega);