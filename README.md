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

## Endpoints REST - Películas (Movie)
Siguiendo se documentan los endpoints principales para la gestión de películas en la API, siguiendo la arquitectura limpia y el modelo de dominio definido.

---

### **GET /api/movies**

Obtiene la lista de todas las películas.

**Ejemplo de respuesta:**
```json
