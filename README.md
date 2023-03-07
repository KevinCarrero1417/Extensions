# :trident: : :sunglasses:
<h1 align="center">Darkisit & MySecurity</h1><h3 align="center">Dos extensiones interesantes para tu navegador
<h3 align="center">Dos extensiones interesantes para tu navegador
<div align="center">
<img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome Badge"/>
<a href="https://arbeitnow.com/?utm_source=awesome-github-profile-readme"><img src="https://img.shields.io/static/v1?label=&labelColor=505050&message=arbeitnow&color=%230076D6&style=flat&logo=google-chrome&logoColor=%230076D6" alt="website"/></a>
<!-- <img src="http://hits.dwyl.com/abhisheknaiidu/awesome-github-profile-readme.svg" alt="Hits Badge"/> -->
<img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Star Badge"/>
<a href="https://discord.gg/XTW52Kt"><img src="https://img.shields.io/discord/733027681184251937.svg?style=flat&label=Join%20Community&color=7289DA" alt="Join Community Badge"/></a>
<a href="https://twitter.com/abhisheknaiidu" ><img src="https://img.shields.io/twitter/follow/abhisheknaiidu.svg?style=social" /> </a>
<br>
</div>
_Bienvenido  a nuestro repositorio, Somos Marlon Prado y Kevin Castro, ¡ gusto saludar ! :floppy_disk:

:electric_plug:*Arquitectura de Software*  :memo:

## Tabla de Contenido 
![alusion](https://s3.gifyu.com/images/developers-Conference.gif)
- [Extension en Google Chrome](#extension)
    + [¿Que significa una extension?](#significado)
    + [¿Que problema se desea aportar o solventar?](#problema)

- [Arquitectura de una Extension en Google Chrome](#arquitectura)
    + [Manifest.json](#manifest)
 




# extension
### significado 
Una extension es una herramienta que permite ampliar o extender las funcionalidades del navegador, las extensiones aportan a la automatizacion de ciertas tareas como puede ser validacion de formulario, descarga de contenido mutilmedia, bodega de contraseñas, entre otros... Otras extensiones aportan en mejorar la experiencia de usuario como puede ser bloqueador de anuncios, aumentar la cantidad de volumen permitido, bloquear cookies o pop ups molestos, etc
![alusion](https://i.blogs.es/05b592/chrome/1366_2000.webp)
> Complementos de extensiones de Google Chrome

### problema

Una extension se desarrolla con la finalidad de promover, aportar o generar una herramienta que pueda ayudar o soportar al usuario final, durante el desarrollo de la actividad, cada miembro del Equipo desarollo una extension en base a diferentes puntos de vista y necesidades:

El compañero Kevin Castro, desarrollo una extension que permite el almacenamiento y recordatorio seguro de claves y/o contraseñas, con la finalidad que el usuario pueda acceder a sus credenciales y recordarlas de una manera mas facil, segura y amigable con el usuario final.

El compañero Marlon Prado, desarrollo una extension que permite el manejo de una paleta de colores oscura simulando un "Modo oscuro" para la plataforma Divisit, esta extension se activa automaticamente cuando se instala, permitiendo asi un modo oscuro que evita la fatiga o cansacio visual en altas horas de la noche
# arquitectura

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
# autores

* Marlon Stiven Prado
* Kevin Castro Carreño





