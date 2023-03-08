<h1 align="center"><a href="https://www.producthunt.com/posts/awesome-github-profiles?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-github-profiles" target="_blank"><img src="https://i.ibb.co/W5F9Bwc/shine-200-44-px-1.png" alt="Awesome GitHub Profiles - Best curated list of lopers readme, updated every 15 min | Product Hunt" style="width: 200px; height: 44px;" width="200" height="44" /></a>Darkisit & PasswordManager<a href="https://www.producthunt.com/posts/awesome-github-profiles?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-github-profiles" target="_blank"><img src="https://i.ibb.co/VLK8rq0/shine-200-44-px-200-43-px.png" alt="Awesome GitHub Profiles - Best curated list of developers readme, updated every 15 min | Product Hunt" style="width: 200px; height: 44px;" width="200" height="44" /></a></h1>
<div align="center">
<img src="https://img.shields.io/badge/Design-Awesone-FC60A8?style=for-the-badge&logo=Awesome+Lists&logoColor=FC60A8" alt="Awesome Badge"/>
<img src="https://img.shields.io/badge/Autores-Marlon_%26_Kevin-2ea44f?style=for-the-badge&logo=Visual+Studio+Code" alt="Autores"/>
<img src="https://img.shields.io/badge/Extension-Google_Chrome-4285F4?style=for-the-badge&logo=Google+Chrome&logoColor=4285F4" alt="Google Chrome Extension" /> 
<img src="https://img.shields.io/badge/Licencia-Creative_Commons-EF9421?style=for-the-badge&logo=Creative+Commons&logoColor=EF9421" alt="Google Chrome Extension" />
<br>
</div>
<br>


Una extension es una herramienta que permite ampliar o extender las funcionalidades del navegador, las extensiones aportan a la automatizacion de ciertas tareas por ejemplo: validacion de datos de un formulario, facilitar la descarga de contenido mutilmedia,  generar una bodega de seguridad de contraseñas, entre otros... Otras extensiones aportan en mejorar la experiencia de usuario como puede ser bloqueador de anuncios masivos, aumentar la cantidad de volumen del navegador, bloquear cookies o pop ups molestos, etc.
![alusion](https://www.hikeproject.com/wp-content/uploads/2021/12/google-chrome-extensions-977x4881-1.jpg)
> Las extensiones, herramientas que extienden funcionalidades

El objetivo de cualquier extension es ofrecer, aportar o generar una herramienta que pueda servir como apoyo al usuario final, en este repositorio encontrara 2 proyectos de desarrollo de extensiones para el navegador de Google Chrome, cada proyecto esta  descrito de manera general, a continuacion: 

<img src="https://i.ibb.co/r0kmFRZ/120200449-730024024215214-7725077185826725575-n-modified.png" align="right" style="width: 80px; height: 80px;" />

### The Darkisit
Darkisit es el desarrollo de una extension que cambia la paleta de colores de la plataforma Divisit, esta extension intercambia los estilos, colores y diseño de la plataforma a una tonalidad mas verde-oscura, simulando un efecto "Dark Mode" le da un nuevo diseño a la pagina, ademas, su objetivo principal es generar una nueva interfaz que sea saludable porque reduce la fatiga visual cuando se utilice en largas jornadas y/o se utilice en altas horas de la  noche
 
### Password Manager
<img src="https://i.ibb.co/7y2bsPX/92634862-102476924766517-9215421927835828224-n.jpg" align="left" style="width: 80px; height: 80px;" />
Es una extension que permite el almacenamiento, recordatorio, escritura y lectura de claves con la finalidad que un usuario pueda acceder a las credenciales de sus diferentes cuentas, facilitando el acceso a su informacion de manera facil y segura, esta extension tiene como objetivo generar un conjunto de informacion personal para que el usuario pueda acceder a sus credenciales de manera flexible
</div>

## Tabla de Contenido 
- [Darkisit](#darkisit)
    + [Analisis y Diseño del plugin](#analisis_diseño)
    + [Arquitectura de la Extension](#arquitectura)
    + [Instalacion](#instalacion)
    + [Uso de la Extension](#ussage)
 - [passwordmanager](#passwordmanager)
 - [Creditos](#creditos)
 - [Licencia](#licencia)
<img src="https://i.ibb.co/J3Wqw3x/shine-1.png" align="right" />

# darkisit   <img src="https://img.shields.io/static/v1?label=Autor&message=Marlon+Prado&color=%23007ACC&logo=Visual+Studio+Code&logoColor=%23007ACC" alt="Google Chrome Extension" />

![Darksity en accion](https://s2.gifyu.com/images/Video-sin-titulo--Hecho-con-Clipchamp.gif)
> Darksity, mini - muestra de la ejecucion de la extension
## analisis_diseño

### Funcionalidades
Siendo una extension que soporta un cambio de colores a tonalidad mas agradable a la vista del usuario (Paleta de colores mas ocuras), tiene como objetivo beneficiar aquellos estudiantes que deseen ingresar a la plataforma Divisit, donde despues de ingresar sus credenciales, puedan acceder a la plataforma con un cambio de interfaz distinto, no obstante, para la correcta ejecucion de la extension es necesario tambien desarrollar ciertos criterios para velar el cumplimiento correcto de la extension, como lo es la resolucion de ciertas pantallas y/o temas como la compatibilidad, el anterior texto, no es mas sino un resumen de los actores, requerimientos funcionales y no funcionales del plugin de Darkisit, POR FAVOR CLICKEAR EL GIF DE AQUI ABAJO
![Funcionalidades del plugin](https://s2.gifyu.com/images/FUNCIONALIDADES.gif)
> Requerimientos funcionales y no funcionales del plugin Darkisit

### Actores
![Actores del Sistema](https://i.ibb.co/BLJ5dTW/dk-drawio-1.png)
> Actores del plugin

### Flujo de procesos de la extension
El desarrollo de cada unas de los procesos de la extension es comprensiblemente sencillo, a continuacion puedes visualizar un Diagrama de flujo animado que representa  
![Diagrama de Flujo](https://s2.gifyu.com/images/FUNCIONALIDADES-1.gif)
> Diagrama de Flujo de Darkisit, dar click a la imagen llegado el caso no se reproduzca

## Instalacion 

Para instalar mi extension tiene 2 caminos, la primera manera es descargando de manera directa el repositorio en formato .zip, para ello iremos al icono en color verde donde dice " Code" una vez clickeado ahi, se procede a descargar el repositorio usando la opcion 'Download Zip', una ilustraccion sencilla se evidencia a continuacion:
![Descarga Directa](https://i.ibb.co/sWQbpNB/1-click.png)
> Descarga directa del repositorio en formato ZIP

La otra manera de descargar el repositorio es a traves de una instancia de la consola de comando de git, si de casualidad no tienes git instalado, puedes decargarlo a traves del [siguiente enlace](https://git-scm.com/downloads). Una vez abierto y/o instalado y abierto una instancia del cmd, procederemos a ejecutar la siguiente linea de codigo:
</br>
<code>git clone https://github.com/KevinCarrero1417/Extensions.git</code>
</br>
Una vez clonado el repositorio, procederemos a instalar la extension, para ello en nuestro navegador chrome iremos a la siguiente URL
<code>chrome://extensions/</code>

Una vez abierto la interfaz de extensiones procederemos a importar la extension, una guia con mas detalles podras encontrar aqui abajo !

# ussage
La extension unicamente requiere aparte de su instalacion, solo acceder a la plataforma de [Divisit como estudiante](https://divisist2.ufps.edu.co/), te saldra una alerta en el navegador, con un mensaje de informacion de contacto, despues de clickear se activa dicha extension, aqui algunas capturas del desarrollo:
|                                                                                    IU de Darkisit                                                                                    |                                                                                   Mensaje de Bienvenida                                                                                   |                                                                                Post-Mensaje                                                                                |                                                                             Tema Aplicado                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://i.ibb.co/ry5X0Mv/1.png" title="Desktop App  Login " width="100%" crossorigin> | <img src="https://i.ibb.co/wJSWpSW/2.png" title="Mensaje Inicial" width="100%" crossorigin> | <img src="https://i.ibb.co/PN5tjFk/3.png" title="Post Mensaje" width="100%" crossorigin> | <img src="https://i.ibb.co/fQTj7fb/4.png" title="Tema Aplicado" width="100%" crossorigin> |

# arquitectura
<img src="https://s3.gifyu.com/images/developers-Conference.gif"  />
La Arquitectura de una extension se basa principalmente de 4 componentes
 - HTML
 - CSS
 - Javascript
 - manifest.json

Sin embargo, aunque la arquitectura defina la importancia de pop ups, actions y manejos de otras capas, es necesario entender que los 4 fundamentos anteriores son importantes, ya que son la base de diseño, creacion, desarrollo y ejecucion de una extension en Google Chrome
![arqui](https://sunnyzhou-1024.github.io/chrome-extension-docs/static/images/overview/contentscriptarc.png)
> Arquitectura de una extension en Google Chrome
### Manifest,json, caracteristicas e importancia
*Manifest.json es un fichero principal donde se detalla la informacion de la extension, los cuales son el Nombre de la extension, Descripcion de la extension, version de la extension y version del Manifiesto (Actualmente la version del manifiesto es 3)* 

### manifest
Manifiest.json no es un simple archivo de informacion en detalle, tambien abarca los permisos otorgados a la aplicacion, los iconos y logos de la extension, las acciones como la capacidad de inscrustar Javascript en la web, entre otras

Ademas, una extension aparte de su  manifest.json donde describe informacion detallada de la extension, tambien se destaca por disponer de una arquitectura donde genera una jerarquia de almacenamiento de los ficheros y/o contenido que forma parte de la extension.
![arqui](https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/Txq5CxeXjQz7i4wmP8zO.png?auto=format&w=439)
> Jerarquia de almacenamiento de ficheros de una Extension en Google Chrome

Finalmente, concluimos con la jerarquia del proyecto de Darkisit, a continuacion se evidencia la estructura del codigo fuente
![arqui](https://i.ibb.co/g47T03D/dk-drawio.png)
> Jerarquia de almacenamiento de ficheros de una Extension en Google Chrome
# passwordmanager
## Security Key (PasswordManager)
La extension de administracion de contraseñas "security key" Esta es una extension para navegadores basados en chromium que almacena las credenciales de inicio de sesion de las paginas que el usuario desee, y que mediante una unica contraseña podamos acceder a todas estas, con el proposito de poder utilizar contraseñas mejor elavoradas en nuestras otras cuentas, ya que por seguridad es mejor no utilizar las mismas credenciales en todas nuestras cuentas lo que trae como inconveniente el riesgo de olvidar algunas contraseñas. Mediante el uso de esta extension se busca utilizar una unica contraseña para poder tener acceso a las demas y no correr con el riesgo de olvidarlas.

Pasos para utilizar la extension
En este ejemplo se utilizara [Brave](https://brave.com/es/) como navegador, pero debe funcionar en cualquier navegador basado en [chromium](https://www.chromium.org/chromium-projects/)

1) Debemos acceder a la pestaña de extensiones del navegador.

 ![Como acceder a la seccion de extensiones del navegador](https://i.imgur.com/zuP1EpB.png)
 
2) Luego debemos activar el modo desarrollador y seleccionar la opcion cargar extension sin empaquetar.

 ![habilitar modo desarrollador y seleccionamos cargar extension sin empaquetar](https://i.imgur.com/4uP2VKp.png)
 
3) Buscamos la carpeta que tiene la extension y la seleccionamos.

 ![seleccionamos la carpeta que contiene la extension](https://i.imgur.com/cj3PU2Y.png)

4) Ahora debe aparecernos la extension que acabamos de seleccionar.

 ![Se observa como aparece la extension que acabamos de cargar](https://i.imgur.com/GCjLCu0.png)


### Contribucion
Si deseas contribuir a este proyecto, puedes hacer lo siguiente:

- Realizar pruebas de la aplicación y proporcionar retroalimentación.
- Reportar problemas o errores que encuentres en la aplicación.
- Contribuir al código de la aplicación mediante la creación de solicitudes de extracción.


### Creditos 

Agradezco de corazon todos los aporte de los siguientes repositorios con una breve descripcion de su aporte:
- [Fieu Awesone](https://github.com/matiassingers/awesome-readme/blob/master/readme.md) por la manera de organizacion de los elementos graficos como posicion, tamaño,etc.
- [Amplication Readme](https://github.com/amplication/amplication#readme) por la jerarquia y orden de titulos 1,2,3 y parrafos, que aportaron en la creacion de nuestra tabla de contenido
- [Closures Readme](https://github.com/vhesener/Closures#readme) por el diseño de codigo html, css, js y codigo de consola
- [Bridges Io Badges](https://ileriayo.github.io/markdown-badges/) por la creacion de bradges / etiquetas que fueron utilizadas en la portada del repositorio

### Licencia 
Este proyecto está bajo la licencia de Creative Commons, lbertad de acceso a cualquier publico este repositorio


