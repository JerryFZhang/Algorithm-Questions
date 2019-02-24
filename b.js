// This is an online assessment challange demo provided by amazon.
// The goal is to find a the greatest common denominator (GCD) for a given array and its size


// Program input
const num = 5
const arr = [2, 3, 6]

// Main 
console.log(generalizedGCD(arr))

// Recursive function
function generalizedGCD(arr) {
    // Counter for all divisible items
    var divisible = 0
    
    // If only one item, we are reaching the end of the array, return 1 
    if (arr.length == 1) return 1
    
    // Count all divisible items agains the first item in the array 

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] % arr[0] == 0)  divisible ++
    }
    // IF: the divisible counter returns the same value as the array length
    // ELSE: keep looking for GCD
    if (divisible == arr.length - 1) return arr[0]
    else return generalizedGCD(arr.splice(arr.length - 1, 1))
}