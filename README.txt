Jairo Perez     C.I.28336214

Introduccion a Sistemas Distribuidos

Proyecto #1


El sistema es un crud de ordenes.


--------------------DESARROLLO------------------------------------

El editor de codigo utilizado fue Visual Studio Code.

Para el desarrollo del proyecto utilice Node.JS con Express, algunos de los modulos que utilice fueron:

-bcryptjs: para el encriptamiento de las claves de los usuarios.

-ejs: para el frontend.

-mongoose: para la conexion con la base de datos.

-passport: para el login.

-express-session
-method-override
-nodemon



Para la base de datos utilice mongoDB ya que a mi parecer esta brinda una mayor comodidad a la hora de trabajar
con el desarrollo de APIs de este tipo.



--------------DISTRIBUCION DEL CODIGO-------------------------

El sistema esta dividido en carpetas, en la raiz nos encontramos con los archivos .json, con los modulos de node, 
y con una carpeta src que es donde esta contenido el codigo del sistema.

al abrir el src tendremos dos archivos javascript que corresponden a la conexion con la base de datos, y el archivo
raiz de nuestro proyecto, donde podemos encontrar sus metodos generales.

Tenemos la carpeta 'models' que es donde se encuentran los archivos js del modelado de datos de los usuarios y de
las ordenes del sistema.

En la carpeta 'routes' nos encontramos con los archivos js donde estan rutas de acceso, tanto para el sistema de 
registro y login como para el crud de ordenes. 

Por otro lado tenemos la carpeta views, donde hay multiples archivos que corresponden a las diferentes vistas del
sistema, dichos archivos son de formato .ejs



---------------FUNCIONAMIENTO DEL SISTEMA--------------------------

El sistema corre en el puerto 3000 del localhost, al abrirlo tendremos la opcion de iniciar sesion o registrarnos
con un nuevo usuario, para registrarse hay que ingresar diferentes datos (nombre, cedula, email y clave) luego de
registrarse con exito el usuario puede iniciar sesion en el sistema con su email y su clave. Al entrar podra tener
acceso al crud de ordenes del sistema, donde dichas ordenes pueden ser editadas y eliminadas, tambien se pueden
agregar nuevas. En el momento que el usuario lo desee tambien puede cerrar la sesion y el sistema lo retornara a la
pagina inicial.
