# **Gestión De La Configuración**

## **Calculator**

Esta es la guía que necesitas seguir para poder clonar o copiar el código que está él en repositorio de GitHub y tenerlo en tu máquina, así podrás ejecutar y probar nuestra ***Calculator*** en la página web que desees.

## **Pasos a seguir para clonar y ejecutar el código que se encuentra en el GitHub**

### **Lista de títulos**
* [Npm](#NPM)
* [Node.js](#Node.js)
* [Instalación de Node.js](#Instalación-de-Node.js)
* [Git](#Git)
* [Instalación de Git](#Instalación-de-Git)
* [Clonar un repositorio](#Clonar-un-repositorio)
* [Entrar a las ramas del repositorio](#Entrar-a-las-ramas-del-repositorio)
* [Instalar las dependencias del proyecto y la ejecución del proyecto](#Instalar-las-dependencias-del-proyecto-y-la-ejecución-del-proyecto)


> **Nota:** Estos pasos van a estar detallados al mínimo para que no te pierdas en ningún paso (Puede haber algunas excepciones).

> **Nota:** Después de terminar de copiar los comandos, darás **Enter** para que se ejecute.

## **NPM**

> NPM se puede considerar como las siglas de Node Package Manager, es decir, gestor de paquetes de Node.js, un entorno de ejecución multiplataforma para ejecutar JavaScript no solo en un navegador web (como se concibió originalmente) sino fuera de él, y poder utilizarlo en sistemas de escritorio o servidores web.

## **Node.js**

Vamos a verificar si el paquete **Node.js** está instalado en nuestro sistema.

1. En tu **PC** o **Laptop** presiona las siguientes teclas: La tecla **Windows** + **R**, al presionar esas teclas te aparecerá una ventana en la parte inferior izquierda de tu pantalla, similar a esta.

> ![Foto](https://drive.google.com/uc?id=15JCC8EMJpW_m7vCkBHWp3Q-LV_JEwhiG)

2. Cuando ya tengas esa ventana abierta, ahora escribe el comando **cmd** el cual te abrirá una terminal o consola del sistema, parecida a esta.

> ![Foto](https://drive.google.com/uc?id=1ZspQ3oWK96vOfTtbVjxfNqwxUUe5JHzL)

3. Ahora lo que tienes que hacer es escribir el siguiente comando en la terminal: `node -v`, al momento de ejecutar este comando te debe de aparecer unos números en la siguiente línea, parecido a estos (Pueden ser distintos dependiendo del momento en el que esté aplicando estos pasos), esa es la versión de **Node.js** que se tiene instalada.

> ![Foto](https://drive.google.com/uc?id=1Q3dolKpFqNWPdZcrH1jIXQBuygFL8zOf)

> Si no es así y te manda un error, eso quiere decir que no tienes instalado el paquete **Node.js** en tu sistema. Por lo que ahora vamos a instalar **Node.js** en tu sistema.

> **Nota:** Si ya tienes instalado **Node.js** en tu sistema, puedes saltarte estos pasos para su instalación.

### **Instalación de Node.js**

> **Nota:** Node.js es un entorno de ejecución de código abierto construido sobre el motor de JavaScript V8 de Google Chrome. Permite ejecutar código JavaScript fuera del navegador web, en el lado del servidor. A diferencia de la mayoría de las implementaciones de JavaScript, que se ejecutan en el navegador para crear interacciones dinámicas en sitios web, Node.js se enfoca en la ejecución de código en el servidor para crear aplicaciones web y servicios.

1. Puedes ingresar al siguiente enlace [Node.js](https://nodejs.org/en), el cual te llevara a la página oficial del paquete.

> ![Foto](https://drive.google.com/uc?id=1KqhjOLe5tXJg6ablqr8GRCbeLfWwL01x)

2. Ahora te diriges a la zona de descargas, como muestra la siguiente imagen.

> ![Foto](https://drive.google.com/uc?id=1-_ZcOacZBHHSi36h5bh5j1XlOgLbjFnq)

3. Cuando ya estés ahí, elige la descarga dependiendo del **Sistema Operativo** que tengas.

> ![Foto](https://drive.google.com/uc?id=1PW66xN9MoQOS4EQPzxoZRvVg0E-RcXj8)

> **Nota:** en nuestro caso, descargaremos la versión para **Windows**.

4. Cuando el archivo termine su descarga, ahora ya podrás instalarlo. La instalación es relativamente sencilla, solo debes de dar **siguiente**, marcas las casillas y a final es posible que te mande una ventana emergente que te pida autorización de conectarse a una red pública.

> **Nota:** Después de que tengas instalado el programa en tú máquina, podemos seguir. Si deseas puedes repetir los pasos anteriores (1, 2, 3 en la parte de **Node.js**) para verificar si **Node.js** ya está disponible.

## **Git**

Vamos a verificar si **Git** se encuentra instalado en tú máquina al igual que **Node.js**.

1. En tu **PC** o **Laptop** presiona las siguientes teclas: La tecla **Windows** + **R**, al presionar esas teclas te aparecerá una ventana en la parte inferior izquierda de tu pantalla, similar a esta.

> ![Foto](https://drive.google.com/uc?id=15JCC8EMJpW_m7vCkBHWp3Q-LV_JEwhiG)

2. Cuando ya tengas esa ventana abierta, ahora escribe el comando `cmd` el cual te abrirá una terminal o consola del sistema, parecida a esta.

> ![Foto](https://drive.google.com/uc?id=1ZspQ3oWK96vOfTtbVjxfNqwxUUe5JHzL)

3. Ahora en la terminal escribes `git --version` y te debe de aparecer la versión actual que tengas instalado, como se muestra a continuación.

> ![Foto](https://drive.google.com/uc?id=1jVF9esI4lTxhBYcRM8jTT3GS6f50Mzq5)

> Si no es el caso y te aparece un mensaje de error que puede decir que no tienes instalado el **Git**, bueno ahora lo instalaremos.

### **Instalación de Git**

> **Nota:** Git es un sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software y en la gestión de proyectos colaborativos. Fue creado por Linus Torvalds en 2005 para administrar el desarrollo del kernel de Linux, pero desde entonces se ha convertido en una herramienta esencial en la industria del software.

1. Puedes ingresar al siguiente enlace [Git](https://git-scm.com/) , él te llevará a la página oficial de **Git**.

> ![Foto](https://drive.google.com/uc?id=1OZd0yx6vldOm07wV2BD1xHEkVgBBjCic)

2. Ahora te diriges a la zona de descargas, como se muestra en la siguiente imagen.

> ![Foto](https://drive.google.com/uc?id=1Zd3EOggavTuEIEjIWg0sDD7fXwBNIAvt)

3. Cuando estés ahí en la zona de descargas, descargas la versión para el **Sistema Operativo** de tu sistema.

> ![Foto](https://drive.google.com/uc?id=1dnYFQkNndv9JDw53BQqJi07GTBhoF0K6)

> Y si de casualidad no sabes que **Sistema Operativo** tienes, la misma página te indica cuál es tu **SO**, y puedes darle ahí donde está la pantalla azul al lado derecho superior, como indica la siguiente imagen.

> ![Foto](https://drive.google.com/uc?id=1Q_ur3lPtiBCq0hvVblTkdB3M-eZwYQ15)

> Cuando le hayas dado, te mandara a esta siguiente página, en la cual debes de presionar el enlace que se marca en la siguiente imagen.

> ![Foto](https://drive.google.com/uc?id=1vj1_SwgyHtfIOT0m-m7KAXxtl8qXOnfY)

4. Cuando el archivo termine su descarga, ahora ya podrás instalarlo. La instalación es relativamente sencilla, solo debes de dar **siguiente** y marcas las casillas.

> **Nota:** Después de que tengas instalado el programa en tú máquina, podemos seguir. Si deseas puedes repetir los pasos anteriores (1, 2, 3 en la parte de **Git**) para verificar si **Git** ya está disponible.

### **Clonar un repositorio**

1. Antes de todo, tienes que primero crear la carpeta en la cual vas a **clonar** el código fuente de la aplicación web.

> Entonces, en la misma terminal escribes el siguiente comando: `start explorer` este comando sirve para abrir el explorador de archivos. Debería de quedarte así.

> ![Foto](https://drive.google.com/uc?id=10o7cDmfot2oI9Ko-_hxMwec8qFwxwP87)

> Cuando ya estés en la carpeta, puedes crear la carpeta donde quieras, pero nosotros lo haremos en la **Carpeta** principal de **Documentos**.

> Entonces, das clic derecho, te diriges a donde dice **Nuevo** y luego eliges la **Carpeta**, para que se cree.

> ![Foto](https://drive.google.com/uc?id=1g0Bq_Udm-YjtCqNEzOquHLEtSVXseldd)

> A la carpeta le puedes dar el nombre que quieras, nosotros le pondremos **Clon**.

> ![Foto](https://drive.google.com/uc?id=17CUxb903BKnh0Bq--6bcnkldNlIvX1db)

> Ahora te metes a la carpeta y seguiremos con los demás pasos.

2. Para poder clonar el **Código Fuente** tenemos que abrir una terminal desde la carpeta en la que estamos.

> Entonces, abrimos la carpeta que creamos antes, damos clic derecho, damos donde dice más opciones.

> ![Foto](https://drive.google.com/uc?id=1k0N9GyusL4uCkrXIIQdYu7prgBKeiy0j)

> Ahora le damos donde dice **Abrir Terminal**.

> ![Foto](https://drive.google.com/uc?id=1TerQ5FWXL_w3Fl0ifFlpfXtsQgd_rDsg)

> Y se abrirá una terminal, la cual estará ubicada en la carpeta. Nos podemos dar cuenta de eso si miramos acá.

> ![Foto](https://drive.google.com/uc?id=1c3DzO6_cbwEN6OPFyLAWSGqm6rKOgf1m)

> Están señalados, la carpeta **Documentos** y la carpeta **Clon** que es la carpeta donde guardaremos el código.

> Repetimos este proceso otra vez, para poder tener dos terminales abiertas, más adelante usaremos la otra.

3. Lo siguiente será copiar la *URL* del **Repositorio** que será clonado.

> Cuando este ya en el **repositorio** harás lo siguiente.

> Llega hasta arriba del repositorio dandole aquí [Inicio](#Calculator) y darás clic en el botón verde que dice **Code**.

> ![Foto](https://drive.google.com/uc?id=1gKPa1zUG5UjIe3EoSAZsTW_xQlzJ-3nQ)

> Cuando le hayas dado te saldrá lo siguiente.

> ![Foto](https://drive.google.com/uc?id=1MAVwVSm7L-POiJLT8mhYyKhl2DUt0Cvt)

> Y le darás al botón que se está señalando, cuando le des se te copiara el enlace al portapapeles.

4. Ahora, vamos a pegar el código en la **terminal**, pero antes debemos de poner `git clone` que sirve para poder clonar el **repositorio** y nos quedaría de la siguiente forma.

> ![Foto](https://drive.google.com/uc?id=1TW6g4T4egMHHwnqPfI-WNF7zzH1gjZGL)

> Después de haber clonado el repositorio, debería de quedarte de la siguiente manera (La estructura, no importan los números, porque pueden cambiar).

> ![Foto](https://drive.google.com/uc?id=1uPaFNhs8l2X4oFvw5GJyk1L8XpN_ombF)

> Eso indica que el repositorio fue clonado exitosamente.

> **Nota:** Puedes usar el comando `clear`, para poder limpiar la pantalla.

5. Ahora, lo que haremos será entrar a la carpeta del **Código** que fue clonado. Para eso usaremos los siguientes comandos.

> **Nota:** `dir` Lo que hace es listar todos los elementos que hallan en la carpeta en la que estás actualmente.

> **Nota:** `cd` más **Ruta del directorio** Lo que hace **cd** es llevarte a el directorio que hallas elegido, pero para poder elegir el directorio y el directorio es el nombre del **Repositorio** que has clonado. También puedes presionar **Tabulador** y él te escribirá ese nombre ahí.

> Entonces si haces todo bien, ya deberías de estar en la carpeta del código clonado.

### **Entrar a las ramas del repositorio**

> Lo que realizaremos en este paso, será como cambiar de **rama**, eso quiere decir, que nos moveremos de zona de trabajo a la zona en la cual está el código del **proyecto**.

1. Lo que tienes que hacer acá es verificar en que **rama** te encuentras. Para hacer eso lo que tenemos que hacer es de ejecutar el siguiente comando en la terminal.

> `git branch` Al momento de ejecutar eso, te deberá de aparecer la **rama** [** main*], el * quiere decir que estas en esa rama actualmente.

> Debería verse así:

> ![Foto](https://drive.google.com/uc?id=1oxOtDKf4NKHzdPNg9WwPwvRap-yDaIP2)

2. Ahora, haremos el cambio de la rama **main** a la rama **Sebatian_Vanegas_Garzon-Carlos_Mario_Lopez_Pestana**, entonces para poder hacer ese cambio debemos de escribir o copiar el siguiente comando.

> `git checkout Sebatian_Vanegas_Garzon-Carlos_Mario_Lopez_Pestana` Al ejecutar este comando, lo que hará es cambiarnos de la **rama** [*main*] a la **rama** [*Sebatian_Vanegas_Garzon-Carlos_Mario_Lopez_Pestana*] y extraerá los archivos que están en esa **rama** [*Sebatian_Vanegas_Garzon-Carlos_Mario_Lopez_Pestana*] y debería de verse así.

> ![Foto](https://drive.google.com/uc?id=1SQJJuGgD2-hTpf9qMNFxub_LEh2BVTst)

> Puedes verificar que te has cambiado de **rama** ejecutando el comando `dir` y te mostrara los nuevos archivos que han sido agregados por el cambio de **rama**.

> Entonces, si no te manda algún error quiere decir que te has cambiado de **rama** de forma exitosa.

### **Instalar las dependencias del proyecto y la ejecución del proyecto**

En estos pasos es donde vamos a usar las dos terminales, una para el **BackEnd** y la otra para el **FrontEnd**.

> Ahora lo que haremos será entrar a la carpeta donde se encuentra todo el código fuente.

1. Lo que haremos será ejecutar el comando `cd code` lo cual te llevara a la carpeta donde se encuentra todo el código fuente del programa.

> ![Foto](https://drive.google.com/uc?id=1tq0QlrJkc6qqIoaHYbFI5Qtp7ZcHVBZb)

2. Cuando ya estés ahí, lo siguiente será ejecutar este comando en la terminal.

> `npm install` o `npm i` Lo que hará este comando será buscar el archivo **package.json** a instalar todas las dependencias que aparezcan es ese archivo y si ya tienes algunas solo las actualizara si es necesario.

> ![Foto](https://drive.google.com/uc?id=1ZHEsVEEF7ZbbBWgepVGIfc8sWPxh-bkL)

3. Para ahorrar unos pasos, lo que haremos será escribir el siguiente comando `npm run dev`, lo que hará será correr nuestro servidor **BackEnd**.

> ![Foto](https://drive.google.com/uc?id=1ZnWdMRrDvTIJ3857FNZ80Xzp7y4pxbKi)

4. Ahora, nos pasamos a la otra terminar y ejecutamos el siguiente comando.  

> `cd client` que nos llevara hasta la carpeta donde está el código fuente del **FrontEnd**.

> ![Foto](https://drive.google.com/uc?id=1JB2jCbCFS8Op9qxfDYyAuvVswfU8B7Ut)

5. Cuando ya estés ahí, lo siguiente será ejecutar este comando en la terminal.

> `npm install` o `npm i` Lo que hará este comando será buscar el archivo **package.json** a instalar todas las dependencias que aparezcan es ese archivo y si ya tienes algunas solo las actualizara si es necesario.

> ![Foto](https://drive.google.com/uc?id=1vEdQN9QWiXqBlR2_9UAINVc-QU2I6h7w)

5. Ahora, ejecutamos el siguiente comando `npm run dev`, pero este va en la carpeta **client**, a la cual acabamos de acceder.

> ![Foto](https://drive.google.com/uc?id=1N3YxZMj_oRE5Z3OFxFcKqHpHocbnx7iq)

6. Ahora cuando ya tengas ejecutado el **BackEnd** y el **FrontEnd** ejecutándose.

> Darás al botón **Ctrl** más **clic derecho sobre este enlace** que está siendo señalado.

> ![Foto](https://drive.google.com/uc?id=15wDfQRzlb6zsfLrVmz4AqpxUafdUvo2P)

> Y ese enlace te mandará a la **Página** de la **Calculadora**.

> Entonces puedes **registrarte** e **iniciar sesión** y ya con eso puedes disfrutar de nuestra **Calculadora**.
