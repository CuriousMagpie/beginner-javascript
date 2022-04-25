// Make a div
// add a class of wrapper to it
// put it into the body
// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
`
div.innerHTML = ul;

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement('img');
img.src = 'https://picsum.photos/500';
img.width = 250;
img.classList.add('cute');
img.alt = 'cute!';
div.appendChild(img)

// with HTML string, make a div, with two paragraphs inside of it

const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
const myDiv = div.querySelector('.myDiv');
// add a class to the second paragraph called warning
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard (name, age, height) {
  const moreHTML = `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height}" tall and ${age} years old. In Dog years this person would be ${age * 7}. That would be an old dog!
    <button class="delete" type="button">delete</button>
    </p>
  </div>
  `;
  return moreHTML;
};

// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard

let cardsHTML = generatePlayerCard('Natalie', 47, 63);
cardsHTML += generatePlayerCard('Paul', 47, 70);
cardsHTML += generatePlayerCard('Jennie', 48, 66);
cardsHTML += generatePlayerCard('Thomas', 50, 70);

// put the div into the DOM just before the wrapper element
// append those cards to the div
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards)

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll('.delete');
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
buttons.forEach(button => button.addEventListener('click', deleteCard));
