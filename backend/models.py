from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Integer, create_engine
from settings import DB_NAME, DB_USER, DB_PASSWORD

database_name = DB_NAME
database_path = 'postgresql://{}:{}@{}/{}'.format(DB_USER, DB_PASSWORD, 'localhost:5432', database_name)

db = SQLAlchemy()

def setup(app, database_path=database_path):
    app.config['SQLALCHEMY_DATABASE_URI'] = database_path
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)
    db.create_all()


class Hospitals(db.Model):
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    address = Column(String, nullable=False)
    location = Column(String, nullable=False)
    state = Column(String, nullable=False)
    country = Column(String, nullable=False)

    def __init__(self, name, type, city, state, country):
        self.name = name
        self.type = type
        self.city = city
        self.state = state
        self.country = country

    def insert(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'type': self.type,
            'city': self.city,
            'state': self.state,
            'country': self.country
        }


# class Patients(db.Model):
#     id = Column(Integer, primary_key=True)
#     name = Column(String, nullabe=False)
#     age = Column(String, nullable=False)


#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def format(self):
#         return {
#             'id': self.id,
#             'type': self.type
#         }
