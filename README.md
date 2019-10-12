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

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/pintar_punto.PNG "puntos3")


Se agrego la funcion initmouse y draw que son las encargadas de recibir los puntos clickeados y llamar a publishpoint para que los pinte. 

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/mouse.PNG "puntos4")

como podemos ver en la imagen al clickear en una instancia la otra se actualiza automaticamente

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/click1.PNG "puntos4")

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/click2.PNG "puntos4")

### Tercera parte 

Se agrego la funcion connect, la cual es accionada cual boton conectarse es oprimido. 

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/connect_function.PNG "function")

Tambien se agrego una variable id en app.js para registrar el id de cada dibujo y enviar este al respectivo topico. 

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/id_conexion.PNG "function2")

Se agrego el boton y el campo para registrar y modificar un dibujo. 

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/connect-html.PNG "function3")

Como se puede observar en la imagen siguiente, se accede a dos dibujos con ids 5 y 3, y cada uno es modificado por dos clientes al tiempo. 

modificando dibujo con id 5 

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/dibujo1.PNG "db1")

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/dibujo2.PNG "db1")

modificando dibujo con id 3

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/dibujo3.PNG "db1")

![alt text](https://github.com/diego2097/laboratorio7-arsw/blob/master/img/dibujo4.PNG "db1")










