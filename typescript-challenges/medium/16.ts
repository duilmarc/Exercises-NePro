// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type StringorNumber =  number[] | string[] 
type Pop<T extends StringorNumber > =  T extends [ ... infer Rest , infer Target ] ? Rest : never
type Push<T extends StringorNumber, U extends number|string > = [ ... T, U ]
type UnShift<T extends StringorNumber, U extends number|string > = [ U, ...T ]
type Shift<T extends StringorNumber> = T extends [  infer Target, ... infer Rest  ] ? Rest : never
 

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
type re3 = Push<arr2, 4> // expected to be [ 3, 2, 1 , 4]
type re4 = Shift<arr2> // expected [ 2, 1]
type re5 = UnShift<arr2,4> // expected to be [ 4, 3, 2 ,1]

// Extra: Similarly, can you implement Shift, Push and Unshift as well?