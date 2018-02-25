### OBJETIVOS

- Creación del formulario.

- Implementacion del formulario


## Creacion del formulario.

Para activar el formulario tendremos que pinchar en el icono de usuario ubicado en la zona izquierda del archivo .html, una vez que pinchamos ahi, nos dirigira a un menu en el que tendremos dos opciones, login, registro,
si pinchamos en registro nos saldra una ventana en la que nos pedira los datos necesarios, de los cuales tendremos unos que son obligatorios y otros no, los obligatorios haremos que sean asi con la opcion required, el resto no hara falta. Una vez hecho esto validado los datos mediante una funcion que se encuentra en el .js procederemos a crear la cookie.
Por el contrario si el usuario introduce los datos en login(usuario y password), mediante otra funcion  comprobara si existe una cookie con los mismos datos, si es asi no saldra un mensaje  de bienvenida sino nos dira que no se encuentra el usuario. Todo esto lo hemos hecho mediante  css3, html5 y js.
Tenemos un html en el que crearemos todo el esquelete con un form que será donde pondremos todos los datos a pedir.
Un css con el que le daremos estilo a nuestro formulario.
Por ultimo un archivo javascript que introducimos para dar interactividad a nuestro formulario.


## Implementacion de cookies.

Hemos creado un archivo con extension js en el que habra diferentes funcionees con las que conseguiremos guardar y comprobar cookies.
El primer lugar tendremos una funcion en la que obtendremos los datos del formulario y crearemos la cookie que guardaremos.
Tambien tenemos una funcion que se activa si se pulsa el boton de login, con esta funcion obtenemos los datos de usuario y password comprobaremos si existe en el document.cookie , si es asi nos saldra un mensaje de bienvenida en caso contrario nos indicara que no existe el usuario.