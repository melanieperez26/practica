# Arquitectura Limpia - Todo API

Implementación de una API REST con arquitectura limpia que soporta múltiples tipos de datasource:
- **Prisma** (PostgreSQL)
- **TypeORM** (PostgreSQL)
- **Memory** (Arreglos de objetos literales en memoria)

## Características

### Arquitectura Limpia
- **Domain Layer**: Entidades, casos de uso, repositorios e interfaces
- **Infrastructure Layer**: Implementaciones de datasources y repositorios
- **Presentation Layer**: Controladores y rutas

### Datasources Disponibles
1. **Prisma**: Base de datos PostgreSQL con ORM Prisma
2. **TypeORM**: Base de datos PostgreSQL con TypeORM
3. **Memory**: Almacenamiento en memoria con arreglos de objetos literales

## Configuración y Desarrollo

### ⚡ Inicio Rápido - Sin Base de Datos (Recomendado para desarrollo)

```bash
# Instalar dependencias
npm install

# Ejecutar con datasource de memoria (NO requiere base de datos)
npm run dev:memory
```

¡Eso es todo! La aplicación funcionará completamente en memoria sin necesidad de Docker ni PostgreSQL.

### 🗄️ Con Base de Datos (Prisma/TypeORM)

#### Opción 1: Prisma
```bash
# 1. Crear archivo .env basado en .env.template
# 2. Configurar DATASOURCE_TYPE=PRISMA en .env
# 3. Ejecutar Docker
docker compose up -d
# 4. Migrar base de datos
npm run prisma:migrate:prod
# 5. Ejecutar aplicación
npm run dev:prisma
```

#### Opción 2: TypeORM
```bash
# 1. Crear archivo .env basado en .env.template
# 2. Configurar DATASOURCE_TYPE=TYPEORM en .env
# 3. Ejecutar Docker
docker compose up -d
# 4. Ejecutar aplicación
npm run dev:typeorm
```

## Scripts Disponibles

### Desarrollo
- `npm run dev` - Modo desarrollo (detecta DATASOURCE_TYPE automáticamente, por defecto: MEMORY)
- `npm run dev:memory` - Desarrollo con datasource de memoria
- `npm run dev:prisma` - Desarrollo con Prisma 
- `npm run dev:typeorm` - Desarrollo con TypeORM

### Producción
- `npm run start:memory` - Producción con datasource de memoria
- `npm run start:prisma` - Producción con Prisma
- `npm run start:typeorm` - Producción con TypeORM

## Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```bash
# Puerto de la aplicación
PORT=3000

# Tipo de datasource (MEMORY | PRISMA | TYPEORM)
# Default: MEMORY
DATASOURCE_TYPE=MEMORY

# Solo requerido para PRISMA/TYPEORM
POSTGRES_URL=postgresql://postgres:123456@localhost:5432/TodoDB

# Solo para Docker
POSTGRES_USER=postgres
POSTGRES_DB=TodoDB
POSTGRES_PASSWORD=123456
```

## API Endpoints

### Endpoints Unificados
- Base URL: `/api/todos`
- **Funciona con cualquier datasource** configurado
- Operaciones CRUD estándar

### Endpoints Específicos de Memoria
- Base URL: `/api/todos-memory`
- Operaciones CRUD + funcionalidades adicionales de gestión de datos
- **Siempre usa datasource de memoria**, independiente de la configuración

Para más detalles sobre los endpoints de memoria, consulta [MEMORY_DATASOURCE.md](./MEMORY_DATASOURCE.md)

## Casos de Uso

### 🧠 Memory Datasource (Recomendado para inicio)
- ✅ **Desarrollo rápido** sin configuración de base de datos
- ✅ **Testing** y prototipos instantáneos
- ✅ **Demos** y presentaciones
- ✅ **Aprendizaje** de arquitectura limpia
- ✅ **CI/CD** sin dependencias externas

### 🗄️ Prisma/TypeORM
- ✅ Aplicaciones en producción
- ✅ Persistencia de datos
- ✅ Aplicaciones multi-usuario
- ✅ Transacciones complejas

## Detección Automática de Datasource

La aplicación detecta automáticamente qué datasource usar:

1. **Variable de entorno `DATASOURCE_TYPE`** (prioridad alta)
2. **Script npm específico** (ej: `npm run dev:memory`)
3. **Por defecto**: MEMORY (si no se especifica nada)

### Logs de Inicio
La aplicación muestra claramente qué datasource está usando:

```bash
🔧 Starting application with datasource: MEMORY
🧠 Using memory datasource - no database initialization required
💾 Data will be stored in memory arrays and lost on restart
🔗 Available endpoints: /api/todos-memory
🎯 Datasource configured: MEMORY
```

## Testing

Puedes usar el archivo `memory-datasource.http` para probar la funcionalidad con tu cliente HTTP favorito (REST Client, Postman, etc.)

## Ventajas de esta Arquitectura

1. **🔄 Intercambiable**: Cambia entre datasources sin modificar código de negocio
2. **🚀 Inicio inmediato**: Funciona sin configuración con datasource de memoria
3. **🧪 Testing**: Ideal para pruebas sin dependencias externas
4. **📚 Educativo**: Perfecto para aprender arquitectura limpia
5. **🔧 Flexible**: Cada datasource para su caso de uso específico

## Documentación Adicional

- [Memory Datasource Guide](./MEMORY_DATASOURCE.md) - Guía completa del datasource de memoria
- [memory-datasource.http](./memory-datasource.http) - Ejemplos de peticiones HTTP

## Aplicación para la gestión de entradas al cine universitario.

La primera imagen se muestra la cartelera del cine.

![I1](./clean/public/assets/images/I1.jpg)

La segunda imagen es donde se escoge la fecha y función definida para esta película.

![I2](./clean/public/assets/images/I2.jpg)

En la tercera imagen podemos escoger el tipo de ticket asumiendo que algunos asistentes pueden ser externos a la universidad y deban pagar entrada.

![I3](./clean/public/assets/images/I3.jpg)

En la cuarta imagen escogemos en la sala asociada al horario los asientos que como vimos en la imagen anterior pueden ser varios.

![I4](./clean/public/assets/images/I4.jpg)



Cada iteración de los usuarios debe ir acompañada de reglas y consejos para el usuario a llevar en el interior del cine (en imágenes).



## Modelado del Dominio para la Gestión de Entradas al Cine Universitario

### Análisis de las imágenes

El sistema gestiona la compra de entradas para funciones de cine universitario. El usuario puede:

Ver cartelera de películas y eventos.
Seleccionar fecha, función, sala y horario.
Elegir tipo y cantidad de tickets.
Seleccionar asientos disponibles.

### Entidades, relaciones y atributos

#### 1. **Película/Event (Movie)**
- **Atributos:** id, título, sinopsis, edad mínima, imagen, etiquetas.
- **Justificación:** Es el contenido principal que se proyecta y el punto de partida del flujo de compra.

#### 2. **Función (Screening)**
- **Atributos:** id, id_película, id_sala, fecha, hora, formato, idioma, disponibilidad.
- **Relación:** Una película tiene muchas funciones; una función pertenece a una película y a una sala.
- **Justificación:** Permite organizar las proyecciones por fecha, hora y sala.

#### 3. **Sala (Room)**
- **Atributos:** id, nombre, tipo, capacidad, lista de asientos.
- **Relación:** Una sala tiene muchos asientos y muchas funciones.
- **Justificación:** Define el espacio físico donde se realiza la función y la disposición de los asientos.

#### 4. **Asiento (Seat)**
- **Atributos:** id, id_sala, etiqueta (ej: A1), estado (disponible, ocupado, reservado).
- **Relación:** Un asiento pertenece a una sala y puede estar asociado a una reserva.
- **Justificación:** Permite la selección personalizada y control de disponibilidad.

#### 5. **Tipo de Ticket (TicketType)**
- **Atributos:** id, nombre, precio, restricciones (ej: tercera edad, estudiante), descripción.
- **Justificación:** Permite diferenciar precios y condiciones según el público.

#### 6. **Reserva (Booking)**
- **Atributos:** id, id_función, asientos (lista de id_asiento), tickets (tipo y cantidad), usuario (opcional), estado.
- **Relación:** Una reserva está asociada a una función, a uno o varios asientos y a uno o varios tipos de ticket.
- **Justificación:** Representa la acción de apartar asientos y tickets para una función específica.

---

### Abstracción de capas (Clean Architecture)

- **Domain Layer:** Define entidades, interfaces de repositorios y casos de uso (ej: reservar asientos, consultar cartelera).
- **Infrastructure Layer:** Implementa los repositorios y acceso a datos (base de datos, memoria, etc).
- **Presentation Layer:** Expone la API REST (rutas, controladores, validaciones).

Este modelo permite cubrir todos los casos de uso observados en las imágenes y soporta la extensión a nuevas reglas o tipos de tickets en el futuro.