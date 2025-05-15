from database import Base, engine
from models.riego_models import Zona, Sensor, DatoSensor, Programacion, Riego

Base.metadata.create_all(engine)