from database import Session
from models.riego_models import Zona

session = Session()

zonas = session.query(Zona).all()

for zona in zonas:
    print(f"id: {zona.id}, nombre: {zona.nombre}")

session.close()
