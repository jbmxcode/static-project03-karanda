# Bienvenido a Karánga
Voy a explicarte la estructura de carpetas y la función de cada una de ellas pero antes te indico los paso para clonar y ponerlo en marcha

**Fase inicial**
Abre tu terminal y sigue los siguientes pasos:

    1. git clone https://github.com/jbmxworld/static-project03-karanda.git
    2. npm i
    3. npm start

**Estructura de archivos**
**HTML**

Aquí puedes ver  todas las secciones del sitio web. Se utilizó handlebars para crear el tema para más facilidad en caso de utilizar algún cms

![enter image description here](https://static-project03-karanda.netlify.app/images/readme/html-structure.png)

**SASS**

De la misma manera se dividió cada bloque de código en módulos imitando la estructura de las carpetas HTML

![enter image description here](https://static-project03-karanda.netlify.app/images/readme/sass-structure.png)

**JS**

Los javascript como fueron funciones relativamente pequeñas se crearon unas carpetas para los módulos y se separó el del slider. 

![enter image description here](https://static-project03-karanda.netlify.app/images/readme/js-structure.png)

Para el slider se utilizó **Swiper** como librería de javascript (sin dependencias) y para el json se creó un **Rest API** en **Heroku** para tener el json y llamarlo con la función **Fetch** combinado con **Async Await** para que funcionara con el código de **Swipper**. Para ver el código visita el archivo **slider.js** ubicado en la ruta **/src/js/slider.js**

Las animaciones se realizaron con el **Intersection Observer API** (es una función nativa de javascript)

Aquí puedes ver el enlace del json en **Heroku** 

[https://node-project01-karanda.herokuapp.com/api/slider-home](https://node-project01-karanda.herokuapp.com/api/slider-home)
