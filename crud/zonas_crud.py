from database import Session
from models.riego_models import Zona

def crear_zona(nombre):
    session = Session()
    zona = Zona(nombre=nombre)
    session.add(zona)
    session.commit()
    session.close()

def mostrar_zonas():
    session = Session()
    zonas = session.query(Zona).all()
    for z in zonas:
        print(z.id, z.nombre)
    session.close()

def eliminar_zona(id):
    session = Session()
    zona = session.query(Zona).get(id)
    if zona:
        session.delete(zona)
        session.commit()
        print(f"Zona con ID {id} eliminada.")
    else:
        print(f"No se encontró ninguna zona con ID {id}.")
    session.close()


def actualizar_zona(id, nuevo_nombre):
    session = Session()
    zona = session.query(Zona).get(id)
    if zona:
        zona.nombre = nuevo_nombre
        session.commit()
        print(f"Zona actualizada a '{nuevo_nombre}'")
    else:
        print(f"No existe una zona con ID {id}")
    session.close()


