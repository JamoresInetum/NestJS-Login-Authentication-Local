La idea es crear un login sencillo usando datos predefinidos aquí.

Primero creo el users.service (nest g service users --no-spec).
En ese archivo hay mas información.

Todo servicio necesita su modulo para funcionar, asi que creo el modulo users (nest g module users --no-spec)

Y ahora pasamos a la chicha, creo el service auth y su módulo 
(
  service: nest g service auth --no-spec, 
  módulo: nest g module auth --no-spec
)

Para el módulo hacen falta dos cosas más: PassportModule y LocalStrategy

Para instalar PassportModule:
(
  npm install --save @nestjs/passport passport passport-local
  npm install --save-dev @types/passport-local
)

Para LocalStrategy toca crearlo manualmente, es una clase.

Por último queda configurar el app.controller.ts para que procese peticiones post

Despues de eso, ya estaría, solo queda probarlo.

Corremos el servidor con npm run start

Ya podemos enviar peticiones POST a traves del puerto 3000