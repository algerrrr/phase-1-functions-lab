// Code your solution in this file!
function distanceFromHqInBlocks(num1){
    let blocks = Math.abs(num1 - 42)
    return blocks
}

function distanceFromHqInFeet(num1){
    let feet = num1
    if (num1%2===0){
        feet = 2112
    }
    else {
        feet += 221
    }
    return feet
} 

function distanceTravelledInFeet(num1){
    let feet = 0
    if(num1>43){
        feet = 2*1320
    }
    else if (num1==43){
        feet = 1320
    }
    else if (num1<43){
        feet = 1320*1.2
    }
    return feet
}

function calculatesFarePrice(num1, num2){
    let travel = Math.abs(num2-num1)*264
    let charge = 0
    if(travel<=400){
        charge = 0
    }
    else if(travel>=400 && travel<=2000){
        charge = (travel-400)*2/100
    }
    else if(travel>2000 && travel<=2500){
        charge = 25
    }
    else if(travel>2500){
        charge = "cannot travel that far"
    }
    return charge
}

