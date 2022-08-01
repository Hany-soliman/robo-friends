import chance from 'chance';

let robotsArr = []

const generateHash = (length)=> {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

class Robot {
    constructor(hash, name, email) {
        this.hash = hash;
        this.name = name;
        this.email = email;
    }
}

const createRobotsArr = (number)=>{
    robotsArr = []
    for (let i = 0; i < number; i++) {
        let robot = new Robot(generateHash(10), chance().name(), chance().email() )
        robotsArr.push(robot)
    }
    return robotsArr
}

createRobotsArr(100)

export {robotsArr, createRobotsArr}