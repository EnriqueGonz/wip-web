import React from 'react';
import { Modal,Button,Row,Col } from 'react-bootstrap';
import {useState} from 'react';
import imgDefault from '../images/redeemDefault.png';

const FragmentReedem = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return(
      
        <div>
          <div>
              <div className="navbar navbar-expand-lg navbar-light navContainer" style={{backgroundColor:"#D8D8D8",justifyContent: "space-around"}}>
                  <h3>Usuario#120</h3>
                  <h2>Abre tu regalo</h2>
                  <h4>750 pts</h4>
              </div>
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
                    <h4>Hola usuario #120</h4>
                    <p style={{textAlign:"justify"}}>Ten un maravilloso día, puedes elejir este regalo clikeando en "Escoge este regalo" o selecciona otro de los productos de nuestro catalago <br/>Para ver otros regalos selecciona "Revisa otras opciones"</p><br/>
                    <p style={{margin:0}}>Tus amigos</p>
                    <p><b>Empresa A</b></p>
                  </Col>
                  <Col>
                    <br/>
                    <p style={{textAlign:"center"}}>Termo metalico 355 ml</p>
                    <div className="container" style={{textAlign:"center"}}>
                      <img alt="" src={imgDefault}></img>
                    </div>
                    
                  </Col>
                </Row>
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={event =>  window.location.href='/detallesProducto'}>
                Escoge este regalo
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Revisa otras opciones
              </Button>
            </Modal.Footer>
          </Modal>


        </div>
    )

}
export default FragmentReedem;