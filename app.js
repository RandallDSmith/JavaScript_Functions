console.log("Hello World!\n==========\n");

function printOdds(count){

    if(count < 0) count = count * -1;

    for(i = 0; i<=count;i++){
       if(i % 2 != 0){
        console.log(i);
       }

    }
}
printOdds(-100);

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}

checkAge('Dan', 11);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(userName = 'George', age = 13){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}

checkAge();

console.log("Exercise 3:\n===========\n");

function cartesianPlane(x,y){
    if(x == 0){
        console.log('on X axis');
    }
    else if(y == 0){
        console.log('on Y axis');
    }
    else if(x > 0 && y > 0){
        console.log('In quadrant 1');
    }
    else if(x < 0 && y > 0){
        console.log('In quadrant 2');
    }
    else if(x < 0 && y < 0){
        console.log('In quadrant 3');
    }
    else{
        console.log('In quadrant 4');
    }
}
cartesianPlane(10, -10);

console.log("Exercise 4:\n===========\n");

function isATriangle(x,y,z){
    if(x + y > z || x + z > y || y + z > x){
        if(x == y & x == z && y == z){
            console.log('You have an equilateral triangle');
        }
        else if(x == y || x == z || y == z){
            console.log('You have an isosceles triangle');
        }
        else{
            console.log('You have a scalene triangle');
        }
    }
    else{
        console.log('Not a valid triangle!');
    }
}

isATriangle(10,2,3);

console.log("Exercise 5:\n===========\n");

function cellUsage(planLimit, day, usage){
   let periodLength = 30;
   let remainingDays = periodLength - day;
   let planAvg = planLimit / periodLength;
   let currentAvg = usage / day;
   let planDaily = planLimit / periodLength;
   let remainingData = planLimit - usage;
   let planMsg;

   if(currentAvg > planAvg){
     planMsg = "EXCEEDING";
   }else if(currentAvg < planAvg){
    planMsg = "UNDER";
   }else{
    planMsg = "AT";
   }

   console.log(`${day} days used, ${remainingDays} days remaing
   Average daily use: ${currentAvg.toFixed(2)} GB/day
   You are ${planMsg} your average daily use (${planAvg.toFixed(2)} GB/day),
   continuing this usage, you'll end up using ${(planLimit - (usage + planAvg)).toFixed(2)} 
   GB from your data limit.
   To stay below your data plan, use no more the ${(remainingData/remainingDays).toFixed(2)}
   GB/day.` 
   )

}

cellUsage(100,15,56);