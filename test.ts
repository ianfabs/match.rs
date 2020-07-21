import {match, none, some, option, Some, None} from "./match.ts";

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