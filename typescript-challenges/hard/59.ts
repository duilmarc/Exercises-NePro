/*
  59 - Get Optional
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `GetOptional<T>`, which remains all the optional fields
  
  For example
  
  ```ts
  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
  ```
  
  > View on GitHub: https://tsch.js.org/59
*/


/* _____________ Your Code Here _____________ */


type Optional<T> = {[ key in keyof T ]: T[key] }
type WithOptional = Optional<{ foo: number, bar?: string }>
type WithoutOptional = Optional<Required<{ foo: number, bar?: string }>>


type Tests = string | undefined extends string ? 'a' : 'b'


type GetOptional<T> = { [key in keyof T as T[key] extends Required<T>[key] ? never : key ] : T[key] }

type Test = GetOptional<{ foo: number, bar?: string }>

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
    Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/59/answer
  > View solutions: https://tsch.js.org/59/solutions
  > More Challenges: https://tsch.js.org
*/

