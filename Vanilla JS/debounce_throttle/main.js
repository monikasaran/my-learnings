
let counter = 0

const getData = ({target: {value}}) => {
    console.log('fetching api data......',value)
}

const debounce = (fn, delay) => {
    let timer
    return function() {
        let context = this, args = arguments
        clearInterval(timer)
        timer = setTimeout(()=>{
            fn.apply(context,args)
        }, delay)
    }
}


const throttle = (fn, delay) => {
    let flag = true
    return function() {
        let context = this, args = arguments
        if(flag) {
            fn.apply(context,args)
            flag=false
            setTimeout(()=>{
                flag=true
            }, delay)
        }
    }
}

const betterFn = debounce(getData, 500)
