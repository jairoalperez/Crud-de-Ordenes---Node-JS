const mongoose = require('mongoose')
const { Schema } = mongoose

const OrdenSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, require: true},
    user: {type: String}
})

module.exports = mongoose.model('Orden', OrdenSchema)