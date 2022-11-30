from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Integer
from flask_migrate import Migrate
from settings import DB_NAME, DB_USER, DB_PASSWORD

database_name = DB_NAME
database_path = 'postgresql://{}:{}@{}/{}'.format(DB_USER, DB_PASSWORD, 'localhost:5432', database_name)

db = SQLAlchemy()
migrate = Migrate()

def setup(app, database_path=database_path):
    app.config['SQLALCHEMY_DATABASE_URI'] = database_path
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)
    migrate.init_app(app, db)

    return app


class Hospital(db.Model):
    id = Column(Integer, primary_key=True)
    name = Column(String(), nullable=False)
    email = Column(String(), nullable=False)
    location_id = Column(Integer, db.ForeignKey('location.id'), nullable=False)

    def __init__(self, name, email, location_id):
        self.name = name
        self.email = email
        self.location_id = location_id

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
            'name': self.name,
            'email': self.email,
            'location_id': self.location_id,
        }
class Location(db.Model):
    id = Column(Integer, primary_key=True)
    address = Column(String(), nullable=False)
    state = Column(String(), nullable=False)
    country = Column(String(), nullable=False)
    hospital = db.relationship('Hospital', backref='location',
    lazy='joined', cascade='all, delete')

    def __init__(self, address, state, country):
        self.address = address
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
            'address': self.address,
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
