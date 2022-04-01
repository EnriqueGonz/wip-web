import { Form, Button,Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios'; // npm install axios
import imgLogin from '../images/loginimg.png';
import { useParams } from 'react-router-dom';


const RestorePassword = () => {
    var { uuid } = useParams(); // params
    var { rtoken } = useParams(); // params 

    const [inputs, setInputs] = useState({
        password: "",
    })

    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);  


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        console.log(name + ' ' + value);
    }


    const handleSubmit = (event) => {
        axios.post('http://ec2-52-73-241-143.compute-1.amazonaws.com/password_reset/api/reset/'+uuid+'/'+rtoken+'/',{
            password: inputs.password,
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
                                <h5 style={{fontSize:30,fontWeight:30}}>Restablece tu contraseña</h5><br></br>
                                
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Ingresa tu nueva contraseña:</Form.Label>
                                        <Form.Control style={{ backgroundColor: "white", color: "black", borderRadius: 20 }} required name="password" value={inputs.password} onChange={handleChange} />
                                    </Form.Group>
                                    
                                    <Button style={{float:"right",borderRadius:15}} variant="danger" type="button" onClick={handleSubmit}>
                                        Actualizar
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Modal show={show1} size="md" >
        <Modal.Body style={{backgroundColor:"#FFF"}}>
        <div>
        <div>
            <h3 style={{fontSize:34, fontWeight:"bold"}}>Contraseña actualizada correctamente</h3> 
            <h4 style={{fontWeight: 300,paddingTop:15}}>Inicia sesion con tu nueva contraseña</h4>
        </div>
        <Button style={{float:"right",borderRadius:15}} variant="danger" type="button" onClick={event =>  window.location.href='/'} >
            Entrar
        </Button>

        </div>
            </Modal.Body>
        </Modal>
        </>
    )

}
export default RestorePassword;