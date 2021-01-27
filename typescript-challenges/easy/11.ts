

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

console.log(typeof tuple)

type TupleToObject< T extends readonly string[]> = {
    [ key in T[number] ] :  string
}

const result: TupleToObject<typeof tuple> = { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'} // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}w