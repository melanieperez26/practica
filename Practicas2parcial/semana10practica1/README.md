# Sistema de Gestión de alimentos (Banco de alimentos)

Este proyecto es un sistema de gestión de alimentos, tomado del proyecto autonomo Banco de alimentos que busca disminiur el desperdicio de alimentos en el pais.
Este es solo la parte de un modulo "Beneficiarios" de dicho sistema,desarrollado con NestJ, RestApi y TypeORM, se tomaron las siguientes entidades:

1. Organizacion
2. Inventario
3. Distribucion

## Características

- CRUD completo para cada módulo
- Integración con TypeORM para persistencia de datos
- Estructura modular basada en patrones de diseño NestJS
- Validación de datos mediante DTOs
- Servicios inyectables para manejo de lógica de negocio

## Estructura del Proyecto

El proyecto está organizado en módulos principales:

```
src/
├── distribucion/     # Módulo para gestión de distribuciones
├── inventario/      # Módulo para gestión de inventarios
└── organizacion/    # Módulo para gestión de organizaciones
```

## Instalación y dependencias

Para instalar las dependencias y crear el proyecto, se ejecutaron los siguiente comando:

```bash
$ npm i -g @nestjs/cli
$ nest new semana10practica1

```bash
$ npm install

``` 

## Depencias adicionales
Se instalan las dependencias adicionales para la base de datos en mi caso lo utilice con postgresql:

para postgresql
```bash
$ npm install --save @nestjs/typeorm typeorm pg
```
para mysql
```bash
$ npm install --save @nestjs/typeorm typeorm mysql2
```
Para realizar las validaciones con Pipes:

```bash
$ npm install --save class-validator class-transformer
```

## Ejecución

```bash
# Desarrollo
$ npm run start:dev

# Producción
$ npm run start:prod
```

## Tecnologías Utilizadas

- NestJS (Framework)
- TypeScript
- TypeORM (ORM)
- Node.js

## Requisitos

- Node.js 18+
- TypeScript
- PostgreSQL (o cualquier base de datos compatible con TypeORM)

# Evidencias
Evidencias del los endpoints de organizacion:
Get:
![alt text](<Captura de pantalla 2025-06-25 173533.png>)
Get/id:
![alt text](<Captura de pantalla 2025-06-25 173551.png>)
Post:
![alt text](<Captura de pantalla 2025-06-25 173822.png>)
Pacth:
![alt text](<Captura de pantalla 2025-06-25 173857.png>)
Delete: 
![alt text](<Captura de pantalla 2025-06-25 173924.png>)
![alt text](<Captura de pantalla 2025-06-25 173940.png>)

Evidencias del los endpoints de inventario:
Get:
![alt text](<Captura de pantalla 2025-06-25 174414.png>)
Get/id:
![alt text](<Captura de pantalla 2025-06-25 174436.png>)
Post:
![alt text](<Captura de pantalla 2025-06-25 174521.png>)
Pacth:
![alt text](<Captura de pantalla 2025-06-25 174548.png>)
Delete: 
![alt text](<Captura de pantalla 2025-06-25 175350.png>)
![alt text](<Captura de pantalla 2025-06-25 175403.png>) 

Evidencias del los endpoints de distribucion:
Get:
![alt text](<Captura de pantalla 2025-06-25 175025.png>)
Get/id:
![alt text](<Captura de pantalla 2025-06-25 175040.png>)
Post:
![alt text](<Captura de pantalla 2025-06-25 175150.png>)
Pacth:
![alt text](<Captura de pantalla 2025-06-25 175245.png>)
Delete:  
![alt text](<Captura de pantalla 2025-06-25 175257.png>)
![alt text](<Captura de pantalla 2025-06-25 175310.png>)


## Documentación

Para más información sobre el desarrollo y estructura del proyecto, revisa la documentación oficial de NestJS:

- [NestJS Documentation](https://docs.nestjs.com)
- [TypeORM Documentation](https://typeorm.io)
