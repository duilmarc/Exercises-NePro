/// Implement the built-in Omit<T, K> generic without using it.

/// Constructs a type by picking all properties from T and then removing K

/// For example
type MyExclude < T , U >  =  T extends U ? never : T

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit < T , U extends keyof T > = {
  [key in  MyExclude<keyof T,U> ] : T[key]
} 
type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
console.log(todo)