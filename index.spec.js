var objectWithoutProperties = require('./index.js')

console.log(objectWithoutProperties({a:'b', c: 'd', e: 'f'}, ['c', 'e']))
