// Implement permutation type that transforms union types into the array that includes permutations of unions.
type A = 'a' |'b' 
type B = 'a' |'b' | 'c'

type Excluding1<T, U = T> = U extends U ?  [ T, Excluding1<Exclude<T, U>> ] : [never] // returar always same typers --- danger
type Excluding2<T, U = T> = U extends U ?  [Excluding2<Exclude<T, U>> ] : [never] // returns typers when concat never is return but its permutaded


type Anya = Excluding1<B> // infinite
type Anya2 = Excluding2<B> // limited
// We need handle never return 


type Permutation< T extends string, U = T > = T[] extends never[] ? [] : U extends U ? [ U , ...Permutation<Exclude<T, U>>] : [never]


type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] |['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A'