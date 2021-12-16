import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios'; // npm install axios
import imgLogin from '../images/loginimg.png';

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
                localStorage.setItem('username',response.data["username"]);
                window.location.href = "/home";

            })
            .catch(err => console.log(err));
        return false;
    }


    return (
        <>
            <div className="container" style={{ paddingTop: 80, width: "70%" }}>
                <div style={{backgroundColor:"#C5C5C5",borderRadius:15}} className="card">
                    <div className="card-body">
                        <div className="grid-login">
                            <div style={{alignSelf:"center"}}>
                                <img alt="" style={{width:"80%"}} src={imgLogin}></img>
                            </div>
                            <div>
                                <br></br>
                                <h5 style={{fontSize:30,fontWeight:30}}>¡Bienvenido a</h5>
                                <h5 style={{fontSize:37,fontWeight:"bold"}}>Wishes in Points</h5><br></br>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control style={{ backgroundColor: "#BFBFBF", color: "#000", borderRadius: 20 }} required name="email" value={inputs.email} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" style={{ backgroundColor: "#BFBFBF", color: "#000", borderRadius: 20 }} required name="password" value={inputs.password} onChange={handleChange} />
                                    </Form.Group>
                                    <Button style={{float:"right",borderRadius:15}} variant="danger" type="button" onClick={handleSubmit}>
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