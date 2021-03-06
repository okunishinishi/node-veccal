var veccal = require('veccal')

//------------------------
// add
//------------------------
console.log(veccal.add([1, 2, 3], [2, 4, 8])) //-> [3, 6, 11]
console.log(veccal.add([1, 2, 3], [2, 4, 8], [0, 1, 0])) //-> [3, 7, 11]

//------------------------
// subtract
//------------------------
console.log(veccal.subtract([1, 2, 3], [2, 4, 8])) //-> [-1, -2, -5]
console.log(veccal.subtract([1, 2, 3], [2, 4, 8], [0, 1, 0])) //-> [-1, -3, -5]

//------------------------
// multiply
//------------------------
console.log(veccal.multiply([1, 2, 3], [2, 4, 8])) //-> [2, 8, 24]
console.log(veccal.multiply([1, 2, 3], [2, 4, 8], [0, 1, 0])) //-> [0, 8, 0]

//------------------------
// scale
//------------------------
console.log(veccal.scale([1, 2, 3], 2)) //-> [2, 4, 6]
console.log(veccal.scale([1, 2, 3], -4)) //-> [-4, -8, -12]

//------------------------
// size
//------------------------
console.log(veccal.size([3, 4, 5])) //-> 7.0710678118654755
console.log(veccal.size([1, 0, 0])) //-> 1

//------------------------
// normalize
//------------------------
console.log(veccal.normalize([3, 4, 5])) //-> [0.4242640687119285, 0.565685424949238, 0.7071067811865475]
console.log(veccal.normalize([3, 4, 5], 2)) //-> [0.848528137423857, 1.131370849898476, 1.414213562373095]

//------------------------
// revert
//------------------------
console.log(veccal.revert([3, 4, 5])) //-> [-3, -4, -5]

