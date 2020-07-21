/**
 * Run matchers from one expression.
 * It will stop on first match and
 * return the result.
 * 
 * @param expr 
 * @param matchers 
 */
/* function __match<A>(
  expr: A,
  ...matchers: [(expr: A) => boolean, (expr: A) => unknown][]): unknown {
    for (const [ matchFn, cb ] of matchers) {
      if (matchFn(expr)) {
        return cb(expr);
      }
    }
} */

// type Matcher<T> = [boolean, (expression: T) => unknown];
/* class Matcher {
  public condition: boolean;


} */


export const some = <T>(thing: T) => new Some<T>(thing);
export const none = () => new None();

// export const 

interface Matcher<E> { if: boolean, fn: (ex: E) => any }

export const match = <E>(
  expression: E,
  ...matchers: Matcher<E>[]
) => {

  for (const {if: condition, fn} of matchers) if (condition) return fn(expression);
}

export class Some<T> {
  public value: T;

  constructor(value: T) {
    this.value = value;
  }

  getType() {
    return (typeof this.value).toString();
  }
}

export class None {}

export type NoneType = undefined | null;

export type Optional<T> = Some<T> | None;

export const option = <T>(thing: T | NoneType) => thing ? some<T>(thing) : none();