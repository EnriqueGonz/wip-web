import React, { useState,useEffect } from 'react';
import { Button,Row,Col,Modal } from 'react-bootstrap';
import axios from 'axios';
import { MdStars } from 'react-icons/md';

const uuid = localStorage.getItem('uuid');
const rtoken = localStorage.getItem('rtoken');
const id_product = localStorage.getItem('producto');
const baseurl = 'https://wishesinpoints.herokuapp.com';


const giftUrl = baseurl+'/products/api/specific_product/'+id_product+'/';
const url = baseurl+'/products/gift/'+uuid+'/'+rtoken+'/';
const headers = {
    'Content-Type': 'application/json',
};


var user_id =0;
var user_address=0;
var campana_id =0;
var product_points =0;
var product_id = 0;
var user_points=0;

const FragmentProductSpecific = () =>{
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true); 

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);  

 
  useEffect(() =>{
    axios.get(giftUrl, { headers })
      .then((response) => {
        console.log(response.data[0]);
        product_id = response.data[0]["id"];
        campana_id = response.data[0]["campaigns_id"];
        product_points = response.data[0]["points"];
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  },[setList]);

  useEffect(() =>{
    axios.get(url, { headers })
      .then((response) => {
        user_id = response.data[0][0]["id"];
        user_points = response.data[0][0]["points"];
        console.log(response.data);
        setList2(response.data[1]);
      })
      .catch((error) => {
        console.log(error);
      });

  },[setList2]);


  const postPedido = () => {
    var costo = (document.getElementById("number").value) * product_points;
    var dato = "";

    list2.map((item) => (
      dato = "check"+item.id,
      (document.getElementById(dato).checked) === true
      ? user_address = document.getElementById(dato).value
      : null
    ))

    if(user_address === 0){
      document.getElementById("alerta").style.display = "block"
    }else{
      document.getElementById("alerta").style.display = "none"


    if(user_points >= costo){
      console.log(user_id);
      console.log(user_address);
      console.log(campana_id);
      console.log(product_id);
      console.log(document.getElementById("number").value);
      console.log('Se puede comprar')
      console.log(rtoken);
      
      axios.post('https://wishesinpoints.herokuapp.com/orders/api/order/',{
        user: user_id,
        useraddresses: user_address,
        campaigns: campana_id,
        date_delivery: "", // This field will be sent empty
        status: 'Pendiente', // The default value of this field is "Pendiente"
        products: product_id,
        amount: document.getElementById("number").value,
        gift_token: rtoken
      }, headers)
      .then((response) => {
          console.log('Status code: '+response.status);
          handleShow();
          localStorage.clear();

      })
      .catch(err => handleShow1());  
      
    }else{
      console.log('No puede comprar')
    }
      
    }

    
  }
  







  
    return(
      
        <div>
            <div className="container" style={{paddingTop:40, width:"85%"}}>
                <Row>

                    <Col>
                    {list.map((item) => (
                    <div key={item.id} className="container" style={{textAlign:"center"}}>
                        <img className="imagentest" alt="" src={"https://wishesinpointsbucket.s3.amazonaws.com/"+item.image}></img>
                        
                        <h4>{item.product_name}</h4>
                          <div className='row'>
                            <div className='col-8'>
                                <p style={{textAlign:"justify"}}>{item.description}</p>
                            </div>
                            <div className='col-4'>
                                <p style={{textAlign:"end"}}><MdStars style={{fontSize:28,color:"#7B3E90"}}/>{item.points} puntos</p>
                            </div>
                            
                          
                          </div>
                    </div>

                    ))}
                    </Col>
                    <Col>
                    {list.map((item) => (
                        <div key={item.id}>
                          <Row>
                            <Col>
                            <h5>Escoge direccion</h5>
                            </Col>
                            <Col>
                            <Button variant="danger" onClick={event =>  window.location.href='/add-direccion-api'}>Agregar direccion</Button>
                            </Col>
                          </Row>
                          <br></br>

                          
                          <div className="form-check">
                          {list2.map((item) => (
                            <div key={item.id}>
                              <input className="form-check-input" type="radio" name="exampleRadios" id={"check"+item.id} value={item.id} ></input>
                              <label className="form-check-label" htmlFor="exampleRadios1">
                              <p>{item.id} {item.city} {item.state} {item.neighborhood} {item.street} {item.postal_code} {item.references}</p>
                              </label>
                            </div>
                          ))}

                          <p>Cantidad de productos</p><input id="number" type="number" defaultValue="1"></input>
                          <p id='alerta' style={{color:"red",display:"none"}}>Elige una direccion o agrega una nueva</p>
                          </div>

                        
                          <div className="container" style={{textAlign:"right"}}>
                              <br></br>
                              <Button style={{marginRight:10}} variant="secondary" onClick={event =>  window.location.href='/catalogo'}>Regresar</Button>
                              <Button variant="danger" onClick={postPedido}>Escoge este regalo</Button>
                          </div><br/>

                        </div>
                    ))}
                    </Col>
                </Row>
            </div>


        <Modal show={show} size="md" >
        <Modal.Body style={{backgroundColor:"#FFF"}}>
        <div>
            <div>
                <h4 style={{fontWeight: 300,paddingTop:15}}>Pedido realizado con exito</h4>
                <p style={{fontSize:24, fontWeight:300}}>Inicia sesion para poder ver tus pedidos</p>    
            </div>
            <div className="container" style={{textAlign:"center"}}>
                <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} className="btn" onClick={event =>  window.location.href='/login'} >Volver</button>
            </div>

        </div>
        </Modal.Body>
        </Modal>

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
          


        </div>
        
    )

}
export default FragmentProductSpecific;