from flask import Flask, abort, request, jsonify
from models import setup, Hospital, Location

app = Flask(__name__)
setup(app)

"""End point to query all hospitals"""
@app.route('/hospitals')
def get_hospitals():
    try:
        hospitals = Hospital.query.all()
        all_hospitals = {}
        for hospital in hospitals:
            all_hospitals = [hospital.format()]

        return jsonify ({
            "success": True,
            "hospitals": all_hospitals,
            "total_hospitals": len(all_hospitals)
        })

    except:
        abort(404)

"""Endpoint to add a new hospital"""
@app.route('/hospitals', methods=['POST'])
def post_hospitals():
    data = request.get_json()
    hospital_name = data.get('name')
    hospital_email = data.get('email')
    hospital_address = data.get('address')
    hospital_state = data.get('state')
    hospital_country = data.get('country')

    if (hospital_name is None) or (hospital_email is None) or (
        hospital_address is None) or (hospital_state is None) or (
            hospital_country is None):
        abort(404)
    try:
        new_hospital_location = Location(
            address=hospital_address, 
            state=hospital_state, 
            country=hospital_country
            )
        new_hospital_location.insert()
        new_hospital = Hospital(
            name = hospital_name, 
            email = hospital_email,
            location_id = new_hospital_location.id
            )
        new_hospital.insert()
        return jsonify({
            "success": True,
            "new_hospital": new_hospital.id,
        })
    except:
        abort(422)

"""End point to query hospital based on location"""
@app.route('/locations/<int:location_id>/hospitals')
def sort_hospitals(location_id):
    try:
        location = Location.query.get(location_id)
        hospitals = Hospital.query.filter(Hospital.location_id==location.id)
        formatted_hospital = [hospital.format() for hospital in hospitals]
        return jsonify({
            'success': True,
            'hospitals': formatted_hospital,
        })
    except:
        abort(422)

"""endpoint to delete hospitals based on id"""
@app.route('/hospitals/<int:hospital_id>', methods=['DELETE'])
def delete_hospital(hospital_id):
    try:
        hospital = Hospital.query.filter(
            Hospital.id == hospital_id).one_or_none()
        location = hospital.location_id
        if hospital is None:
            abort(400)

        location.delete()
        hospital.delete()
        return jsonify({
            'success': True,
            'deleted': hospital_id
        })
    except:
        abort(422)

'''endpoint to update hospital data based on id'''
@app.route('/hospitals/<int:hospital_id>', methods=['PATCH'])
def update_hospital(hospital_id):
    try:
        hospital = Hospital.query.filter(
            Hospital.id == hospital_id).one_or_none()
        location = hospital.location_id
        if hospital is None:
            abort(400)
        data = request.get_json()
        new_name = data.get('name', hospital.name)
        new_email = data.get('email', hospital.email)
        new_address = data.get('address', location.address)
        new_state = data.get('state', location.state)
        new_country = data.get('country', location.country)
        new_location_info = Location(
            address = new_address,
            state = new_state,
            country = new_country
        )
        new_location_info.update()
        new_hospital_info = Hospital(
            name=new_name, 
            email=new_email, 
            location_id=new_location_info
            )
        new_hospital_info.update()
        hospitals = Hospital.query.order_by(Hospital.id).all()
        return jsonify({
            'success': True,
            'updated': new_hospital_info,
            'hospitals': hospitals
        })
    except:
        abort(422)



"""Error handler for expected 404"""
@app.errorhandler(404)
def not_found(error):
    return jsonify(
        ({
            'success': False,
            'error': 404,
            'message': 'Resource not found',
        }), 404,
        )

"""Error handler for expected 422 error"""
@app.errorhandler(422)
def unprocessable(error):
    return jsonify(
        ({
        'success': False,
        'error': 422,
        'message': 'unprocessable',
    }), 422,
    )


'''error handling for 400 errors'''
@app.errorhandler(400)
def bad_request(error):
    return(
        jsonify({
            'success': False,
            'error': 400,
            'message': 'bad request'
        }), 400,
    )