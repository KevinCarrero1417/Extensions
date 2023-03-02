# :trident: Creacion de Extension en Google Chrome :sunglasses:
_Bienvenido  a nuestro repositorio, Somos Marlon Prado y Kevin Castro, ¡ gusto saludar ! :floppy_disk:

:electric_plug:*Arquitectura de Software*  :memo:

## Tabla de Contenido 
![alusion](https://s3.gifyu.com/images/developers-Conference.gif)
- [Extension en Google Chrome](#extension)
    + [¿Que significa una extension?](#significado)
    + [¿Que problema se desea aportar o solventar?](#problema)

- [Arquitectura de una Extension en Google Chrome](#arquitectura)
    + [Descripcion de la Solucion](#explicacion)
    + [Analisis de la Complejidad](#analisis)
    
- [Pruebas del Algoritmo](#pruebas)
    + [herramientas de desarrollo](#herramientas)
    + [Net Beans IDE](#netbeans)
    + [Java JDK](#jdk)
    - [Estructura de las Pruebas](#estructura)
        + [Clase Main](#mainjava)
        + [Clase Prueba](#pruebajava)
        + [Clase Solucion](#solucionjava)
- [Autores](#autores)



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
![arqui](https://sunnyzhou-1024.github.io/chrome-extension-docs/static/images/overview/contentscriptarc.png)
> Arquitectura de una extension en Google Chrome
### explicacion
*" El algoritmo propuesto para el ejercicio se basa en hacer un intercambio de números pares por números impares, por lo que se decidió usar 2 variables. Ambas son variables de tipo “Integer”, donde una se llama aux, la cual tiene la función de apuntador, donde este siempre comenzará en el inicio del arreglo. La otra variable es llamada “tmp”, la cual servirá para poder almacenar el valor de la posición “i” del arreglo, para que de esta manera se pueda realizar el cambio de valores. 
Como se ha mencionado anteriormente, lo que busca el ejercicio es ordenar el arreglo 
donde los pares estén primeros que los impares, por lo que no importa si estos en sí están ordenados de menor a mayor  o viceversa. Por lo que no importa que el intercambio anteriormente mencionado sea entre un número par por otro número par, ya que de igual manera la variable auxiliar estará iterando el arreglo con ayuda del ciclo for.* 

### analisis
*Ahora bien, si hacemos un análisis del código, está señalizado en la imagen adjunta anterior, podemos darnos cuenta que la función matemática que la describe es:
8n+4, lo que significa que su complejidad algorítmica es O(n). 
Podemos decir que no tiene un costo algorítmico alto, debido a que es una función lineal, se puede decir que es una complejidad aceptable para este ejercicio.
*  
![complejidad](https://i.ibb.co/4fQn2PR/image.png)
> Analisis de la Complejidad, una complejidad lineal para el peor de los casos

# pruebas
Las pruebas del algoritmo se basa en la *escritura* y *lectura* de 2 ficheros especificos, **pruebas.txt** & **resultados.txt**, ademas, la aplicacion fue desarrollado en el lenguaje de Programacion Java, por ende, es necesario que tengas instalado las siguientes herramientas/frameworks o librerias:

<img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" width="74" height="64" >
> Algoritmo y Pruebas desarrollados en Lenguaje de Programacion java

## herramientas
### netbeans
* Descarga Net Beans desde la [pagina oficial](https://netbeans.apache.org/download/index.html) <img src="http://www.davidtan.org/wp-content/uploads/2009/12/netbeans-ide-logo-icon.png" width="74" height="64" >
### jdk
* Descarga Java JDK desde  [aqui](https://www.java.com/es/download/help/develop_es.html) <img src="https://miro.medium.com/max/785/1*7fDw5W4a5WxJY9wQIgzNLQ.jpeg" width="74" height="64" >

# estructura
Las pruebas se basan en **3 clases principales**: *Main*, *Prueba* y *Solucion.java*

![estructura](https://i.ibb.co/CvGvVrt/image.png)
> Estructura del Proyecto
### mainjava 
Esta clase principal, invoca los metodos de Pruebas.java, estos metodos consisten en la generacion, creacion e impresion de los casos de prueba

### pruebajava
Esta clase es el corazon de la aplicacion, posee 4 metodos que permite:
* Crear un archivo de texto vacio para almacenar el conjunto de casos de prueba
* Escribir sobre el fichero recien creado y almacenar con datos aleatorios
* Generar un conjunto de numero aleatorios a traves de una petcion o llamado al metodo Math.Random();
* Leer los casos d epruebas generados, imprimir en consola la respuesta y anexar dichas respuestas en un nuevo archivo de texto, llamado "respuestas.txt"
### solucionjava
Esta clase abarca unicamente el algoritmo de ordenamiento por paridad, usado solamente para la evaluacion de los casos de prueba

# autores

* Marlon Stiven Prado
* Kevin Castro Carreño





