import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios'; // npm install axios


const loginUrl = 'http://127.0.0.1:8000/access/api/login/';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = (event) => {
        axios.post(loginUrl, {
            email: inputs.email,
            password: inputs.password
        })
            .then((response) => {
                console.log(response.data);
                
            })
            .catch(err => console.log(err));
        return false;
    }


    return (
        <>
            <div className="container" style={{ paddingTop: 40, width: "70%" }}>
                <Row>
                    <Col>
                        <h4>Inicio de sesión</h4>
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Email</Form.Label>
                                <Form.Control style={{ backgroundColor: "#BFBFBF", color: "#FFF", borderRadius: 20 }} required name="email" value={inputs.email} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Contrasela</Form.Label>
                                <Form.Control type="password" style={{ backgroundColor: "#BFBFBF", color: "#FFF", borderRadius: 20 }} required name="password" value={inputs.password} onChange={handleChange} />
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
export default Login;