import React, {useState,useEffect} from 'react';
import { Modal,Button,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const giftUrl = 'https://wishesinpoints.herokuapp.com/products/gift/';
const headers = {
    'Content-Type': 'application/json',
};


const FragmentReedem = () =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  const [list, setList] = useState([]); 
  const [listproducts, setlistproducts] = useState([]); 

  var { uuid } = useParams(); // params
  var { rtoken } = useParams(); // params 
  useEffect(() =>{  
    try {
      axios.get(giftUrl + uuid + '/' + rtoken + '/', { headers })
      .then((response) => {
        console.log(response);
        localStorage.setItem('uuid',uuid);
        localStorage.setItem('rtoken',rtoken);
        setList(response.data[0]);
        localStorage.setItem('id_user_invitacion',response.data[0][0]["id"]);
        setlistproducts(response.data[3][0]);
      })
      .catch((error) => {
        console.log(error);
      });

    } catch (error) {
      console.log(' . ', error);
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  },[setList],[setlistproducts]);

  function methodName() {
    console.log(listproducts.id);
    localStorage.setItem('producto', listproducts.id);
    window.location.href = "/product/"+listproducts.id;
}

    return(
      
        <div>
          <div>
              {list.map((item) => (
                <div key={item.id} className="navbar navbar-expand-lg navbar-light navContainer" style={{backgroundColor:"#D8D8D8",justifyContent: "space-around"}}>
                  <h3>Hola {item.first_name}</h3>
                  <h2>{listproducts.campaign_name}</h2>
                  <h4>{item.points} pts</h4>
                </div>
              ))}
          </div>
          <div className="background-reedem">
            <div className="container">
              <button className="btn btn-info" style={{position:"absolute", right:"5%",bottom:"5%", fontWeight:700,color:"white"}} onClick={handleShow} >Abrir</button>
            </div>
          </div>

          <Modal show={show} size="lg" onHide={handleClose}>
            <Modal.Body>
              <div>
                <h3 style={{textAlign:"center"}}>Has recibido un regalo de la empresa "A"</h3>
              </div>
              <div className="container">
                <Row>
                  <Col>
                    <br/><br/><br/>
                    {list.map((item) => (
                        <h3 key={item.id}>Hola {item.first_name}</h3>
                    ))}
                    <p style={{textAlign:"justify"}}>Ten un maravilloso día, puedes elejir este regalo clikeando en "Escoge este regalo" o selecciona otro de los productos de nuestro catalago <br/>Para ver otros regalos selecciona "Revisa otras opciones"</p><br/>
                    <p style={{margin:0}}>Tus amigos</p>
                    <p><b>Empresa A</b></p>
                  </Col>
                  <Col>
                    <br/>
                    <p style={{textAlign:"center"}}>{listproducts.product_name}</p>
                    <div className="container" style={{textAlign:"center"}}>
                      <img alt="" style={{width:"100%"}} src={"https://wishesinpointsbucket.s3.amazonaws.com/"+listproducts.image}></img>
                    </div>
                    
                  </Col>
                </Row>
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick = {() => { methodName()} } >
                Escoge este regalo
              </Button>
              <Button variant="danger" onClick={event =>  window.location.href='/catalogo'}>
                Revisa otras opciones
              </Button>
            </Modal.Footer>
          </Modal>


        </div>
    )

}
export default FragmentReedem;