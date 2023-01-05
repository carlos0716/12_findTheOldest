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
  
    
const findTheOldest = function() {
 return people.reduce((a, b) => {
       
    return (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? b : a;
    },people[0]);

};

// Do not edit below this line
module.exports = findTheOldest;


