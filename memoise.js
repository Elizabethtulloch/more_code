// function that adds numbers 
// and saves how many times its beem called 
// create a cash so you dont have to sage it 
let counter = 0
const sum= (num1,num2) => {
    counter ++
    return num1 + num2 
}

const memoize = (callback) => {
    cashe = {}
    return function(...args ){
        const cache_key = JSON.stringify(args)// 
        if (cache[cache_key]){
            return cache[cashe_key]
        }
        else{
            const returnValue = callback(args)
            cashe[cahe_key] = returnValue
            return returnValue
        }
    }
    return callback
}
const memoizedSum = memoize(sum)
console.log(`First call`, memoizedSum(5,6))
//console.log(`second call`, memoizedSum(2,4))
console.log('call count ', counter )


