# Sistema de Gestión del proyecto autonomo modulo beneficiarios Entidades:Organizaciones, Distribuciones e Inventarios

Este sistema es parte del proyecto autonomo Beneficiarios, el cual tiene como objetivo gestionar las organizaciones, distribuciones e inventarios de los mismos. La prctica consiste en crear una API con GraphQL y NestJS que sea funcional.

## Estructura del Proyecto

El proyecto está organizado en los siguientes entidades:

### 1. Organizaciones
- Gestión de organizaciones/empresas
- CRUD completo (Crear, Leer, Actualizar, Eliminar)
- Uso de UUID como identificador único

### 2. Distribuciones
- Sistema de distribución de productos
- CRUD completo

### 3. Inventarios
- Gestión de inventario de productos
- Campos principales:
  - ID (UUID)
  - ID de organización (number)
  - Producto (string)
  - Cantidad (number)

## Tecnologías Utilizadas

- NestJS como framework principal
- TypeORM para el manejo de la base de datos
- GraphQL como API
- TypeScript para desarrollo
- SQLite como base de datos

## Características Principales

- Arquitectura modular
- Uso de UUIDs para identificadores únicos
- Manejo de errores consistente
- Creacion de API con GraphQL
- CRUD completo para cada módulo

## Instalación y Ejecución

1. Instalar dependencias:
```bash
npm i -g @nestjs/cli
npm install
npm install @nestjs/typeorm typeorm sqlite3 // para la base de datos
npm install @nestjs/graphql @nestjs/apollo apollo-server-express graphql // para la API
npm install class-transformer class-validator // para la validacion
npm install @nestjs/config // para la configuracion

```

2. Ejecutar en modo desarrollo:
```bash
npm run start:dev
```

3. Acceder a la API GraphQL en:
```
http://localhost:3000/graphql
```

## Notas Técnicas

- El proyecto utiliza Apollo Server para GraphQL
- La base de datos está configurada con TypeORM
- Se implementa un manejo de errores consistente en todos los servicios
- Las entidades están decoradas con @ObjectType para GraphQL

## Pruebas

Se han realizado pruebas para cada una de las entidades, creando, leyendo, actualizando y eliminando datos.

Organizaciones:
Para leer todas las organizaciones:
![alt text](<Captura de pantalla 2025-07-02 163447.png>)
para crear una organizacion:
![alt text](<Captura de pantalla 2025-07-02 163847.png>) 
para leer una organizacion:
![alt text](<Captura de pantalla 2025-07-02 164715.png>) 
para actualizar una organizacion:
![alt text](<Captura de pantalla 2025-07-02 165207.png>) 
para eliminar una organizacion:
![alt text](<Captura de pantalla 2025-07-02 170327.png>)  


Distribuciones:
para leer todas las distribuciones:
![alt text](<Captura de pantalla 2025-07-02 180332.png>)
para crear una distribucion:
![alt text](<Captura de pantalla 2025-07-02 180452.png>)
para leer una distribucion:
![alt text](<Captura de pantalla 2025-07-02 182456.png>)
para actualizar una distribucion:
![alt text](<Captura de pantalla 2025-07-02 180659.png>)
para eliminar una distribucion:
![alt text](<Captura de pantalla 2025-07-02 180324.png>)

Inventarios:
para leer todas los inventarios:
![alt text](<Captura de pantalla 2025-07-02 181816.png>)
para crear un inventario:
![alt text](<Captura de pantalla 2025-07-02 181941.png>)
para leer un inventario:
![alt text](<Captura de pantalla 2025-07-02 182121.png>)
para actualizar un inventario:
![alt text](<Captura de pantalla 2025-07-02 182045.png>)
para eliminar un inventario:
![alt text](<Captura de pantalla 2025-07-02 182158.png>)

# Para clonar el repositorio de pruebas
```bash
git clone https://github.com/melanieperez26/practica.git
```


# Documentacion
Informacion sacada y con ayuda de la pagina oficial de NestJS y TypeORM https://docs.nestjs.com/

