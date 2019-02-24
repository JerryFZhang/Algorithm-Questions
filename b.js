const num = 5
const arr = [2, 3, 4, 5, 6]

console.log(generalizedGCD(arr))

function generalizedGCD(arr) {
    var divisible = 0
    if (arr.length == 1) return 1
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] % arr[0] == 0)  divisible ++
    }
    if (divisible == arr.length - 1) return arr[0]
    else return generalizedGCD(arr.splice(arr.length - 1, 1))
}