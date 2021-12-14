import React, { useState,useEffect } from 'react';
import { Button,Row,Col } from 'react-bootstrap';
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
var product_campain =0;
var product_points =0;
var product_id = 0;
var tiempoTranscurrido = Date.now();
var user_points=0;
const hoy = new Date(tiempoTranscurrido);

const FragmentProductSpecific = () =>{
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);

 
  useEffect(() =>{
    axios.get(giftUrl, { headers })
      .then((response) => {
        console.log(response.data[0]);
        product_id = response.data[0]["id"];
        product_campain = response.data[0]["campaigns_id"];
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
    const urlPedido = baseurl+'/orders/api/order/';

    if(user_points >= costo){
      console.log('Se puede comprar')
      axios.post(urlPedido,{
        user: user_id,
        useraddresses: '1',
        campaigns: product_campain,
        date_delivery: hoy.toLocaleDateString(), // This field will be sent empty
        status: 'Pendiente', // The default value of this field is "Pendiente"
        products: product_id,
        amount: document.getElementById("number").value
      }, headers)
      .then((response) => {
          console.log('Status code: '+response.status);
      })
      .catch(err => console.log(err));  
      
    }else{
      console.log('No puede comprar')
    }
  }
  







  
    return(
      
        <div>
            <div className="container" style={{paddingTop:40, width:"65%"}}>
                <Row>

                    <Col>
                    {list.map((item) => (
                    <div key={item.id} className="container">
                        <img className="imagentest" alt="" src={"https://wishesinpointsbucket.s3.amazonaws.com/"+item.image}></img>
                    </div>
                    ))}
                    </Col>
                    <Col>
                    {list.map((item) => (
                        <div key={item.id}>
                          <h4>{item.product_name}</h4>
                          <p style={{textAlign:"justify"}}>{item.description}</p>
                          <p style={{textAlign:"end"}}><MdStars style={{fontSize:28,color:"#7B3E90"}}/>{item.points} puntos</p>
                          <p>Agregar mas producto</p><input id="number" type="number" defaultValue="1"></input>

                          <p>Escoge direccion</p>
                          {list2.map((item) => (
                            <div key={item.id}>
                              <input  type="checkbox" value={item.id}  name="check" /><p>{item.id} {item.city} {item.state} {item.neighborhood} {item.street} {item.postal_code} {item.references}</p>
                            </div>
                          ))}

                          <div className="container" style={{textAlign:"right"}}>
                              <Button variant="secondary" >Regresar</Button>
                              <Button variant="danger" onClick={postPedido}>Escoge este regalo</Button>
                          </div>
                        </div>
                    ))}
                    </Col>
                </Row>
            </div>
          


        </div>
        
    )

}
export default FragmentProductSpecific;