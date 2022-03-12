const express = require('express')
const router = express.Router()

const Orden = require('../models/Orden.js')

router.get('/ordenes/add', (req, res) => {
    res.render('add-ordenes.ejs')
})

router.get('/ordenes', async (req, res) => {
    
    const ordenes = await Orden.find()
    res.render('all-ordenes.ejs', {ordenes})
})

router.get('/ordenes/edit/:id', async (req, res) => {
    const orden = await Orden.findById(req.params.id)
    res.render('edit-ordenes.ejs', {orden})
})

router.post('/add-ordenes', async (req, res) => {
    const {titulo, descripcion}= req.body
    const errors = []
    if(!titulo) {
        errors.push({text: 'POR FAVOR ESCRIBA UN TITULO!'})
    }
    if(!descripcion) {
        errors.push({text: 'POR FAVOR ESCRIBA UNA DESCRIPCION!'})
    }
    if(errors.length > 0) {
        res.render('add-ordenes.ejs', {
            errors, titulo, descripcion
        })
    }else {
        const newOrden = new Orden({titulo, descripcion})
        await newOrden.save()
        console.log(newOrden) 
        res.redirect('/ordenes')
    }
})

router.put('/edit-ordenes/:id', async (req, res) => {
    const { titulo, descripcion }= req.body
    await Orden.findByIdAndUpdate(req.params.id, {titulo, descripcion})
    res.redirect('/ordenes')
})

router.delete('/ordenes/delete/:id', async(req, res) => {
    await Orden.findByIdAndDelete(req.params.id)
    res.redirect('/ordenes')
})

module.exports = router