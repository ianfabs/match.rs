## Match

Deno module to match functions on expressions

#### Getting Started

```typescript
import {match, option, some, none} from 'https://raw.githubusercontent.com/gustavofsantos/match-ts/master/match.ts';

// pretend this is the result of a fetch call or whathaveyou, inthat it could be null/undefined
let res = {dogs: 22, cats: 19};

const opt = option(res.dogs);

match(
  opt,
  {
    if: (<Some<number>>opt).value > 20,
    fn: (ex) => {
      console.log("there are over twenty!")
    }
  },
  {
    if: true,
    fn: (ex) => {
      console.log("there aren't over twenty :-(")
    }
  }
)

```