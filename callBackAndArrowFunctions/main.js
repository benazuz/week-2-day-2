// let users = []

// const getData = function (callbackFunc) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callbackFunc()
//     }, 3000)
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)




// setInterval(function(){
//     console.log(new Date())
// }, 1000)

const square = num => console.log(num * num)
square(4)

const add = (a, b) => a + b
let sum = add(2, 4)
console.log(sum)


const getFormalTitle = (title, name) => title + " " + name

formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle)


//EXERCISE 1 / CALLBACKS:

const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = function (func) {
    func()
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


//EXERCISE 2 / CALLBACKS:

const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

const getTime = function (func) {
    const time = new Date()
    func(time)
}

getTime(returnTime)


//EXERCISE 3 / CALLBACKS:

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const logData = function (data) {
    console.log("logData: " + data)
}

displayData(alert, logData, "I like to party")


//EXERCISE 4 / ARROW FUNCTIONS:

const addSumOfThree = (num1, num2, num3) => num1 + num2 + num3
let sum2 = addSumOfThree(5, 5, 10)
console.log(sum2)


//EXERICE 5 / ARROW FUNCTIONS:

const capitalize = string => console.log(string[0].toUpperCase() + string.slice(1).toLowerCase())

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia


// EXERCISE 6 / ARROW FUNCTIONS:

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

const commentOnWeather = temp => console.log("Its " + determineWeather(temp))

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"


// EXERICE 7:

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

const makeSound = sound => alert(sound)

explode(shineLight, makeSound, "BOOM")










