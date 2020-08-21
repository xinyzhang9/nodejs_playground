let a = {}, b = '0', c = 0
a[b] = 'hello'
a[c] = 'world'
console.log(a[b]) // world

let a = {}, b = Symbol('1'), c = Symbol('1')
a[b] = 'hello'
a[c] = 'world'
console.log(a[b]) // hello

let a = {}, b = {n:'1'},c={m:'2'}
a[b] = 'hello'
a[c] = 'world'
console.log(a[b]) // world
