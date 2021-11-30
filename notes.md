**Lesson 04: Variables and Statements**
---
Differences between variable types:

- `var` and `let` can be changed within the code, like:
  - `var = 'first';`
  - `first = 'hello';`
  - `age = 25;`

- `const` cannot be changed at all, so:
  - `cool = false;` will not work!

- `var` variables are scoped differently than `let` and `const` variables.
- `var` is a _function scoped variable_
- `let` and `const` are _block scoped variables_ ie {}

- use `const` by default and `let` when needed

- camelCase
  - `const iLikePizza = true;`
- UpperCamelCase
  - `const ILikeHotDogs = false;`
- snake_case
  - `const this_is_snake_case = 'hiss!';`
- kebab-case
  - `const this-is-not-allowed-in-javascript = true;`

**Lesson 05: Code Quality Tooling with Prettier and ESLint**
---
