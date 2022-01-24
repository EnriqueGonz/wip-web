import React, {useState,useEffect} from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import { ReactComponent as IconInicio } from '../images/iconos/inicio.svg';
import { ReactComponent as IconRegalos } from '../images/iconos/regalos.svg';
import { ReactComponent as IconAdminPerfiles } from '../images/iconos/administrarperfiles.svg';
import { ReactComponent as IconCampana } from '../images/iconos/crearcampana1.svg';
import { ReactComponent as IconCrearProducto } from '../images/iconos/addproducto.svg';
import { ReactComponent as IconListaProducto } from '../images/iconos/listaproductos.svg';

const baseUrl = 'https://wishesinpoints.herokuapp.com/campaigns/api/register/';

const urlgetmarcas ='https://wishesinpoints.herokuapp.com/brands/api/get_list/';

var token = localStorage.getItem('tokenAdmin');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const FragmentAdminCrearCampana = () =>{
    let history = useHistory();
    const [listbrands, setListbrands] = useState([]);

    const [inputs, setInputs] = useState({
        brands: 0,
        campaigns: 0,
        campaign_name:"",
        start_date:0,
        end_date:"",
        points:0,
        status:0,
        slug: "",
    })


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        console.log(name + value)
        setInputs(values => ({ ...values, [name]: value }))
    }

    useEffect(() =>{  
        try {
          axios.post(urlgetmarcas,{
            brand_name:""
          },{ headers })
          .then((response) => {
            setListbrands(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setListbrands])



    const handleSubmit = (event) => {
        console.log(document.getElementById('fecha').value);
        axios.post("baseUrl", {
            brands: 0,
            plantillas: 1,
            campaign_name: "",
            points: 0,
            status: 0,
            slug: "",
        })
        .then((response) => {
            console.log(response);
            //window.location.href = "/misdirecciones";
        })
        .catch(err => console.log(err));

        return false;


    }
      
    

    return(    
        <>
        <div className="l-navbar" style={{padding:"1rem 0rem 0 0"}} id="nav-bar">
        <nav className="nav">
            <div>
                <div className="nav_list">
                    <a href="http://localhost:3000/admin/home" className="nav_link"> <IconInicio style={{width:26,height:"100%"}}/></a>
                    <a href="http://localhost:3000/admin/regalos" className="nav_link"> <IconRegalos style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/administrarperfiles" className="nav_link"> <IconAdminPerfiles style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/crearcampañas" style={{backgroundColor:"gray"}} className="nav_link"><IconCampana style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/crearproducto" className="nav_link"> <IconCrearProducto style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/listaproducto" className="nav_link"> <IconListaProducto style={{width:26,height:"100%"}}/></a> 
                </div>
            </div>
        </nav>
        </div>
        <div className="height-100">
            <div className="container">
                    <div>
                        <h4 style={{fontWeight: 300,paddingTop:15}}>Crear</h4>
                        <div className="row">
                                <div className="col">
                                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Nueva campaña</h3> 
                                </div>
                            </div>
                    </div>
                    <hr style={{height: 9}}></hr>
            </div>

            <div className="container">
            <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Nombre de campaña</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="campaign_name" value={inputs.campaign_name} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select style={{backgroundColor:"#BFBFBF",borderRadius:20}} aria-label="Default select example" >
                        {listbrands.map((item,index)=>(
                            <option key={index} value={item.id}>{item.brand_name}</option>
                        ))}
                        </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Plantilla</Form.Label>
                        <Form.Select style={{backgroundColor:"#BFBFBF",borderRadius:20}} aria-label="Default select example" >
                        <option>Selecciona una opcion</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Fecha de inicio de campaña</Form.Label><br></br>
                        <input type="date" id="start" name="trip-start" id="fecha"
                        min="2022-01-01" max="2024-12-31"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Fecha de fin de campaña</Form.Label><br></br>
                        <input type="date" id="start" name="trip-start"
                        min="2022-01-01" max="2024-12-31"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Status de la campaña</Form.Label>
                        <Form.Select style={{backgroundColor:"#BFBFBF",borderRadius:20}} aria-label="Default select example">
                        <option>Selecciona una opcion</option>
                        <option value="1">Activa</option>
                        <option value="2">Desactivada</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Puntos</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="number" name="points" value={inputs.points} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Slug de campaña:</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="slug" value={inputs.slug} onChange={handleChange}/>
                        </Form.Group>
                    </Row>
                    <Button style={{background:"#7B3E90",borderColor:"white"}} type="button" onClick={handleSubmit}>
                        Agregar
                    </Button>
                    <Button style={{marginLeft:10}} onClick={() => history.goBack()} variant="secondary">
                        Regresar
                    </Button>
                    </Form>    
            </div>
            
        </div>
        </>
    )

}
export default FragmentAdminCrearCampana;