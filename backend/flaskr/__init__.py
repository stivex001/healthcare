from flask import Flask, abort, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import setup, Hospitals

app = Flask(__name__)
setup(app)


@app.route('/hostpitals')
def get_hospitals():
    try:
        hospitals = Hospitals.query.all()
        all_hospitals = {}
        for hospital in hospitals:
            all_hospitals[hospitals.id] = hospitals.name

        return jsonify ({
            "success": True,
            "hospitals": all_hospitals
        })

    except:
        abort(404)

@app.errorhandler
def not_found(error):
    return jsonify(
        {
            'success': False,
            'error': 404,
            'message': 'Resource not found',
        }), 404,