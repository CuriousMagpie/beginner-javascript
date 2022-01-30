// function definition
function calculateBill(billAmount, taxRate = 0.0825, tipRate = 0.15) {
  // this is the function body
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
// function call or **Run**
natalieMeal = 250;
delawareTax = 0.0;
myTip = 0.2;
const myTotal = calculateBill(natalieMeal, delawareTax, myTip);
console.log(myTotal);
const myTotal2 = calculateBill(1000, 0.11)
const myTotal3 = calculateBill(100, undefined, 0.2);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}!`;
}

const greeting = sayHiTo("Natalie");
console.log(greeting);

// function definition
function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
  // this is a default value
  return `HEY ${name.toUpperCase()}`;
}

const name = "Natalie";
const yellDoctor = yell(doctorize(name));
console.log(yellDoctor);
