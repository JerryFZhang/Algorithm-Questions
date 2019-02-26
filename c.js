var allLocations = [[1,2], [3,4], [1,-1]]
var numDeliveries = 2
var distances = []
var result = []
// Calculate distances 
allLocations.forEach((location, index) => {
    distances.push([Math.sqrt(location[0]*location[0] + location[1]*location[1]), index])
})

// Sort distances
distances.sort((a,b)=>{
    return a[0] - b[0]   
})

// return locations based on numDeliveries and sorted distances
for (var i = 0; i< numDeliveries; i++){
    result.push(allLocations[distances[i][1]])
}
return result