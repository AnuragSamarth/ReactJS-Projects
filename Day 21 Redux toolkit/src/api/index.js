import Chance from "chance";

const chance = Chance();

export function fackUserData(){
    // console.log(chance.name({middle: true }));
    return chance.name({middle: true})
}

// fackUserData();