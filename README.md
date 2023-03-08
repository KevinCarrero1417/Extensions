<h1 align="center"><a href="https://www.producthunt.com/posts/awesome-github-profiles?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-github-profiles" target="_blank"><img src="https://i.ibb.co/W5F9Bwc/shine-200-44-px-1.png" alt="Awesome GitHub Profiles - Best curated list of developers readme, updated every 15 min | Product Hunt" style="width: 200px; height: 44px;" width="200" height="44" /></a>  Darkisit & Password Manager  <a href="https://www.producthunt.com/posts/awesome-github-profiles?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-github-profiles" target="_blank"><img src="https://i.ibb.co/VLK8rq0/shine-200-44-px-200-43-px.png" alt="Awesome GitHub Profiles - Best curated list of developers readme, updated every 15 min | Product Hunt" style="width: 200px; height: 44px;" width="200" height="44" /></a></h1>
<div align="center">
<img src="https://img.shields.io/badge/Design-Awesone-FC60A8?style=for-the-badge&logo=Awesome+Lists&logoColor=FC60A8" alt="Awesome Badge"/>
<img src="https://img.shields.io/badge/Autores-Marlon_%26_Kevin-2ea44f?style=for-the-badge&logo=Visual+Studio+Code" alt="Autores"/>
<img src="https://img.shields.io/badge/Extension-Google_Chrome-4285F4?style=for-the-badge&logo=Google+Chrome&logoColor=4285F4" alt="Google Chrome Extension" /> 
<img src="https://img.shields.io/badge/Licencia-Creative_Commons-EF9421?style=for-the-badge&logo=Creative+Commons&logoColor=EF9421" alt="Google Chrome Extension" />
<br>
</div>
<br>


Una extension es una herramienta que permite ampliar o extender las funcionalidades del navegador, las extensiones aportan a la automatizacion de ciertas tareas como puede ser validacion de formulario, descarga de contenido mutilmedia, bodega de contraseñas, entre otros... Otras extensiones aportan en mejorar la experiencia de usuario como puede ser bloqueador de anuncios, aumentar la cantidad de volumen permitido, bloquear cookies o pop ups molestos, etc
![alusion](https://www.hikeproject.com/wp-content/uploads/2021/12/google-chrome-extensions-977x4881-1.jpg)
> Las extensiones, herramientas que extienden funcionalidades
## Tabla de Contenido 
- [Extension en Google Chrome](#extension)
    + [¿Que significa una extension?](#significado)
    + [¿Que problema se desea aportar o solventar?](#problema)
- [Arquitectura de una Extension en Google Chrome](#arquitectura)
    + [Manifest.json](#manifest)
 




# extension
### significado 
Una extension es una herramienta que permite ampliar o extender las funcionalidades del navegador, las extensiones aportan a la automatizacion de ciertas tareas como puede ser validacion de formulario, descarga de contenido mutilmedia, bodega de contraseñas, entre otros... Otras extensiones aportan en mejorar la experiencia de usuario como puede ser bloqueador de anuncios, aumentar la cantidad de volumen permitido, bloquear cookies o pop ups molestos, etc


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





