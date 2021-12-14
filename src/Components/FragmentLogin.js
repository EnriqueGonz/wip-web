import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios'; // npm install axios


const loginUrl = 'https://wishesinpoints.herokuapp.com/access/api/login/';
const FragmentLogin = () => {
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
        axios.post(loginUrl,{
            email: inputs.email,
            password: inputs.password
        })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token',response.data["token"]);
                localStorage.setItem('id_usuario',response.data["pk"]);
                window.location.href = "/home";

            })
            .catch(err => console.log(err));
        return false;
    }


    return (
        <>
            <div className="container" style={{ paddingTop: 80, width: "70%" }}>
                <div className="card">
                    <div className="card-body">
                        <div className="grid-login">
                            <div>
                                <h5>¡Bienvenido a Wishes In points!</h5>
                                <h6>Inicia sesion para poder acceder a nuestra plataforma</h6>
                            </div>
                            <div>
                                <h4>Inicio de sesión</h4>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control style={{ backgroundColor: "#BFBFBF", color: "#000", borderRadius: 20 }} required name="email" value={inputs.email} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" style={{ backgroundColor: "#BFBFBF", color: "#000", borderRadius: 20 }} required name="password" value={inputs.password} onChange={handleChange} />
                                    </Form.Group>
                                    <Button style={{float:"right"}} variant="danger" type="button" onClick={handleSubmit}>
                                        Entrar
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default FragmentLogin;