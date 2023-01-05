const findTheOldest = function(arr) {
 return arr.reduce((a, b) => {
  let today = new Date().getFullYear(); 
    if (((a.yearOfDeath || today) // <= if an object misses one property you can use the or (||) operator to replace it with a prevoiusly declared variable.
    - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) {
      return b;
    }
    else {
      return a;
    }
    },arr[0]); //the initital value is the zero index of the array.

};

// Do not edit below this line
module.exports = findTheOldest;


