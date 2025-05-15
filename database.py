from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Cambia la cadena de conexión para PostgreSQL
engine = create_engine("postgresql://postgres:melanie@localhost:5433/riego_db", echo=True)

# Sesión para interactuar con la base de datos
Session = sessionmaker(bind=engine)

# Base para los modelos (todas las clases modelo deben heredar de esto)
Base = declarative_base()

# Crear todas las tablas automáticamente (opcional, dependiendo de tu flujo de trabajo)
# Base.metadata.create_all(engine)
