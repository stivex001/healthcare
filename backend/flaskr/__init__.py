from flask import Flask, abort, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import setup, Hospitals, Patients

app = Flask(__name__)
setup(app)


@app.route('/hostpitals')
def get_hospitals():
    try:
        hospitals = Hospitals.query.all()

    except:
        abort(404)