const express = require('express')
const { dirname } = require('path')
const path = require('path')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')


        //Inicializaciones

const app = express()

require('./database')


        //Configuraciones

app.set('port', process.env.PORT || 3000)

app.set('views', path.join(__dirname, 'views'))




        //Middlewares

app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))

app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())

app.use(passport.session())



//Rutas

app.use(require('./routes/index'))
app.use(require('./routes/ordenes'))



//Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')))



//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})

