![alt text]
# Code Challenge - Andrés Barros Rivas

## Sumario
Instalación y Configuracion de una instancia en AWS como server nodejs para una api, utilizando un [swagger](https://s3-eu-west-1.amazonaws.com/mmi-codechallenge/swagger-users-v1.json)

La api obedece peticiones GET, POST, PUT, DELETE

```
https://andresbr92.github.io/#/
```


## Recursos y Herramientas
*  EC2 AWS
*  Launch configuration AWS
*  Auto scaling group AWS
*  Postman


## Deployed
Se configuro y personalizo una Ami con ubuntu 20.04, nodejs, npm, para luego ser utilizada como plantilla al Launch Configuration. El autoescalado inicialmente parte con una instancia t2.micro en la region de París. Auto scaling group esta configurado con un minimo 1 instacia y máximo 3, al sobrepasar el 10 % de uso del CPU lanza una segunda instancia y al decrementase elimina la mas nueva conservando la original.


Peticiones de la api:
```
http://ec2-15-237-58-46.eu-west-3.compute.amazonaws.com:4000/users/getusers
http://ec2-15-237-58-46.eu-west-3.compute.amazonaws.com:4000/users/createUsers
http://ec2-15-237-58-46.eu-west-3.compute.amazonaws.com:4000/users/getusersById/0
http://ec2-15-237-58-46.eu-west-3.compute.amazonaws.com:4000/users/updateUsersById/0
http://ec2-15-237-58-46.eu-west-3.compute.amazonaws.com:4000/users/deleteUsersById/1

```

Las peticiones GET, POST, PUT, DELETE se pueden apreciar mejor con un collection en [Postman](https://github.com/andresbr92/codeChallenge/tree/master/postman/deployed_env)

Actualmente me estoy documentando en AWS y faltan algunas cosas por pulir, como generar un test de estrés para autoescalar la app con otra instancia.


## Testing

Se han añadido 4 test de ejemplo para comprobar los datos generados por la api a falta de investigar y profundizar más en el testeo de apis mediante jest-supertest. 



