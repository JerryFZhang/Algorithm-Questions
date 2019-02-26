var deviceCapacity = 20
var foregroundAppList = [[1, 8], [2, 7], [3, 14]]
var backgroundAppList = [[1, 5], [2, 10], [3, 14]]
var memlist = []
var list = []
// Calculate all possible combinations
foregroundAppList.forEach((foregroundApp, index) => {
    backgroundAppList.forEach((backgroundApp, index) => {
        if (foregroundApp[1] + backgroundApp[1] <= deviceCapacity) memlist.push([[foregroundApp[0], backgroundApp[0]], foregroundApp[1] + backgroundApp[1]])
    })
})

// reverse sort all item in list based on memory usage
memlist.sort((a, b) => {
    return b[1] - a[1]
})

// return all value that are the highest
memlist.forEach((item, index) => {
    if (item[1] == memlist[0][1]) list.push(item[0])
})

// return 
console.log(list)
