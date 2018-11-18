// IDEA ORIGINAL
/*
La pantalla principal muestra un menu con las categorias. Seria cool que se viera un collage de imagenes 
de lo que trae cada categoria.

Cuando se hace clic en una categoria automaticamente empieza a desplegar su contenido, una imagen con su descripcion y una voz diciendo dicha descripcion, despues de 10 segundos avanza a la siguiente imagen o cuando el usuario hace clic o toca cualquier tecla. El cambio de imagen debe ser con una transicion agradable.

En todo momento debe presentar una forma de regresar al menu principal, haciendo clic o con una tecla especial. Ademas un boton que permita tocar un sonido correspondiente a la imagen como ladridos o maullidos, si no hay sonido que no aparezca el boton.

Supongo que esto seria mas facil si usara un framework como Vue, Angular o React
*/

// HECHO
/* 
Tengo la base de datos en un gran objeto jerarjico

El html con sus elementos div, img, se crean dinamicamente a partir de la base de datos

Pude usar el Web Speech API sin usar una libreria como p5.speech, para pronunciar palabras u oraciones

Descargue audios que son tocados automaticamente via js.

No uso la libreria howler, ni ninguna para tocar los sonidos.

Desactive el manejador de eventos click durante un delay de 1.5 o 3 seg porque Mateo da 2 clicks seguidos y se salta una imagen de animal

Pauso el sonido si Mateo da click para avanzar a la siguiente imagen

Agregar un texto, posiblemente SVG a cada imagen en especial los colores y numeros. Use un h1 y con la propiedad text-shadow le puse un borde luminoso

Encontre un sitio web aconvert.com donde puedo recortar los audios para dejar fuera partes que no deseo oir, tambien se puede convertir de formato, aiff, mp3, wav, flac
*/

// PENDIENTES Y MEJORAS
/* 
Seria cool que se viera un collage de imagenes de lo que trae cada categoria...intente poner 4 imagenes de background (separadas por coma) pero por las distintas dimensiones de las imagenes no calzaba bien en el div

El cambio de imagen debe ser con una transicion agradable... Trate de hacerlo via CSS pero no supe como

Rediseñar (refactor) todo el codigo para que sea mas logico y ordenado. Al menos quitar uno o dos divs que no son necesarios.

Evitar que se pronuncie la categoria repetidas veces cada vez que el evento mouseenter se dispara.
*/

// CAMBIOS
/* 
Deje que el sonido se tocara automaticamente sin peticion del usuario.

La aplicacion era lo suficientemente sencilla para hacerse sin usar un framework, ni librerias

Con howlerjs (o directamente js) hacer que el audio empiece y termine en ciertos tiempos, para que no dure mucho y para que no salgan voces extras... Mas bien recortare los audios para evitar partes no deseadas
*/