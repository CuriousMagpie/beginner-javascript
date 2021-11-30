**Note:** this is just info I found useful or interesting; it does not represent a comprehensive set of notes for the course.

Lesson 04: Variables and Statements
---
Differences between variable types:

- `var` and `let` can be changed within the code, like:
  - `var = 'first';`
  - `let first = 'hello';`
  - `const age = 25;`  


- `const` cannot be changed at all, so:
  - `cool = false;`  
  will not work!

`var` variables are scoped differently than `let` and `const` variables.
- `var` is a _function scoped variable_
- `let` and `const` are _block scoped variables_ i.e., they use {}

- use `const` by default and `let` when needed  


Different Cases:
- camelCase _most typically used_
  - `const iLikePizza = true;`
- UpperCamelCase _used mainly when creating classes_
  - `const ILikeHotDogs = false;`
- snake_case _can be used, but not common_
  - `const this_is_snake_case = 'hiss!';`
- kebab-case _don't do this, hyphens aren't allowed!_
  - `const this-is-not-allowed-in-javascript = true;`

Lesson 05: Code Quality Tooling with Prettier and ESLint
---
