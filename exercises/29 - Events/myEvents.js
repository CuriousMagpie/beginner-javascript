// console.log(`it's alive!`)
// go get something, listen for something, then do something
const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');

// this is an anonymous callback function - the function has no name
// butts.addEventListener('click', function() {
//   console.log('IT GOT CLICKED!');
// });

// named callback function
function handleClick() {
  console.log('IT GOT CLICKED!');
}

const hooray = () => console.log('Hooray!');

butts.addEventListener('click', handleClick);
coolButts.addEventListener('click', hooray);

// weird, this doesn't work in Firefox? Or rather, it runs and doesn't let me click before removing click
// butts.removeEventListener('click', handleClick);

// listen on multiple items
// can't just add an event listener, need to loop through everything
const buyButtons = document.querySelectorAll('button.buy'); // normally this would be at the top of the code
console.log(buyButtons);

function buyItem() {
  console.log('BUYING ITEM');
}

function handleBuyButtonClick(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

// buyButtons.forEach(handleBuyButtonClick);

buyButtons.forEach(button => {
  button.addEventListener('click', () =>  {
    console.log('You clicked it!');
  })
});
