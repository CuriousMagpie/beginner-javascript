
// const age =100;
//
// function go() {
//   const myAge = 200;
//   const hair = 'purple';
//   console.log(myAge);
//   console.log(age);
//   console.log(hair);
// }
//
// go()

// function isCool(name) {
//   if (name === 'natalie' ) {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// };
//
// for(let i=0; i<10; i++){
//   console.log(i);
// }

const dog = 'smokey';

function logDog (dog){
  console.log(dog);
}

function go() {
  const dog = 'tippy';
  logDog(dog);
}

go()

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  }
  yell()
}
