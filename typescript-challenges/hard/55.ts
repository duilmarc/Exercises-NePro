//Implement the advanced util type UnionToIntersection<U>

//For example

type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;

type UnionToIntersection2<T> = ( T extends infer R ? (...args: R[]) => unknown : never )  extends (...args : infer S ) => unknown ? S : never /// setting as array for each type`
type UnionToIntersection<T> = ( T extends infer R ? (args: R) => unknown : never )  extends (...args : infer S ) => unknown ? S : never // resolution never


type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
type I2 = UnionToIntersection2<'foo' | 42 | true> // expected to be 'foo'[] & 42[] & true[]

