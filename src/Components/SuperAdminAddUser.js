import React, {useState} from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import MenuSuperAdmin from './MenuSuperAdmin';


var token = localStorage.getItem('tokenSuperAdmin');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const SuperAdminAddUser = () =>{

    const [inputs, setInputs] = useState({
      first_name:"",
      last_name:"",
      email:"",
      phone:0,
    })


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        console.log(name + value)
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = (event) => {
      axios.post('https://wishesinpoints.herokuapp.com/users/api/register-admin/win/',{
        first_name:inputs.first_name,
        last_name:inputs.last_name,
        email:inputs.email,
        phone:inputs.phone,
        typeofuser:document.getElementById('selectTipoUser').value,
      }    
      ,{headers})
      .then((response) => {
          console.log(response);
          window.location.href = "/superadmin/administrarperfiles/"
      })
      .catch(err => {
          console.log(err);
      });
        

    }
      
    

    return(    
        <>
        <div className="l-navbar" style={{padding:"1rem 0rem 0 0"}} id="nav-bar">
            <nav className="nav">
                <div>
                    <div className="nav_list">
                        <MenuSuperAdmin></MenuSuperAdmin>            
                    </div>
                </div>
            </nav>
        </div>
        <div className="height-100">
            <div className="container">
                    <div>
                        <h4 style={{fontWeight: 300,paddingTop:15}}>Agregar</h4>
                        <div className="row">
                                <div className="col">
                                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Usuario</h3> 
                                </div>
                            </div>
                    </div>
                    <hr style={{height: 9}}></hr>
            </div>

            <div className="container">
              <Form onSubmit={handleSubmit}>
                    <Row className="mb-3" style={{marginTop: 15}}>
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Nombre *</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="first_name" value={inputs.first_name} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Apellidos *</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="last_name" value={inputs.last_name} onChange={handleChange}/>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3" style={{marginTop: 15}}>
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="email" value={inputs.email} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Telefono *</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="number" name="phone" value={inputs.phone} onChange={handleChange}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Tipo de usuario</Form.Label>
                        <Form.Select style={{backgroundColor:"#BFBFBF",borderRadius:20}} aria-label="Default select example" id='selectTipoUser'>
                            <option value={1}>Administrador</option>
                            <option value={2}>Customer</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <p id='msgerror' style={{color:"red",display:"none"}}>Error, verifica que los campos no esten vacios o intentalo mas tarde.</p>
                    <div className='container' style={{textAlign:"right"}}>
                    <Button style={{background:"#7B3E90",borderColor:"white"}} type="button" onClick={handleSubmit}>
                        Agregar
                    </Button>
                    </div>
                    </Form>    
            </div>
            
        </div>
        </>
    )

}
export default SuperAdminAddUser;