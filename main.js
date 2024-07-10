// Write a function that converts hours into seconds.

// hour = 60 min
// min = 60 sec
// hour >> sec = 60 * 60 = 3600

function howManySec(hours) {
    return hours * 3600;
}

console.log(howManySec(2));
console.log(howManySec(10));
console.log(howManySec(24));