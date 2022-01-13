**Note:** this is just info I found useful or interesting; it does not represent a comprehensive set of notes for the course.

## Lesson 04: Variables and Statements

Differences between variable types:

- `var` and `let` can be changed within the code, like:

  - `var = 'first';`
  - `let first = 'hello';`
  - `const age = 25;`

- `const` cannot be changed at all, so: `cool = false;` will not work!

`var` variables are scoped differently than `let` and `const` variables.

- `var` is a _function scoped variable_
- `let` and `const` are _block scoped variables_ i.e., they use {}

- use `const` by default and `let` when needed

Different Cases:

- camelCase _most typically used_
  - `const iLikePizza = true;`
- UpperCamelCase _used mainly when creating classes_
  - `const ILikeHotDogs = false;`
- snake*case \_can be used, but not common*
  - `const this_is_snake_case = 'hiss!';`
- kebab-case _don't do this, hyphens aren't allowed!_
  - `const this-is-not-allowed-in-javascript = true;`

## Lesson 05: Code Quality Tooling with Prettier and ESLint

- ESLint.org: identifies & reports potential issues - bad design practices, unused variables, broken or confusing scoping. Lots of different rulesets and can be modified to suit one's own coding style (or a house style).
- Prettier.io: entirely for code formatting. It's quite opinionated, so just let it run and figure out how to format code.

There's a set of linting and prettier rules that can be configured at https://github.com/wesbos/eslint-config-wesbos

Lots of time spent in this lesson on how to set up VS Code, so if you use that, it's probably useful. I spent the time messing around with plugin and settings in Atom.

## Lesson 06: Types - Introduction

Any time you have a value, it has to be one of seven types (data types?):

- string: text enclosed in single quotes, double quotes, or backticks
- number: a number, with or without decimal places
- object: everything in JS is an object--functions, arrays, dates are some examples
- Boolean: true/false
- null and unidentified: two different ways of saying nothing
- symbol: a guaranteed unique identifier

## Lesson 07: Strings

`/* eslint-disable */` -- disables eslint

Strings hold text information. You can use the following to denote a string in javascript:

- single quotes
- double quotes
- backticks

_Single_ and _double quotes_ are essentially the same. You can nest them inside one another. It's a good idea to pick one and stick with it unless you're doing something like `const sentence = "she's the \"best.\""` You have to escape the second set of double quotes with a backslash (\) which can get annoying.

_Backticks_ can go outside single/double quotes and are in some ways more versatile. You can use them if your string has line breaks in it without needing to escape the line break.

_Concatenation_ is 2 ore more strings combined into one:

```
const name = 'Inigo Montoya'
const hello = 'Hello, my name is' + name + '. Prepare to die.'
```

_Interpolation_ is a variable inside a string:

```
const name = 'Inigo Montoya'
const hello = `Hello, my name is ${name}. Prepare to die.`
```

You can only use the `${variable}` syntax inside backticks.

## Lesson 08: Numbers

_Integers_ are whole numbers and _floats_ have decimal places.

Mathematical operands are available: exponents (`**`), multiplication (`*`), division (`/`), addition (`+`), and subtraction (`-`). Order of operations is PEMDAS.

There are helper methods that can be used for math. Most common are:

- `Math.round()`: rounds 20.2 to 20
- `Math.floor()`: floor of 20.2 is 20
- `Math.ceil()`: ceiling of 20.9 is 21
- `Math.random()`: generates a random number between 0 and 1

The modulo operand (`%`) gives a remainder.

```
const candyPieces = 20;
const kids = 3;
const eachKidGets = Math.floor(candyPieces / kids);
const parentGets = candyPieces % kids;
console.log(`Kids get ${eachKidGets} pieces of candy. The parent gets ${parentGets} pieces.`)

returns:
Kids get 6 pieces of candy. The parent gets 2 pieces.
```

FLoating point math is a thing.

Because of floating point math, don't store money as dollars and cents, instead store it as whole integers and then divide by 100 and round to two decimal places. (_Note:_ I am not convinced about this; this is fine for a store website but if you're doing anything with millions of dollars then this could cause a problem, but then again you need to track to the dollar at least for that because otherwise you'll get a propogation of error if you round too too much. This comes from my many years of experience as a finance-adjacent data analyst.)

`Infinity` and `-Infinity` are considered numbers, as is `NaN`, or Not A Number.

## Lesson 09: Objects and Symbols

Everything in javascript is an _object_. Objects are, at their base, collections of data and/or functionality.

```
const person = {
  // use property: value pairs
  first: 'Jane',
  last: 'Smith',
  age: 40,
  };

console.log(person.first);
console.log(person); // note that the order of the property: value pairs doesn't matter
```

_Symbols_ are another data type and are specifically a way to create a unique identifier. They aren't discussed in the course, but [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) has a reasonably technical explanation.

## Lesson 09: Undefined and Null

Both _undefined_ and _null_ are both nothing, but nothing in different ways.

Undefined is when a variable is created with `let` and is not defined. Null is explicitly set to `null`. Compare:

```
let somethingUndefined;
const somethingNull = null;

console.log(somethingUndefined);
console.log(somethingNull);
```

And here's a more interesting set of examples:

```
const cher = {
  first: 'cher',
};

console.log(cher);
console.log(cher.last);

// run the first part of this next section before you change the values of first and last

const teller = {
  first: 'Raymond',
  last: 'Teller',
};
console.log(teller);

teller.first = 'Teller';
teller.last = null;

console.log(teller);
```
