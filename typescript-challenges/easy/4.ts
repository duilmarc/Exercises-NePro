interface Todo {
    title: string
    description: string
    completed: boolean
  }
  

  type MyPick< T, U extends keyof Partial<T> >  = {
      [ key in U ] : T[key] 
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }