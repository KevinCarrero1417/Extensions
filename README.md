# :trident: Creacion de Extension en Google Chrome :sunglasses:
_Bienvenido  a nuestro repositorio, Somos Marlon Prado y Kevin Castro, ¡ gusto saludar ! :floppy_disk:

:electric_plug:*Arquitectura de Software*  :memo:

## Tabla de Contenido 
![alusion](https://s3.gifyu.com/images/developers-Conference.gif)
- [Extension en Google Chrome](#extension)
    + [¿Que significa una extension?](#significado)
    + [¿Que problema se desea aportar o solventar?](#problema)

- [Arquitectura de una Extension en Google Chrome](#arquitectura)
 




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


Manifiest.json no es un simple archivo de informacion en detalle, tambien abarca los permisos otorgados a la aplicacion, los iconos y logos de la extension, las acciones como la capacidad de inscrustar Javascript en la web, entre otras

# autores

* Marlon Stiven Prado
* Kevin Castro Carreño





