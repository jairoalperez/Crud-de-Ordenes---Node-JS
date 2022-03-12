const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')


router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/index', (req, res) => {
    res.render('index.ejs')
})


//--------------------USERS--------------------------------------------------------------------------------

router.get('/inicio', (req, res) => {
    res.render('inicio.ejs')
})

router.post('/inicio', async (req, res) => {
    const { email, clave } = req.body
    const emailUser = await User.findOne({email: email})
    if (!emailUser) {
        console.log("ERROR: El correo no esta registrado")
        res.render('inicio.ejs')
    }else {
        const match = await emailUser.matchPassword(clave)
        if (!match) {
            console.log("ERROR: Clave incorrecta")
            res.render('inicio.ejs')
        } else {
            console.log("Inicio de Sesion Completado")
            res.redirect('/ordenes')
        }
    } 
})

router.get('/registro', (req, res) => {
    res.render('registro.ejs')
})

router.post('/registro', async (req, res) => {
    const { nombre, cedula, email, clave, c_clave } = req.body
    console.log(req.body)
    if(clave != c_clave) {
        console.log("ERROR: Las claves deben coincidir")
        res.render('registro.ejs', {nombre, cedula, email, clave, c_clave})
    }
    else {
        const emailUser = await User.findOne({email: email})
        if (emailUser) {
            console.log('El correo electronico esta en uso')
            res.render('registro.ejs')
        } else {
        const newUser = new User({nombre, cedula, email, clave})
        newUser.clave = await newUser.encryptPassword(clave)
        await newUser.save()
        console.log('Registro Exitoso')
        res.render('inicio.ejs')}
    }
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/index')
})

module.exports = router