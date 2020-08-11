/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

const single = document.querySelector('#d6-roll');

const singleMean = document.querySelector('#d6-rolls-mean');
const singleMedian = document.querySelector('#d6-rolls-median');
const singleMode = document.querySelector('#d6-rolls-mode');

const doubleOne = document.querySelector('#double-d6-roll-1');
const doubleTwo = document.querySelector('#double-d6-roll-2');
doubleOne.setAttribute('width', 100);
doubleTwo.setAttribute('width', 100);

const doubleMean = document.querySelector('#double-d6-rolls-mean');
const doubleMedian = document.querySelector('#double-d6-rolls-median');
const doubleMode = document.querySelector('#double-d6-rolls-mode');

const twelve = document.querySelector('#d12-roll');

const twelveMean = document.querySelector('#d12-rolls-mean');
const twelveMedian = document.querySelector('#d12-rolls-median');
const twelveMode = document.querySelector('#d12-rolls-mode');

const twenty = document.querySelector('#d20-roll');

const twentyMean = document.querySelector('#d20-rolls-mean');
const twentyMedian = document.querySelector('#d20-rolls-median');
const twentyMode = document.querySelector('#d20-rolls-mode');

const resetButton = document.querySelector('#reset-button');

const rollSingle = function() {
  let rolled = getRandomNumber(6);

  if (rolled === 1) {
  single.setAttribute('src', './images/d6/1.png');
  } else if (rolled === 2) {
  single.setAttribute('src', './images/d6/2.png');
  } else if (rolled === 3) {
  single.setAttribute('src', './images/d6/3.png');
  } else if (rolled === 4) {
  single.setAttribute('src', './images/d6/4.png');
  } else if (rolled === 5) {
  single.setAttribute('src', './images/d6/5.png');
  } else if (rolled === 6) {
  single.setAttribute('src', './images/d6/6.png');
  }

  sixes.push(rolled);

  let singleMeanResult = singleMeanMath(sixes);
  let singleMedianResult = singleMedianMath(sixes);
  let singleModeResult = singleModeMath(sixes);
  
  singleMean.innerText = singleMeanResult.toFixed(2);
  singleMedian.innerText = singleMedianResult;
  singleMode.innerText = singleModeResult;
}

const rollDouble = function() {
  let rolled = getRandomNumber(12);

  if (rolled === 2) {
    doubleOne.src = './images/d6/1.png';
    doubleTwo.src = './images/d6/1.png';
  } else if (rolled === 3) {
    doubleOne.setAttribute('src', './images/d6/2.png');
    doubleTwo.setAttribute('src', './images/d6/1.png');
  } else if (rolled === 4) {
    doubleOne.setAttribute('src', './images/d6/2.png');
    doubleTwo.setAttribute('src', './images/d6/2.png');
  } else if (rolled === 5) {
    doubleOne.setAttribute('src', './images/d6/3.png');
    doubleTwo.setAttribute('src', './images/d6/2.png');
  } else if (rolled === 6) {
    doubleOne.setAttribute('src', './images/d6/5.png');
    doubleTwo.setAttribute('src', './images/d6/1.png');
  } else if (rolled === 7) {
    doubleOne.setAttribute('src', './images/d6/3.png');
    doubleTwo.setAttribute('src', './images/d6/4.png');
  } else if (rolled === 8) {
    doubleOne.setAttribute('src', './images/d6/2.png');
    doubleTwo.setAttribute('src', './images/d6/6.png');
  } else if (rolled === 9) {
    doubleOne.setAttribute('src', './images/d6/3.png');
    doubleTwo.setAttribute('src', './images/d6/6.png');
  } else if (rolled === 10) {
    doubleOne.setAttribute('src', './images/d6/5.png');
    doubleTwo.setAttribute('src', './images/d6/5.png');
  } else if (rolled === 11) {
    doubleOne.setAttribute('src', './images/d6/5.png');
    doubleTwo.setAttribute('src', './images/d6/6.png');
  } else if (rolled === 12) {
    doubleOne.setAttribute('src', './images/d6/6.png');
    doubleTwo.setAttribute('src', './images/d6/6.png');
  } 

  doubleSixes.push(rolled);

  let doubleMeanResult = doubleMeanMath(doubleSixes);
  let doubleMedianResult = doubleMedianMath(doubleSixes);
  // let doubleModeResult = doubleModeMath(doubleSixes);
  
  doubleMean.innerText = doubleMeanResult.toFixed(2);
  doubleMedian.innerText = doubleMedianResult;
  // doubleMode.innerText = doubleModeResult;
}

const rollTwelve = function() {
    let rolled = getRandomNumber(12);
  
    if (rolled === 1) {
    twelve.setAttribute('src', './images/numbers/1.png');
    } else if (rolled === 2) {
    twelve.setAttribute('src', './images/numbers/2.png');
    } else if (rolled === 3) {
    twelve.setAttribute('src', './images/numbers/3.png');
    } else if (rolled === 4) {
    twelve.setAttribute('src', './images/numbers/4.png');
    } else if (rolled === 5) {
    twelve.setAttribute('src', './images/numbers/5.png');
    } else if (rolled === 6) {
    twelve.setAttribute('src', './images/numbers/6.png');
    } else if (rolled === 7) {
    twelve.setAttribute('src', './images/numbers/7.png');
    } else if (rolled === 8) {
    twelve.setAttribute('src', './images/numbers/8.png');
    } else if (rolled === 9) {
    twelve.setAttribute('src', './images/numbers/9.png');
    } else if (rolled === 10) {
    twelve.setAttribute('src', './images/numbers/10.png');
    } else if (rolled === 11) {
    twelve.setAttribute('src', './images/numbers/11.png');
    } else if (rolled === 12) {
    twelve.setAttribute('src', './images/numbers/12.png');
    }
  
    twelves.push(rolled);
  
    let twelveMeanResult = twelveMeanMath(twelves);
    let twelveMedianResult = twelveMedianMath(twelves);
    // let twelveModeResult = twelveModeMath(sixes);
    
    twelveMean.innerText = twelveMeanResult.toFixed(2);
    twelveMedian.innerText = twelveMedianResult;
    // twelveMode.innerText = twelveModeResult;
}

const rollTwenty = function() {
  let rolled = getRandomNumber(20);
  
  if (rolled === 1) {
  twenty.setAttribute('src', './images/numbers/1.png');
  } else if (rolled === 2) {
  twenty.setAttribute('src', './images/numbers/2.png');
  } else if (rolled === 3) {
  twenty.setAttribute('src', './images/numbers/3.png');
  } else if (rolled === 4) {
  twenty.setAttribute('src', './images/numbers/4.png');
  } else if (rolled === 5) {
  twenty.setAttribute('src', './images/numbers/5.png');
  } else if (rolled === 6) {
  twenty.setAttribute('src', './images/numbers/6.png');
  } else if (rolled === 7) {
  twenty.setAttribute('src', './images/numbers/7.png');
  } else if (rolled === 8) {
  twenty.setAttribute('src', './images/numbers/8.png');
  } else if (rolled === 9) {
  twenty.setAttribute('src', './images/numbers/9.png');
  } else if (rolled === 10) {
  twenty.setAttribute('src', './images/numbers/10.png');
  } else if (rolled === 11) {
  twenty.setAttribute('src', './images/numbers/11.png');
  } else if (rolled === 12) {
  twenty.setAttribute('src', './images/numbers/12.png');
  } else if (rolled === 13) {
  twenty.setAttribute('src', './images/numbers/13.png');
  } else if (rolled === 14) {
  twenty.setAttribute('src', './images/numbers/14.png');
  } else if (rolled === 15) {
  twenty.setAttribute('src', './images/numbers/15.png');
  } else if (rolled === 16) {
  twenty.setAttribute('src', './images/numbers/16.png');
  } else if (rolled === 17) {
  twenty.setAttribute('src', './images/numbers/17.png');
  } else if (rolled === 18) {
  twenty.setAttribute('src', './images/numbers/18.png');
  } else if (rolled === 19) {
  twenty.setAttribute('src', './images/numbers/19.png');
  } else if (rolled === 20) {
  twenty.setAttribute('src', './images/numbers/20.png');
  }

  twenties.push(rolled);

  let twentyMeanResult = twentyMeanMath(twenties);
  let twentyMedianResult = twentyMedianMath(twenties);
  // let twentyModeResult = twentyModeMath(twenties);
  
  twentyMean.innerText = twentyMeanResult.toFixed(2);
  twentyMedian.innerText = twentyMedianResult;
  // twentyMode.innerText = twentyModeResult;
}



/*******************
 * EVENT LISTENERS *
 *******************/

single.addEventListener('click', rollSingle);

doubleOne.addEventListener('click', rollDouble);
doubleTwo.addEventListener('click', rollDouble);

twelve.addEventListener('click', rollTwelve);

twenty.addEventListener('click', rollTwenty);

/******************
 * RESET FUNCTION *
 ******************/

const resetAll = function() {
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];
  
  single.setAttribute('src', './images/start/d6.png');
  doubleOne.setAttribute('src', './images/start/d6.png');
  doubleTwo.setAttribute('src', './images/start/d6.png');
  twelve.setAttribute('src', './images/start/d12.jpeg');
  twenty.setAttribute('src', './images/start/d20.jpg');
  
  singleMean.innerText = '\n';
  singleMedian.innerText = '\n';
  singleMode.innerText = '\n';
  
  doubleMean.innerText = '\n';
  doubleMedian.innerText = '\n';
  doubleMode.innerText = '\n';
  
  twelveMean.innerText = '\n';
  twelveMedian.innerText = '\n';
  twelveMode.innerText = '\n';
  
  twentyMean.innerText = '\n';
  twentyMedian.innerText = '\n';
  twentyMode.innerText = '\n';
}

resetButton.addEventListener('click', resetAll);

resetAll();

/****************
 * MATH SECTION *
 ****************/

const singleMeanMath = function(sixes) {
  let answer = 0;
  
  for (const roll of sixes) {
    answer = answer + roll;
  }
  let mean = answer / sixes.length;
  return mean;
}


const singleMedianMath = function(sixes) {
  let sortedResults = sortByNumber(sixes);
  let midOdd = (sortedResults.length - 1) / 2
  let midEven = Math.floor((sortedResults.length -1) /2)
  
  if (sortedResults.length === 2) {
    return (sortedResults[0] + sortedResults[1]) / 2
  } else if (sortedResults.length % 2 === 1) {
    return sortedResults[midOdd]
  } else {
    return (sortedResults[midEven] + sortedResults[midEven + 1]) / 2;
  }
}

const singleModeMath = function(sixes) {
  storedResults = sortByNumber(sixes);
  results = [];
  let j = 0;

  for (let i = 0; i < storedResults.length; i++) {
    if (storedResults[i] === storedResults[i + 1]) {
      results.splice([j], 1, results[j] + 1);
    } 
    
    if (storedResults[i] !== storedResults[i + 1]) {
      j++
      results.splice([j], 1, results[j] + 1);
    }
    return Math.max(results);
  }
}


const doubleMeanMath = function(doubleSixes) {
  let answer = 0;
  
  for (const roll of doubleSixes) {
    answer = answer + roll;
  }
  let mean = answer / doubleSixes.length;
  return mean;
}


const doubleMedianMath = function(doubleSixes) {
  let sortedResults = sortByNumber(doubleSixes);
  let midOdd = (sortedResults.length - 1) / 2
  let midEven = Math.floor((sortedResults.length -1) /2)
  
  if (sortedResults.length === 2) {
    return (sortedResults[0] + sortedResults[1]) / 2
  } else if (sortedResults.length % 2 === 1) {
    return sortedResults[midOdd]
  } else {
    return (sortedResults[midEven] + sortedResults[midEven + 1]) / 2;
  }
}

const twelveMeanMath = function(twelves) {
  let answer = 0;
  
  for (const roll of twelves) {
    answer = answer + roll;
  }
  let mean = answer / twelves.length;
  return mean;
}

const twelveMedianMath = function(twelves) {
  let sortedResults = sortByNumber(twelves);
  let midOdd = (sortedResults.length - 1) / 2
  let midEven = Math.floor((sortedResults.length -1) /2)
  
  if (sortedResults.length === 2) {
    return (sortedResults[0] + sortedResults[1]) / 2
  } else if (sortedResults.length % 2 === 1) {
    return sortedResults[midOdd]
  } else {
    return (sortedResults[midEven] + sortedResults[midEven + 1]) / 2;
  }
}

const twentyMeanMath = function(twenties) {
  let answer = 0;
  
  for (const roll of twenties) {
    answer = answer + roll;
  }
  let mean = answer / twenties.length;
  return mean;
}

const twentyMedianMath = function(twenties) {
  let sortedResults = sortByNumber(twenties);
  let midOdd = (sortedResults.length - 1) / 2
  let midEven = Math.floor((sortedResults.length -1) /2)
  
  if (sortedResults.length === 2) {
    return (sortedResults[0] + sortedResults[1]) / 2
  } else if (sortedResults.length % 2 === 1) {
    return sortedResults[midOdd]
  } else {
    return (sortedResults[midEven] + sortedResults[midEven + 1]) / 2;
  }
}