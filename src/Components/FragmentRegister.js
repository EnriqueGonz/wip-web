import { Form, Button,Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios'; // npm install axios
import img from '../images/bg-register.png';
import img2 from '../images/loginimg.png';

const registerapi = 'https://wishesinpoints.herokuapp.com/users/api/register/win/';
const FragmentLogin = () => {
    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
        password2: "",
    })
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);  

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true); 

    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        console.log(name+value);
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = (event) => {
        if(inputs.password === inputs.password2){
            axios.post(registerapi,{
                first_name: inputs.first_name,
                last_name: inputs.last_name,
                email: inputs.email,
                password: inputs.password,
                phone: inputs.phone
            })
            .then((response) => {
                console.log(response);
                handleShow2();
            })
            .catch(err =>handleShow1());
        return false;

        }
        handleShow1()
    }


    return (
        <>
            <div className="container" style={{ paddingTop: 30, width: "70%" }}>
                <div style={{backgroundColor:"#C5C5C5",borderRadius:15}} className="card">
                    <div className="card-body">
                        <div className="grid-login">
                            <div style={{alignSelf:"center"}}>
                                <img alt="" style={{width:"80%"}} src={img}></img>
                            </div>
                            <div>
                                <br></br>
                                <h5 style={{fontSize:30,fontWeight:30}}>¡Bienvenido a</h5>
                                <h5 style={{fontSize:37,fontWeight:"bold"}}>Wishes in Points</h5><br></br>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control style={{  color: "#000", borderRadius: 20 }} required name="first_name" value={inputs.first_name} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control type="text" style={{  color: "#000", borderRadius: 20 }} required name="last_name" value={inputs.last_name} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" style={{  color: "#000", borderRadius: 20 }} required name="email" value={inputs.email} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Telefono</Form.Label>
                                        <Form.Control type="number" style={{ color: "#000", borderRadius: 20 }} required name="phone" value={inputs.phone} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" style={{ color: "#000", borderRadius: 20 }} required name="password" value={inputs.password} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Repetir Contraseña</Form.Label>
                                        <Form.Control type="password" style={{color: "#000", borderRadius: 20 }} required name="password2" value={inputs.password2} onChange={handleChange} />
                                    </Form.Group>

                                    
                                    <Button style={{float:"right",borderRadius:15}} variant="danger" type="button" onClick={handleSubmit}>
                                        Entrar
                                    </Button>

                                    <Button style={{float:"right",borderRadius:15, marginRight:10}} variant="primary" type="button" onClick={event =>  window.location.href='/'} >
                                        Volver
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
            <h4 style={{fontWeight: 300,paddingTop:15}}>Error</h4>
            <h3 style={{fontSize:34, fontWeight:"bold"}}>Upsss...</h3> 
            <p style={{fontSize:24, fontWeight:300}}>Ha ocurrido un error, intentalo mas tarde</p>    
        </div>

        </div>
            </Modal.Body>
        </Modal>


        <Modal show={show2} size="md" onHide={handleClose2} >
        <Modal.Body style={{backgroundColor:"#C5C5C5",borderRadius:15}} className="card">
                    <div className="card-body">
                        <div className="grid-login">
                            <div style={{alignSelf:"center"}}>
                                <img alt="" style={{width:"80%"}} src={img2}></img>
                            </div>
                            <div>
                                <br></br>
                                <h5 style={{fontSize:30,fontWeight:30}}>Registro</h5>
                                <h5 style={{fontSize:37,fontWeight:"bold"}}>Exitoso</h5><br></br>
                                
                            </div>
                        </div>
                    </div>
            </Modal.Body>
        </Modal>
        </>
    )

}
export default FragmentLogin;