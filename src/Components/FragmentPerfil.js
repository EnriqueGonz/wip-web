import React, {useState,useEffect} from 'react';
import { MdStars } from 'react-icons/md';
import axios from 'axios';

const baseUrl = 'https://wishesinpoints.herokuapp.com/users/api/profile/';

//const imguRL = 'https://wishesinpointsbucket.s3.amazonaws.com/';

var token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const FragmentPerfil = () =>{
    var username = localStorage.getItem('username');
    const [listName, setListName] = useState([]);
    const [listImg, setListImg] = useState([]);

    useEffect(() =>{  
        try {
          axios.get(baseUrl+username+'/',{ headers })
          .then((response) => {
            setListName(response.data[0][0]);            
            setListImg(response.data[1][0]); 

          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setListName],[setListImg])

      
    

    return(    
        <>
        <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div>
                <div className="nav_list">
                    <a href="http://localhost:3000/home" className="nav_link"> <i className='bx bx-home nav_icon'></i></a>
                    <a href="http://localhost:3000/misregalos" className="nav_link"> <i className='bx bx-gift nav_icon'></i></a> 
                    <a href="http://localhost:3000/miperfil" style={{color:"blueviolet"}} className="nav_link"> <i className='bx bx-user bx-tada nav_icon'></i></a> 
                    <a href="http://localhost:3000/misdirecciones" className="nav_link"> <i className='bx bx-directions nav_icon' ></i> </a> 
                    <a href="http://localhost:3000/logout" className="nav_link"> <i className='bx bx-log-out-circle nav_icon'></i></a> 
                </div>
            </div>
        </nav>
        </div>
        <div className="height-100">
            <div className="container">
                    <div>
                        <h4 style={{fontWeight: 300,paddingTop:15}}>Mi</h4>
                        <h3 style={{fontSize:34, fontWeight:"bold"}}>Perfil</h3>     
                    </div>
            </div>
            <div className="container" style={{backgroundColor:"#BFB3CF"}}>
                    <div className="row">
                        <div style={{paddingTop:10,paddingBottom:10}} className="col-sm">
                            <img alt="" style={{width:"80%"}} src="https://image.shutterstock.com/z/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg"></img>
                        </div>
                        <div style={{paddingTop:10,paddingBottom:10,textAlign:"center", alignSelf:"center"}} className="col-sm">
                            <h3 style={{fontSize:34, fontWeight:"bold"}}>{listName.first_name + " "+ listName.last_name}</h3> 
                        </div>
                        <div style={{paddingTop:10,paddingBottom:10,textAlign:"right"}} className="col-sm">
                            <h4 style={{fontSize:34, fontWeight:"bold"}}><MdStars style={{color:"#7B3E90"}}/>{listImg.points + " pts"}</h4>     
                        </div>
                    </div>
            </div>
            <div className="container">
                <div>
                    <h4 style={{fontWeight: 300,paddingTop:15}}>{"Correo: "+listName.email}</h4>                     
                    <div className="row">
                        <div className="col">
                            <h4 style={{fontWeight: 300,paddingTop:15}}>{"Telefono: "+listImg.phone}</h4>
                        </div>
                        <div style={{textAlign:"right"}} className="col">
                            <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} className="btn" onClick={event =>  window.location.href='/actualizar-perfil'} >Editar informacion</button>
                        </div>

                    </div>
                    </div>
                <hr style={{height: 9}}></hr>
            </div>
        </div>
        </>
    )

}
export default FragmentPerfil;