/*

ORDEN DE LAS LINEAS

-'timeout 1'
-'timeout 2'
-'nextTick 1'
-'nextTick 2'
-'nextTick 3'
-'async function'
-'then 2'
-'microTask 1'
-'microTask 2'
-'immediate 1'
-'immediate 2'
-'new promise'
-'then 1'

Aqui tenemos un resultado similar al anterior, con la unica diferencia 
de que en este se inicia con un readFile() que se ejecuta al finalizar 
de leer instancia el objeto Promise, pero como estas tareas se completan 
en la ultima fase de la ejecucion, se ejecuta todo el codigo tal cual el
anterior, en el mismo orden, solo con la alteracion de que el log del
objeto Promise y su respectivo then, se muestran al final, despues de los
immediate.

---------------------------------------------------------------------------------------------------------

*/

const { readFile } = require('fs')

readFile(__filename, () => {
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
})