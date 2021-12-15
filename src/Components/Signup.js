import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const baseUrl = 'https://wishesinpoints.herokuapp.com';
const SignupUrl = baseUrl + '/users/api/register/win/';

const Signup = () => {
    const history = useHistory();
    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: "",
        email: "", // invalid_email = ['@gmail.com', '@outlook.com','@yahoo.com','@hotmail.com']
        password: "",
        confirm_password: "",
        phone: "",
    })


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = (event) => {
        var pw = inputs.password;
        var cpw = inputs.confirm_password;


        if (validatePassword(pw, cpw)) {
            // Validate 10 digits phone number
            var phoneDigits = parseInt(inputs.phone.length);
            if (phoneDigits === 10) {
                
                axios.post(SignupUrl, {
                    first_name: inputs.first_name,
                    last_name: inputs.last_name,
                    email: inputs.email,
                    password: inputs.password,
                    phone: inputs.phone,
                    typeofuser: 2, // Is a customer
                    account_created_by_admin: false
                })
                    .then((response) => {
                        console.log(response.data);
                        history.push('login');
                    })
                    .catch(err => console.log(err));
            }
            else {
                console.log('Se requieren 10 dígitos, ¡coincide con el formato solicitado! ');
            }

        }

        return false;
    }


    function validatePassword(pw, cpw) {
        // At least 8 letters
        //example: Password123
        var letter = /[a-z]/;
        var upper = /[A-Z]/;
        var number = /[0-9]/;

        if (pw.length < 8 || pw != cpw || !letter.test(pw) || !number.test(pw) || !upper.test(pw)) {
            switch (true) {
                case pw.length < 8:
                    console.log('Asegúrese de que la contraseña tenga más de 8 caracteres.');
                    return false;
                case pw != cpw:
                    console.log('Asegúrese de que las contraseñas coincidan.');
                    return false;
                case !letter.test(pw):
                    console.log('Asegúrese de que la contraseña incluya una letra minúscula.');
                    return false;
                case !number.test(pw):
                    console.log('Asegúrese de que la contraseña incluya un dígito');
                    return false;
                case !upper.test(pw):
                    console.log('Asegúrese de que la contraseña incluya una letra mayúscula.');
                    return false;
            }
        }
        return true;
    }


    return (
        <>
            <div className="container" style={{ paddingTop: 40, width: "70%" }}>
                <Row>
                    <Col>
                        <h4>Registrarse</h4>
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control required style={{ backgroundColor: "#BFBFBF", color: "#FFF", borderRadius: 20 }} required name="first_name" value={inputs.first_name} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control style={{ backgroundColor: "#BFBFBF", color: "#FFF", borderRadius: 20 }} required name="last_name" value={inputs.last_name} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Email</Form.Label>
                                <Form.Control style={{ backgroundColor: "#BFBFBF", color: "#FFF", borderRadius: 20 }} required name="email" value={inputs.email} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" style={{ backgroundColor: "#BFBFBF", color: "#FFF", borderRadius: 20 }} required name="password" value={inputs.password} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control type="password" style={{ backgroundColor: "#BFBFBF", color: "#FFF", borderRadius: 20 }} required name="confirm_password" value={inputs.confirm_password} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>No. Teléfono</Form.Label>
                                <Form.Control type='number' style={{ backgroundColor: "#BFBFBF", color: "#FFF", borderRadius: 20 }} required name="phone" value={inputs.phone} onChange={handleChange} />
                            </Form.Group>

                            <Button variant="danger" type="button" onClick={handleSubmit}>
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </div>

        </>
    )

}
export default Signup;