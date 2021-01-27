// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example
type TrimLeft<T extends string> = T extends ` ${infer U}` ? TrimLeft<U>: T
type TrimRight<T extends string> = T extends `${infer U} ` ? TrimRight<U> : T

type Trimed = TrimLeft<"   Hello World  "> // expected to be 'Hello World  '
type Trimed2 = TrimRight<Trimed> // expected to be 'Hello World  '
