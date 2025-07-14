

## Sistema de Gestión de Distribuciones y Inventarios

Sistema desarrollado con NestJS que gestiona organizaciones, distribuciones e inventarios.Entidades tomadas del proyecto autonoma. Implementacion de WebSockets para la comunicacion en tiempo real.

## Entidades

- Organizaciones
- Distribuciones
- Inventarios

## Funcionalidades

- Gestionar organizaciones
- Administrar distribuciones
- Controlar inventarios
- Comunicación en tiempo real mediante WebSockets

## Configuración y Ejecución

### Requisitos
- Node.js
- npm

### Instalación
```bash
$ npm install
```

### Base de Datos
La aplicación utiliza SQLite como base de datos. La base de datos se crea automáticamente en `prueba_db`.

### Ejecución
```bash
# Desarrollo
$ npm run start

# Modo desarrollo con hot-reload
$ npm run start:dev

# Producción
$ npm run start:prod
```

## Estructura del Proyecto

El proyecto está organizado en tres módulos principales:

- `OrganizacionesModule`: Gestión de organizaciones
- `DistribucionesModule`: Manejo de distribuciones
- `InventariosModule`: Control de inventarios

Cada módulo implementa:
- Servicios para la lógica de negocio
- Entidades para el mapeo de datos
- Gateways para la comunicación en tiempo real
- Controladores para las rutas HTTP

## Características Principales

- Arquitectura modular con NestJS
- Base de datos SQLite
- Comunicación en tiempo real con WebSockets
- Validación de datos
- CRUD completo para organizaciones, distribuciones e inventarios
## Dependencias
- @nestjs/common
- @nestjs/platform-socket.io
- @nestjs/typeorm
- class-transformer
- class-validator
- socket.io
- sqlite3
- typeorm

```bash
# para instalar websockets
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io

# para instalar socket.io
$ npm i --save socket.io

# para instalar sqlite3
npm install --save @nestjs/typeorm typeorm sqlite3

# para instalar typeorm
npm install --save typeorm sqlite3

# para instalar class-transformer y class-validator
npm install --save class-transformer class-validator
```


## Instrucciones de eventos
Abre una pestaña en Postman y selecciona la pestaña de WebSockets. Coloca la url http://localhost:3000 en la barra de direcciones. Esa sera para crear las organizaciones, distribuciones e inventarios.

Abre una pestaña en Postman y selecciona la pestaña de WebSockets. Coloca la url http://localhost:3000 en la barra de direcciones. Esa sera la pestaña que estara abierta para recibir los eventos de la aplicacion.

- createOrganizacion: Crea una nueva organizacion
- findAllOrganizacion: Obtiene todas las organizaciones
- findOneOrganizacion: Obtiene una organizacion por su ID
- updateOrganizacion: Actualiza una organizacion
- removeOrganizacion: Elimina una organizacion

- createDistribucion: Crea una nueva distribucion
- findAllDistribucion: Obtiene todas las distribuciones
- findOneDistribucion: Obtiene una distribucion por su ID
- updateDistribucion: Actualiza una distribucion
- removeDistribucion: Elimina una distribucion

- createInventario: Crea un nuevo inventario
- findAllInventario: Obtiene todos los inventarios
- findOneInventario: Obtiene un inventario por su ID
- updateInventario: Actualiza un inventario
- removeInventario: Elimina un inventario


## Evidencia de la aplicacion

Organizaciones
Crear:  ![alt text](<Captura de pantalla 2025-07-14 164354.png>)
Evento: ![alt text](<Captura de pantalla 2025-07-14 164405.png>)

Actualizar: ![alt text](<Captura de pantalla 2025-07-14 165235.png>)
Evento: ![alt text](<Captura de pantalla 2025-07-14 170945.png>) 

Eliminar: ![alt text](<Captura de pantalla 2025-07-14 164416.png>)
Evento: ![alt text](<Captura de pantalla 2025-07-14 164420.png>)


Inventarios
Crear: ![alt text](<Captura de pantalla 2025-07-14 170847.png>) 
Evento: ![alt text](<Captura de pantalla 2025-07-14 170839.png>)

Actualizar:  ![alt text](<Captura de pantalla 2025-07-14 172140.png>)
Evento:![alt text](<Captura de pantalla 2025-07-14 172153.png>) 

Eliminar: ![alt text](<Captura de pantalla 2025-07-14 172310.png>) 
Evento: ![alt text](<Captura de pantalla 2025-07-14 172319.png>)

Distribuciones
Crear: ![alt text](<Captura de pantalla 2025-07-14 172803.png>)
Evento: ![alt text](<Captura de pantalla 2025-07-14 172817.png>) 

Actualizar: ![alt text](<Captura de pantalla 2025-07-14 173029.png>)
Evento: ![alt text](<Captura de pantalla 2025-07-14 173040.png>)

Eliminar: ![alt text](<Captura de pantalla 2025-07-14 173109.png>)
Evento: ![alt text](<Captura de pantalla 2025-07-14 173122.png>)


## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
