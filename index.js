// function retailPriceMaker(manufacturePrice){
//   return function(marketMultiplier){
//     return marketMultiplier * manufacturePrice;
//   }
// }
//
// typeof retailPriceMaker()
// // "function"

// This performs some kind of logic between the inner and outer functions and allows you to call it only on the outer with one parameter
// Think of it as passing a parameter into the inner function first to create a const  ...
// const retailPriceForTen = retailPriceMaker(10)
//  // the execution of retailPriceMaker returns a function that takes one argument

// then calling that function with the "outer" parameter:
//  We assign this returned function to a variable called retailPriceForTen, and then can call the returned function by referencing retailPriceForTen
//  retailPriceForTen(1.5)
//  // 15

function produceDrivingRange(blockRange) {
  return function(start, end) {
    // debugger;
    const startBlock = start.slice(0, -2);
    const endBlock = end.slice(0, -2);
    const distance = Math.abs(endBlock - startBlock);

    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  };
}

function produceTipCalculator(tipPercentage) {
  return function(fare) {
    return tipPercentage * fare;
  };
}
