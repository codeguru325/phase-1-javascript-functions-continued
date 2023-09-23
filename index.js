// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`

}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
    
}

function wrapAdjective(flair = "*", ) {
    // This inner function takes an adjective as a parameter and returns a formatted string
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  