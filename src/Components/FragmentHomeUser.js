import React, {useState,useEffect} from 'react';
import { MdStars } from 'react-icons/md';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

const baseUrl = 'https://wishesinpoints.herokuapp.com/users/api/user_datas/';
const baseUrl2 = 'https://wishesinpoints.herokuapp.com/usercampaigns/api/customercampaign/';
var token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const FragmentHomeUser = () =>{
    var id_usuario = localStorage.getItem('id_usuario');

    const [list, setList] = useState([]);
    const [listCampanas, setListCampanas] = useState([]); 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);  

    const openCampana = () => {
        var elemento1 = document.getElementById('campanas');
        var elemento2 = document.getElementById('regalos');
        var elemento3 = document.getElementById('puntos');
        elemento1.style.display = "block";
        elemento2.style.display = "none";
        elemento3.style.display = "none";
    }
    const openRegalo = () => {
        console.log('Hola');
        var elemento1 = document.getElementById('campanas');
        var elemento2 = document.getElementById('regalos');
        var elemento3 = document.getElementById('puntos');
        elemento1.style.display = "none";
        elemento2.style.display = "block";
        elemento3.style.display = "none";
    }
    const openPuntos = () => {
        console.log('Hola');
        var elemento1 = document.getElementById('campanas');
        var elemento2 = document.getElementById('regalos');
        var elemento3 = document.getElementById('puntos');
        elemento1.style.display = "none";
        elemento2.style.display = "none";
        elemento3.style.display = "block";
    }


    useEffect(() =>{  
        try {
          axios.get(baseUrl+id_usuario+'/',{ headers })
          .then((response) => {
            console.log(response);
            setList(response.data);
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
          axios.get(baseUrl2+id_usuario+'/',{ headers })
          .then((response) => {
            console.log(response);
            setListCampanas(response.data[1]);
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setListCampanas])

    const bodyCampana=(
        <div>
            <h3 style={{fontWeight:300}}>Detalles</h3>
            <h2 >Campañas</h2><br/>
                <div className="container" style={{width:"80%", float:"right"}}>
                    <h7 style={{fontWeight:"bold"}}>Nombre de la campaña</h7><br/>
                    <h7>Nombre</h7><br/><br/>

                    <h7 style={{fontWeight:"bold"}}>Inicio de la campaña</h7><br/>
                    <h7>Fecha</h7><br/><br/>

                    <h7 style={{fontWeight:"bold"}}>Fin de la campaña</h7><br/>
                    <h7>Fecha</h7><br/><br/>

                    <h7 style={{fontWeight:"bold"}}>Status de campaña</h7><br/>
                    <h7>Activa</h7><br/><br/>
                </div>
        </div>
    )

    const bodyRegalos=(
        <div>
            <h3 style={{fontWeight:300}}>Regalos</h3>
            <h2 >Canjeados</h2><br/>
                <div className="container" style={{width:"80%", float:"right"}}>
                    <h7 style={{fontWeight:"bold"}}>Fecha de canjeo</h7><br/>
                    <h7>Fecha</h7><br/><br/>

                    <h7 style={{fontWeight:"bold"}}>Fecha de entrega</h7><br/>
                    <h7>Fecha</h7><br/><br/>

                    <h7 style={{fontWeight:"bold"}}>Status de campaña</h7><br/>
                    <h7>Fecha</h7><br/><br/>
                </div>
        </div>
    )
    

    return(    
        <>
        <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div>
                <div className="nav_list">
                    <a href="http://localhost:3000/home" className="nav_link"> <i className='bx bx-home bx-tada nav_icon'></i></a>
                    <a href="http://localhost:3000/misregalos" className="nav_link"> <i className='bx bx-gift bx-tada nav_icon'></i></a> 
                    <a href="http://localhost:3000/" className="nav_link"> <i className='bx bx-user bx-tada nav_icon'></i></a> 
                    <a href="http://localhost:3000/" className="nav_link"> <i className='bx bx-directions bx-tada nav_icon' ></i> </a> 
                    <a href="http://localhost:3000/" className="nav_link"> <i className='bx bx-log-out-circle bx-tada nav_icon'></i></a> 
                </div>
            </div>
        </nav>
    </div>
    <div className="height-100">
        <div className="container">
                <div>
                    <h4 style={{fontWeight: 300,paddingTop:15}}>¡Hola!</h4>
                    <h3 style={{fontSize:34, fontWeight:"bold"}}>{list.first_name}</h3>     
                </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card bgcampana">
                        <button className="bt-cards" onClick={openCampana}>
                            <div className="card-body" style={{height:"100%"}}>
                            <h5 className="card-title" style={{position: "absolute"}}>Numero de campañas</h5>
                            <p className="card-text" style={{fontSize: "32px", fontWeight: "bold",textAlign:"right"}}>{list.campaigns}</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card bgregalos">
                    <button className="bt-cards" onClick={openRegalo}>
                        <div className="card-body" style={{height:"100%"}}> 
                            <h5 className="card-title" style={{position: "absolute"}}>Regalos canjeados</h5>
                            <p className="card-text" style={{fontSize: "32px", fontWeight: "bold",textAlign:"right"}}>{list.redeemed}</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card bgpuntos">
                    <button className="bt-cards" onClick={openPuntos}>
                            <div className="card-body" style={{height:"100%"}}>
                            <h5 className="card-title" style={{position: "absolute"}}>Puntos restantes</h5>
                            <p className="card-text" style={{fontSize: "32px", fontWeight: "bold",textAlign:"right"}}>{list.points}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <hr style={{height: 9}}></hr>

            <div id='campanas' className="container" style={{backgroundColor: "#BEEAEF", paddingBottom:30,display:"block"}}>
                <div style={{padding: 16}}>
                    <h4 style={{fontWeight: 300}}>Mis</h4>
                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Campañas</h3>
                </div>
                <div className="row">
                    {listCampanas.map((item) => (
                        <div className="col-sm-3">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.campaign_name}</h5>
                                <p className="card-text">{item.slug}</p>
                                <button className="btn btn-danger" style={{borderRadius:20}} onClick={handleShow}>Ver detalles</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id='regalos' className="container" style={{backgroundColor: "#F5BFC4", paddingBottom:30,display:"none"}}>
                <div style={{padding: 16}}>
                    <h4 style={{fontWeight: 300}}>Regalos</h4>
                    <h3 style={{fontSize:34, fontWeight:"bold"}}>canjeados</h3>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nombre de campaña</h5>
                            <p className="card-text">Descripcion</p>
                            <button className="btn btn-danger" style={{borderRadius:20}} onClick={handleShow1}>Ver detalles</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nombre de campaña</h5>
                            <p className="card-text">Descripcion</p>
                            <button className="btn btn-danger" style={{borderRadius:20}} onClick={handleShow1}>Ver detalles</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nombre de campaña</h5>
                            <p className="card-text">Descripcion</p>
                            <button className="btn btn-danger" style={{borderRadius:20}} onClick={handleShow1}>Ver detalles</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nombre de campaña</h5>
                            <p className="card-text">Descripcion</p>
                            <button className="btn btn-danger" style={{borderRadius:20}} onClick={handleShow1}>Ver detalles</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='puntos' className="container" style={{backgroundColor: "#BFB3CF", paddingBottom:30,display:"none"}}>
                <div style={{padding: 16}}>
                    <h4 style={{fontWeight: 300}}>Puntos</h4>
                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Restantes</h3>
                </div>
                <div className="container" style={{textAlign:"center"}}>
                     <h2 style={{fontSize:105}}><MdStars style={{fontSize:110,color:"#7B3E90"}}/> 750 Pts.</h2>
                </div>
            </div>



        
        </div>
    </div>
        
    <Modal  show={show} size="md" onHide={handleClose} >
        <Modal.Body style={{backgroundColor:"#BEEAEF"}}>
        {bodyCampana}
        </Modal.Body>
    </Modal>

    <Modal  show={show1} size="md" onHide={handleClose1} >
        <Modal.Body style={{backgroundColor:"#F5BFC4"}}>
        {bodyRegalos}
        </Modal.Body>
    </Modal>


        </>
    )

}
export default FragmentHomeUser;