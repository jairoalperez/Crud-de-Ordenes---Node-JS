const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ordenes-db-app', {
    //useCreateIndex: true,
    useNewUrlParser: true,
   // useFindAndModify: false
})

    .then(db => console.log('Se logro la conexion a la base de datos'))
    .catch(err => console.error(err))