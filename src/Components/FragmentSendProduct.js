import React from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';
import imgDefault from '../images/redeemDefault.png';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'; // npm install axios


const addressupUrl = 'http://127.0.0.1:8000/useraddresses/api/register/';


const FragmentSendProduct = () =>{
    let history = useHistory();
    const [inputs, setInputs] = useState({
        user: 5, // int
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
        console.log(name + value);
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = (event) => {
        axios.post(addressupUrl, {
            user: "5",
            first_name: inputs.first_name,
            last_name: inputs.last_name,
            street: inputs.street,
            neighborhood: inputs.neighborhood,
            street_number: "1",
            apartment_number: "1",
            postal_code: inputs.postal_code,
            city: inputs.city,
            state: inputs.state,
            phone: inputs.phone,
            references: inputs.references,
            email: inputs.email
        })
        .then((response) => {
            console.log(response);
        })
        .catch(err => console.log(err));

        return false;


    }
    

    return(    
        <>
        <div className="container" style={{paddingTop:40, width:"70%"}}>
            <Row>
                <Col>
                    <h4>¿A donde enviamos tu regalo?</h4>
                    <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} className="inputDireccion" required type="text" name="first_name" value={inputs.first_name} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required type="text" name="last_name" value={inputs.last_name} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Calle</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required type="text" name="street" value={inputs.street} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Colonia</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required type="text" name="neighborhood" value={inputs.neighborhood} onChange={handleChange}  />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required type="text" name="city" value={inputs.city} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required type="text" name="state" value={inputs.state} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Codigo Postal (CP)</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required type="number" name="postal_code" value={inputs.postal_code} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required type="number" name="phone" value={inputs.phone} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Email</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required  name="email" value={inputs.email} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Informacion adicional</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",color:"#FFF",borderRadius:20}} required  name="references" value={inputs.references} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="danger" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button style={{marginLeft:10}} onClick={() => history.goBack()} variant="secondary">
                        Regresar
                    </Button>
                        
                    </Form>
                </Col>
                <Col>
                <div className="container">
                    <img alt="" style={{width:"100%"}} src={imgDefault}></img>
                </div>
                <div className="container">
                    <p style={{textAlign:"center",fontSize:22,fontWeight:100}} >Termo metalico 355 ml</p>
                </div>
                </Col>
            </Row>
        </div>
         


        </>
    )

}
export default FragmentSendProduct;