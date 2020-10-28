function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    console.log(seconds);
    let secDegree = (seconds * 6) + 90
    let minDegree = (minutes * 6) + 90
    let hourDegree = (hours * 30) + 90
    document.querySelector('.sec-hand').style.transform = `rotate(${secDegree}deg)`
    document.querySelector('.min-hand').style.transform = `rotate(${minDegree}deg)`
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate,1000)