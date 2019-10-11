# Laboratorio 7 - ARSW
## Empezando
Se debe de clonar el proyecto, para esto utilizaremos el comando git clone. ubíquese la carpeta a guardar el proyecto y escriba el siguiente comando en la terminal:
 
 ### git clone https://github.com/diego2097/laboratorio6-arsw
Una vez clonado, ubicarse en la carpeta del proyecto. al ingresar podra ejecutarlo de forma inmediata mediante el comando. 
```
mvn exec:java -Dexec.mainClass="edu.eci.arsw.collabpaint.CollabPaintApplication.main"
```
## Prerrequisitos
Se debe tener instalados los siguientes programas en nuestro sistema operativo: 
- Maven
- Git
- Java
## Contenido 

### Primera parte 

Se agrego la funcion send para que los puntos ingresados por el usuario sean publicados en el topico /topic/newpoint

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/send.PNG "puntos")


Se llama esta funcion desde publishPoint para que cada vez que sea enviado un punto se publique en el topico. 

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/calling_send.PNG "puntos2")

En el modulo se modifico la funcion connectAndSubscribe para que se envie una alerta a todos los usuarios cada vez que un nuevo punto es agregado al topico /topic/newpoint

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/subscribe_topics.PNG "subscribe")

### Segunda parte 

Se agregro el callback en el parametro de la funcion connectAndSubscribe para que llame la funcion publishpoint cuando un punto es agregado, y esta funcion se encarga de pintar los puntos en todos los usuarios. 

![alt text](https://github.com/diego2097/laboratorio6-arsw/blob/master/img/pintar_punto.PNG "puntos3")


Se agrego la funcion initmouse y draw que son las encargadas de recibir los puntos clickeados y llamar a publishpoint para que los pinte. 

![alt text](https://github.com/diego2097/laboratorio6-arsw/blob/master/img/mouse.PNG "puntos4")