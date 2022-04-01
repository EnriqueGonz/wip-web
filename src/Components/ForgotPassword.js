import { Form, Button,Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios'; // npm install axios
import imgLogin from '../images/loginimg.png';



const ForgotPassword = () => {
    const [inputs, setInputs] = useState({
        email: "",
    })
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);  


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = (event) => {
        axios.post('http://ec2-52-73-241-143.compute-1.amazonaws.com/password_reset/api/request-reset/',{
            email: inputs.email,
        })
        .then((response) => {
            console.log(response);
            handleShow1()
        })
        .catch(err =>console.log(err));
        
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
                                <h5 style={{fontSize:37,fontWeight:"bold"}}>Wishes in Points</h5>
                                <h5 style={{fontSize:30,fontWeight:30}}>¿Olvidaste tu contraseña?</h5><br></br>
                                <p>Ingresa tu correo electronico para hacer llegar los pasos para recuperar tu cuenta.</p>
                                
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control style={{ backgroundColor: "white", color: "black", borderRadius: 20 }} required name="email" value={inputs.email} onChange={handleChange} />
                                    </Form.Group>
                                    
                                    <Button style={{float:"right",borderRadius:15}} variant="danger" type="button" onClick={handleSubmit}>
                                        Enviar
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Modal show={show1} size="md" onHide={handleClose1} >
        <Modal.Body style={{backgroundColor:"#FFF"}}>
        <div>
        <div>
            <h3 style={{fontSize:34, fontWeight:"bold"}}>Instrucciones enviadas</h3> 
            <h4 style={{fontWeight: 300,paddingTop:15}}>Revisa tu bandeja de entrada</h4>
            <p style={{fontSize:24, fontWeight:300}}>Los pasos para restablecer tu contraseña se han enviado al correo</p>    
        </div>

        </div>
            </Modal.Body>
        </Modal>
        </>
    )

}
export default ForgotPassword;