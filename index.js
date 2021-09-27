// Your code here
function saturdayFun(toDo = 'roller-skate'){
    return `This Saturday, I want to ${toDo}!`
  }

const mondayWork = function(iWillDo = 'go to the office'){return `This Monday, I will ${iWillDo}.`}

function wrapAdjective(popPop = '*'){
    const innerWrap = function (uAre = "special"){
      return `You are ${popPop}${uAre}${popPop}!`;
  }
  return innerWrap
  }
  