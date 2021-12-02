import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios'; // npm install axios


const addressupUrl = 'http://127.0.0.1:8000/useraddresses/api/register/';
const userId = localStorage.getItem('user_id');


function RegisterAddress() {

    const [inputs, setInputs] = useState({
        user: 0, // int
        first_name: "", //This field can be left empty
        last_name: "",  //This field can be left empty
        street: "",
        neighborhood: "",
        street_number: "",
        apartment_number: "",
        postal_code: 0, // int
        city: "",
        state: "",
        phone: "", //This field can be left empty
        references: "",
        email: "", //This field can be left empty
    })


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        var parseId = parseInt(userId);

        axios.post(addressupUrl, {
            user: parseId,
            first_name: inputs.first_name,
            last_name: inputs.last_name,
            street: inputs.street,
            neighborhood: inputs.neighborhood,
            street_number: inputs.street_number,
            apartment_number: inputs.apartment_number,
            postal_code: inputs.postal_code,
            city: inputs.city,
            state: inputs.state,
            phone: inputs.phone,
            references: inputs.references,
            email: inputs.email
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch(err => console.log(err));

    }


    return (
        <form onSubmit={handleSubmit}>

            <div>Registrar dirección</div>


            <label>
                First name
                <input
                    type="text"
                    name="first_name"
                    value={inputs.first_name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name
                <input
                    type="text"
                    name="last_name"
                    value={inputs.last_name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Calle
                <input
                    type="text"
                    name="street"
                    value={inputs.street}
                    onChange={handleChange}
                />
            </label>
            <label>
                Colonia
                <input
                    type="text"
                    name="neighborhood"
                    value={inputs.neighborhood}
                    onChange={handleChange}
                />
            </label>
            <label>
                No. exterior
                <input
                    type="text"
                    name="street_number"
                    value={inputs.street_number}
                    onChange={handleChange}
                />
            </label>
            <label>
                No. interior
                <input
                    type="text"
                    name="apartment_number"
                    value={inputs.apartment_number}
                    onChange={handleChange}
                />
            </label>
            <label>
                C.P.
                <input
                    type="text"
                    name="postal_code"
                    value={inputs.postal_code}
                    onChange={handleChange}
                />
            </label>
            <label>
                Ciudad
                <input
                    type="text"
                    name="city"
                    value={inputs.city}
                    onChange={handleChange}
                />
            </label>
            <label>
                Estado
                <input
                    type="text"
                    name="state"
                    value={inputs.state}
                    onChange={handleChange}
                />
            </label>
            <label>
                No. Teléfono
                <input
                    type="text"
                    name="phone"
                    value={inputs.phone}
                    onChange={handleChange}
                />
            </label>
            <label>
                Referencias
                <input
                    type="text"
                    name="references"
                    value={inputs.references}
                    onChange={handleChange}
                />
            </label>
            <label>
                Correo
                <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />

        </form>
    );
}
export default RegisterAddress;