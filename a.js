var states = [
    1, 1, 1, 0, 1, 1, 1, 1
]
var days = 2
while (days) {
    //    console.log(days + " day remaining")
    var newState = []
    states.unshift(0)
    states.push(0)
    states.forEach((item, index) => {
        //        console.log(newState)
        //        console.log(index + " item scanning")
        //check if this is the first item
        if (states[index - 1] === undefined) {
            newState.push(0)
        }
        //check if this is the last item
        else if (states[index + 1] === undefined) {
            newState.push(0)
        }
        // if ((index !=0) && (index != states.length)){}
        //both exists 
        else if (states[index + 1] === states[index - 1]) {
            //            console.log("this is a middle item " + item + " with " + states[index - 1] + " and " + states[index + 1] + " around." + " pushing 0") 
            newState.push(0)
        }
        else {
            //            console.log("this is a middle item " + item + " with " + states[index - 1] + " and " + states[index + 1] + " around." + " pushing 1") 
            newState.push(1)
        }
    })
    states = newState
    states.splice(0, 1)
    states.splice(states.length - 1, 1)
    days--
}