import { MdStars,MdCall,MdEmail,MdDateRange,MdDirections,MdGroups,MdWorkspaces,MdSentimentSatisfiedAlt } from 'react-icons/md';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MenuSuperAdmin from './MenuSuperAdmin';
import { Modal,Button } from 'react-bootstrap';

var token = localStorage.getItem('tokenSuperAdmin');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const SuperAdminDetallesCanje = () =>{
    var { idorder,iduser } = useParams(); // params
    const [listUserData, setlistUserData] = useState([]);
    const [listUserData1, setlistUserData1] = useState([]);
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    const [list3, setList3] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    useEffect(() =>{  
        try {
          axios.get('https://wishesinpoints.herokuapp.com/superadministrator/api/get-user/'+iduser+'/',{ headers })
          .then((response) => {
            //console.log(response.data); 
            setlistUserData(response.data[0][0])
            setlistUserData1(response.data[1][0])
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setlistUserData],[setlistUserData1])

    useEffect(() =>{  
        try {
          axios.get('https://wishesinpoints.herokuapp.com/orders/api/specific/'+idorder+'/',{ headers })
          .then((response) => {
            console.log(response.data[0][0].status);
            setList2(response.data[0][0]);
            setList(response.data[0][2][0]);
            setList3(response.data[0][1][0]);
            if(response.data[0][0].status === 'Pendiente' ||  response.data[0][0].status === 'En camino'){
                document.getElementById('boton').style.display = "block"
            }else{
                document.getElementById('boton').style.display = "none"
            }
            
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setList],[setList2],[setList3])

      function methodName(id) {
        console.log(id);
        handleShow();
      }

      function methodCancelCanje() {
        axios.put('https://wishesinpoints.herokuapp.com/orders/api/cancel/'+idorder+'/',{headers})
        .then((response) => {
            //console.log(response);
            window.location.href = "/superadmin/lista-pedidos/";
        })
        .catch((error) => {
            console.log(error);
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

        <div>
            <div className="container">
                <br></br>
                <h4 style={{fontWeight: 300}}>Detalles del</h4>
                <h3 style={{fontSize:34, fontWeight:"bold"}}>Canje</h3>
            </div>
            <div className="container" style={{backgroundColor:"#BFB3CF"}}>
                <div className="row">
                    <div style={{paddingTop:10,paddingBottom:10}} className="col-3">
                        <img alt="" style={{width:"80%"}} src={ 'https://wishesinpointsbucket.s3.amazonaws.com/' + list.image}></img>
                    </div>
                    <div style={{paddingTop:10,paddingBottom:10,textAlign:"center", alignSelf:"center"}} className="col-5">
                        <h3 style={{fontSize:34, fontWeight:"bold"}}>{list.product_name}</h3> 
                    </div>
                    <div style={{position:"relative",paddingTop:10,paddingBottom:10,textAlign:"right"}} className="col-4">
                        <h4 style={{position:"absolute",right:"5%",top:"5%",fontSize:34, fontWeight:"bold"}}><MdStars style={{color:"#7B3E90"}}/>{list.points + " pts"}</h4>     
                        <button id="boton" style={{position:"absolute",right:"5%",bottom:"5%",borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} className="btn" onClick = {() => { methodName(list2.id);} }>Cancelar canje</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div>
                <div className="row">
                    <div className="col-4">
                        <p>Datos del cliente:</p>
                        <p><span className="badge  bg-secondary" style={{display: "contents"}}><img alt="" style={{verticalAlign:"unset",width:"5%"}} src={ 'https://wishesinpointsbucket.s3.amazonaws.com/' + listUserData1.image }/></span>{" "+listUserData.first_name + " " + listUserData.last_name}</p>
    
                        <p><MdCall/>{" "+ listUserData1.phone + " "} <MdEmail/>{" "+ listUserData.email} </p>
                        <p></p>
                     
                    </div>
                    <div className="col-8">
                        <p>Datos del pedido:</p>
                        <p><MdDateRange/> <b>Pedido Realizado:</b> {list2.order_date} &nbsp;&nbsp;&nbsp;<MdDirections/> <b>Fecha de entrega</b> {list2.date_delivery}  </p>
                        <p><MdGroups/> <b>Producto de la campaña:</b> {list2.campaign}</p>
                        <p><MdWorkspaces/> <b>Cantidad: </b> {list3.amount} &nbsp;&nbsp;&nbsp;  <MdStars/> <b>Puntos gastados: </b>{list3.total_price}  </p>
                        <p></p>
                        <p><MdSentimentSatisfiedAlt/> <b>Estatus</b> {list2.status}</p>
                        
                    </div>
                </div>
            </div>
            <hr style={{height: 9}}></hr>
        </div>

        <Modal  show={show} size="md" onHide={handleClose} >
            <Modal.Body>
                <div>
                  <div className="container">
                  <h4 style={{fontWeight: 300}}>Cancelar</h4>
                  <h3 style={{fontSize:34, fontWeight:"bold"}}>Canje</h3>
                </div>
                <h5 style={{textAlign:"center"}}>¿Seguro que quieres cancelar el canje?</h5>
                            
                
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            <Button variant="danger"  onClick = {() => { methodCancelCanje()} }>Continuar</Button>
            </Modal.Footer>
        </Modal>
        
         


        </>
    )

}
export default SuperAdminDetallesCanje;