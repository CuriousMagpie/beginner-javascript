// Console Methods
const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
  console.groupCollapsed('${person.name}');
  if (person.name === 'Wes') {
    console.error('Dumb name'); // returns a stack trace
  }
  console.warn(person.name);
  console.table(people);
  console.count(people.name); //useful to see how many times a function is running
  console.groupEnd('${person.name}');
});

function doALotOfStuff(name) {
  console.group('Doing some stuff');
  console.log('Hey Im one');
  console.warn('watch out!');
  console.error('hey hey hey');
  console.groupEnd('Doing some stuff');
}
// Callstack
function bootstrap() {
  go();
}

// bootstrap();

// Grabbing Elements
// you can click on the code in Elements and then go to the console and input $0 and it will return just
// that bit of code!

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code





function doctorize(name) {
  console.count('running Doctorize');
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
