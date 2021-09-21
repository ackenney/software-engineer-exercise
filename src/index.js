// Implement the body of the function below & ensure it passes the provided unit tests by running npm run test.
const sum = (arrayOfNumbers) => {

  let sum = 0; //initialize sum 

  //For loop to iterate through the array
  for(let i = 0; i < arrayOfNumbers.length; i++){
      sum = sum + arrayOfNumbers[i]; // calculating sum
  }
  return sum;
};

module.exports = {
  sum,
};
