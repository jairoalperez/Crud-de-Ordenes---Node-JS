/*

ORDEN DE LAS LINEAS

-'timeout 1'
-'timeout 2'
-'nextTick 1'
-'nextTick 2'
-'nextTick 3'
-'new promise'
-'async function'
-'then 1'
-'then 2'
-'microTask 1'
-'microTask 2'
-'immediate 1'
-'immediate 2'

Tal y como se define en la documentacion de Node, primero se ejecutan
los timer que en este caso son los dos timeout. Luego de esto se ejecutan
las microtareas que en este caso son los nextTick, las promesas y las
queueMicrotask, esto pertenece a la fase poll. Finalmente terminamos con
la fase check que es donde se ejecutan las macrotareas, que en este caso
son los immediate.

---------------------------------------------------------------------------------------------------------

*/

new Promise(function (resolve) {
    console.log('new promise')
    resolve()
  }).then(() => {
    console.log('then 1')
  })
  
  async function foo () {
    console.log('async function')
  }
  
  foo().then(() => {
    console.log('then 2')
  })
  
  setImmediate(() => {
    console.log('immediate 1')
  })
  
  setTimeout(() => {
    console.log('timeout 1')
  })
  
  process.nextTick(() => {
    console.log('nextTick 1')
  })
  
  queueMicrotask(() => {
    console.log('microtask 1')
  })
  
  setTimeout(() => {
    console.log('timeout 2')
  })
  
  setImmediate(() => {
    console.log('immediate 2')
  })
  
  process.nextTick(() => {
    console.log('nextTick 2')
  })
  
  process.nextTick(() => {
    console.log('nextTick 3')
  })
  
  queueMicrotask(() => {
    console.log('microtask 2')
  })