// Function 1: saturdayFun - Default activity for Saturdays
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function 2: mondayWork - Default activity for Mondays
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function 3: wrapAdjective - Wraps an adjective with given flair
  function wrapAdjective(flair = "*") {
    return function (adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Export functions for testing
  module.exports = { saturdayFun, mondayWork, wrapAdjective };
  