
//CLOSURE

// const mathOperations = function(){
//     const add = (x, y) => x+y

//     return add
// }

// math = mathOperations()
// console.log(math(4,2))




const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
  
  const baz = foo() //out here, x doesn't exist
  baz() //but when we invoke baz, we're printing x!
//   console.log(x)

const family = function(){
    
    let members = []
    
    const birth = function(name){
        members.push(name)
        console.log(members)
    }

    return birth
}

let newBirth = family()
newBirth("ben")
newBirth("shay")


//MODULES:

const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const m = mathOperations()
console.log(m.add(13, 29))
console.log(m.mult(1.75, 24))
console.log(m.mult(7, (m.div(36, 6))))

//OTHER THING STILL MODULES

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('Idan')
usersModule.addUser('Omer')
usersModule.listUsers()


//EXERECISES:
//EXERCISE 1:

const StringFormator = function(){

    const capitalizeFirst = string => console.log(string[0].toUpperCase() + string.slice(1).toLowerCase())


    const skewerCase = string => console.log(string.replace(/ /g, "-"))

    return {
        capitalizeFirst,
        skewerCase
    }
}

let formatter = StringFormator()
formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box song") //should print blue-box-song

//EXERCISE 2:

const Bank = function(){

    let _money = 500

    const depositCash = cash => _money += cash

    const checkBalance = cash => console.log(_money)

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance()



//EXERCISE 3:

const SongsManager = function(){

    const _songs = {
    }

    const addSong = (songName, url) => _songs[songName] = url.replace("https://www.youtube.com/watch?v=", " ")

    const getSong = songName => console.log(_songs[songName].replace(" ", "https://www.youtube.com/watch?v="))

    return{
        add: addSong,
        get: getSong
    }
}

const songsManager = SongsManager()
songsManager.add("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.add("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.add("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.get("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.add("Cry Me a River", "https://www.youtube.com/watch?v=DksSPZTZES0")
songsManager.get("Cry Me a River")

// obj["key3"] = "value3";























