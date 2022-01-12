import React, {useState,useEffect} from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import { ReactComponent as IconInicio } from '../images/iconos/inicio.svg';
import { ReactComponent as IconRegalos } from '../images/iconos/regalos.svg';
import { ReactComponent as IconAdminPerfiles } from '../images/iconos/administrarperfiles.svg';
import { ReactComponent as IconCampana } from '../images/iconos/crearcampana.svg';
import { ReactComponent as IconCrearProducto } from '../images/iconos/addproducto1.svg';
import { ReactComponent as IconListaProducto } from '../images/iconos/listaproductos.svg';


const urlgetcategoria = 'https://wishesinpoints.herokuapp.com/categories/api/get_list/';
const urlgetmarcas ='https://wishesinpoints.herokuapp.com/brands/api/get_list/';
const urlgetcampanas = 'https://wishesinpoints-heroku.herokuapp.com/campaigns/api/get_list/';

const baseUrl = 'https://wishesinpoints.herokuapp.com/products/api/register/';

var token = localStorage.getItem('tokenAdmin');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const FragmentAdminCrearProducto = () =>{
    let history = useHistory();
    const [list, setList] = useState([]);
    const [listbrands, setListbrands] = useState([]);
    const [listcampanas, setlistcampanas] = useState([]);

    const [inputs, setInputs] = useState({
        brands: 0,
        campaigns: 0,
        categories: 2,
        product_name:"",
        description:"",
        points:0,
        amount:0,
        status:0,
        image: "",
    })


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        console.log(name + value)
        setInputs(values => ({ ...values, [name]: value }))
    }


    useEffect(() =>{  
        try {
          axios.post(urlgetcategoria,{
            category_name:""
          },{ headers })
          .then((response) => {
            setList(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setList])

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

      useEffect(() =>{  
        try {
          axios.post(urlgetcampanas,{
            campaign_name:""
          },{ headers })
          .then((response) => {
            setlistcampanas(response.data[1]);
            console.log(response.data[1]);
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setlistcampanas])

    const handleSubmit = (event) => {
        console.log(document.getElementById("file").value);

        if(document.getElementById("file").value === ""){
            document.getElementById('labelImg').style.color="red";
        }else{
            document.getElementById('labelImg').style.color="blue";

            axios.post(baseUrl, {
                brands: document.getElementById("selectMarca").value,
                campaigns: document.getElementById("selectCampana").value,
                categories: document.getElementById("selectCategoria").value,
                product_name:inputs.product_name,
                description:inputs.description,
                points:inputs.points,
                amount:inputs.amount,
                status:inputs.amount,
                image: document.getElementById("file").value,
                image_two:"",
                image_three:""
            },{headers})
            .then((response) => {
                console.log(response);
            })
            .catch(err => document.getElementById('msgerror').style.display="block");
        }

        

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
                    <a href="http://localhost:3000/admin/crearcampañas" className="nav_link"><IconCampana style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/crearproducto" style={{backgroundColor:"gray"}} className="nav_link"><IconCrearProducto style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/listaproducto" className="nav_link"><IconListaProducto style={{width:26,height:"100%"}}/></a> 
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
                                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Producto</h3> 
                                </div>
                            </div>
                    </div>
                    <hr style={{height: 9}}></hr>
            </div>

            <div className="container">
            <Form onSubmit={handleSubmit}>
                    <label htmlFor="file" id='labelImg'>Selecciona una imagen *</label><br></br>
                    <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png"/>
                    <Row className="mb-3" style={{marginTop: 15}}>
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Nombre del producto *</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="product_name" value={inputs.product_name} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Selecciona una categoria</Form.Label>
                        <Form.Select style={{backgroundColor:"#BFBFBF",borderRadius:20}} aria-label="Default select example" id='selectCategoria'>
                        {list.map((item,index)=>(
                            <option key={index} value={item.id}>{item.category_name}</option>
                        ))}
                        </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Selecciona una marca</Form.Label>
                        <Form.Select style={{backgroundColor:"#BFBFBF",borderRadius:20}} aria-label="Default select example" id='selectMarca'>
                        {listbrands.map((item,index)=>(
                            <option key={index} value={item.id}>{item.brand_name}</option>
                        ))}
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Selecciona una campaña</Form.Label>
                        <Form.Select style={{backgroundColor:"#BFBFBF",borderRadius:20}} aria-label="Default select example" id='selectCampana'>
                        {listcampanas.map((item,index)=>(
                            <option key={index} value={item.id}>{item.campaign_name}</option>
                        ))}
                        </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" style={{marginTop: 15}}>
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Costo en Puntos *</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="number" name="points" value={inputs.points} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Cantidad *</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="number" name="amount" value={inputs.amount} onChange={handleChange}/>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="" style={{marginBottom:15}}>
                        <Form.Label>Descripcion del producto *</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="description" value={inputs.description} onChange={handleChange}/>
                    </Form.Group>
                    <p id='msgerror' style={{color:"red",display:"none"}}>Error, verifica que los campos no esten vacios o intentalo mas tarde.</p>
                    <div className='container' style={{textAlign:"right"}}>
                    <Button style={{marginRight:10}} onClick={() => history.goBack()} variant="secondary">
                        Regresar
                    </Button>
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
export default FragmentAdminCrearProducto;