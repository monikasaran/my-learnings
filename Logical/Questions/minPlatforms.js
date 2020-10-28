/**
 * Given arrival and departure times of all trains that reach a railway station. 
 * Your task is to find the minimum number of platforms required for the railway station
 *  so that no train waits.

Note: Consider that all the trains arrive on the same day and leave on the same day. 
Also, arrival and departure times will not be same for a train, but we can have arrival 
time of one train equal to departure of the other. In such cases, we need different platforms, 
i.e at any given instance of time, same platform can not be used for both 
departure of a train and arrival of another.
 */


//SOLUTION - I
var arrivals   = ['0900', '0940', '0950', '1100', '1500', '1800']
var departures = ['0910', '1200', '1120', '1130', '1900', '2000']

arrivals = arrivals.map(x => parseInt(x))
departures = departures.map(x => parseInt(x))

getPlatforms(arrivals, departures)

function getPlatforms(arrivals, departures) {
    let platforms = 0
    let occupied = 0
    let pendingDept = []

    for (let i = 0; i < arrivals.length; i++) {
        let pending = pendingDept.length
        if (pending) {
            for (let j = 0; j < pending; j++) {
                if (arrivals[i] > pendingDept[j]) {
                    --occupied
                    pendingDept.splice(j, 1)
                    break
                }
            }
        }
        ++occupied
        if (occupied > platforms) {
            platforms = occupied
        }
        pendingDept.push(departures[i])
    }
    console.log(platforms)
}


//SOLUTION - II

function minPlatforms(arrivals, departures) {
    let range = []
    for (let i = 0; i < 1440; i++) {
        range[i] = 0
    }

    for (let i = 0; i < arrivals.length; i++) {
        let time = arrivals[i]
        let min = time / 100 * 60 + time % 100
        range[min] += 1;
        time = departures[i]
        min = time / 100 * 60 + time % 100
        range[min + 1] -= 1
    }
    let max = 0
    let sum = 0
    for (let i = 0; i < range.length; i++) {
        sum += range[i]
        if (sum > max)
            max = sum
    }
    console.log(max)
}

var kingdoms = [
    [1,3],
    [2,5],
    [6,9]
]
minBombs(kingdoms)
function minBombs(kingdoms) {
    let arr = new Array(8)
    arr.fill(0)

    for(let i=0; i<kingdoms.length-1; i++) {
        let start = kingdoms[i][0]
        let end = kingdoms[i][1]
        ++arr[start]
        --arr[end+1]
    }
    console.log(arr);
    let max = 0
    let sum = 0
    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
        if(sum>max) {
            max = sum
        }
    }
    console.log(max)
}
