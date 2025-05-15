import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from database import Session
from models.riego_models import Zona, Sensor, DatoSensor, Programacion, Riego

session = Session()

# Crear zonas
zona1 = Zona(nombre="Huerto Norte")
zona2 = Zona(nombre="Huerto Sur")
zona3 = Zona(nombre="Huerto SurEste")
zona4 = Zona(nombre="Huerto Oeste")
zona5 = Zona(nombre="Huerto Central")
session.add_all([zona1, zona2, zona3, zona4, zona5])
session.add_all([zona1, zona2])
session.commit()

# Crear sensores
sensor1 = Sensor(tipo="Humedad", zona=zona1)
sensor2 = Sensor(tipo="Temperatura", zona=zona2)
sensor3 = Sensor(tipo="PH", zona=zona3)
sensor4 = Sensor(tipo="Luz", zona=zona4)
sensor5 = Sensor(tipo="Conductividad", zona=zona5)
session.add_all([sensor1, sensor2, sensor3, sensor4, sensor5])
session.commit()

# Crear datos de sensores
dato1 = DatoSensor(valor="35%", sensor=sensor1)
dato2 = DatoSensor(valor="27°C", sensor=sensor2)
dato3 = DatoSensor(valor="pH 6.5", sensor=sensor3)
dato4 = DatoSensor(valor="1200 lux", sensor=sensor4)
dato5 = DatoSensor(valor="450 µS/cm", sensor=sensor5)
session.add_all([dato1, dato2, dato3, dato4, dato5])
session.commit()

# Crear programaciones
prog1 = Programacion(hora_inicio="06:00", duracion=30)
prog2 = Programacion(hora_inicio="18:00", duracion=45)
prog3 = Programacion(hora_inicio="10:00", duracion=25)
prog4 = Programacion(hora_inicio="16:00", duracion=40)
prog5 = Programacion(hora_inicio="18:00", duracion=45)
session.add_all([prog1, prog2, prog3, prog4, prog5])
session.commit()

# Crear riegos
riego1 = Riego(zona_id=zona1.id, programacion_id=prog1.id)
riego2 = Riego(zona_id=zona2.id, programacion_id=prog2.id)
riego3 = Riego(zona_id=zona3.id, programacion_id=prog3.id)
riego4 = Riego(zona_id=zona4.id, programacion_id=prog4.id)
riego5 = Riego(zona_id=zona5.id, programacion_id=prog5.id)
session.add_all([riego1, riego2, riego3, riego4, riego5])
session.commit()

session.close()