from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from database import Base

class Zona(Base):
    __tablename__ = 'zonas'
    id = Column(Integer, primary_key=True)
    nombre = Column(String)
    sensores = relationship("Sensor", back_populates="zona")

class Sensor(Base):
    __tablename__ = 'sensores'
    id = Column(Integer, primary_key=True)
    tipo = Column(String)
    zona_id = Column(Integer, ForeignKey('zonas.id'))
    zona = relationship("Zona", back_populates="sensores")
    datos = relationship("DatoSensor", back_populates="sensor")

class DatoSensor(Base):
    __tablename__ = 'datos_sensores'
    id = Column(Integer, primary_key=True)
    valor = Column(String)
    sensor_id = Column(Integer, ForeignKey('sensores.id'))
    sensor = relationship("Sensor", back_populates="datos")

class Programacion(Base):
    __tablename__ = 'programaciones'
    id = Column(Integer, primary_key=True)
    hora_inicio = Column(String)
    duracion = Column(Integer)

class Riego(Base):
    __tablename__ = 'riegos'
    id = Column(Integer, primary_key=True)
    zona_id = Column(Integer, ForeignKey('zonas.id'))
    programacion_id = Column(Integer, ForeignKey('programaciones.id'))
