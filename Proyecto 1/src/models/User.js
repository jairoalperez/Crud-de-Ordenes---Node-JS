const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    nombre: {type: String, required: true},
    cedula: {type: Number, required: true},
    email: {type: String, required: true},
    clave: {type: String, required: true}, 
})

UserSchema.methods.encryptPassword = async (clave) => {
   const salt = await bcrypt.genSalt(10)
   const hash = bcrypt.hash(clave, salt)
   return hash
}

UserSchema.methods.matchPassword = async function (clave) {
    return await bcrypt.compare(clave, this.clave)
}

module.exports = mongoose.model('User', UserSchema)