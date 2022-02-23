 function doctorize(firstName) {
   return `Dr. ${firstName}`;
 }

 //anonymous function - one w/o a name
 function (firstName) {
   return `Dr. ${firstName}`;
 }

//function expression
const firstName = "Natalie";
const doctorizeTwo = function (firstName) {
  return `Dr. ${firstName}`;
}
console.log(firstName);

//arrow function
const inchToCm = (inches) => inches * 2.54;
const add = (a, b = 3) => a + b;

// returning an object
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  }
  return baby;
}

// arrow function that returns an object -- this is a little hard to read, tbh
const makeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0, });

// IIFE
// Immediately Invoked Function Expression

(function() {
  console.log('Running the Anon function');
  return 'You are cool';
}());

// Methods
const natalie = {
  name: 'natalie',
  // method
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return this.name;
  },

  // short hand way to put a method in an object
  yellHi() {
    console.log('HEY NATALIE');
  },

  // arrow function
  whisperHi: () => {console.log('hi natalie, i am a mouse');},

}

// Callback Function
// Click Callback
const button = document.querySelector('.clickMe');
function handleClick() {
  console.log('Great clicking!');
};
button.addEventListener('click', handleClick);

// or pass an anonymous function directly:
button.addEventListener('click', function() {
  console.log('Nice job!');
});

// Timer Callback
setTimeout(natalie.yellHi, 1000);

// or pass an anonymous function
setTimeout(function(){
  console.log('Done! Time for a snack!');
}, 1000);
