const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
      
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
      
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
      
    },
  ]
  let addAge = people.map(
    (a)=> {
      return{...a, age: a.yearOfDeath - a.yearOfBirth}
    });
    
const findTheOldest = function() {
 return addAge.reduce((a, b) => {
   
    return a.age < b.age ? b : a; 
    },addAge[0]);

};

// Do not edit below this line
module.exports = findTheOldest;


