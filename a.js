// This is an online assessment challange demo provided by amazon.
var states = [1, 1, 1, 0, 1, 1, 1, 1]
var days = 2
console.log(start(states, days))

function start(states, days) {
    while (days) {
        // intiate next state 
        var newState = []
        // give padding to the existing array
        states.unshift(0)
        states.push(0)
        // Loop throught the padded array and determine the next state
        states.forEach((item, index) => {
            // first item
            if (states[index - 1] === undefined) newState.push(0)
            // last item
            else if (states[index + 1] === undefined) newState.push(0)
            // middle item, if equal push 0 else push 1
            else if (states[index + 1] === states[index - 1]) newState.push(0)
            else newState.push(1)
        })
        states = newState
        // remove padding
        states.splice(0, 1)
        states.splice(states.length - 1, 1)
        // clock ticks
        days--
    }
    return states
}
