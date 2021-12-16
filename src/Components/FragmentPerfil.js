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

            console.log(response);
            setListName(response.data[0]);            
            setListImg(response.data[1]);                  

            console.log(response.data[1]);

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
                    <a href="http://localhost:3000/home" className="nav_link"> <i className='bx bx-home bx-tada nav_icon'></i></a>
                    <a href="http://localhost:3000/misregalos" className="nav_link"> <i className='bx bx-gift bx-tada nav_icon'></i></a> 
                    <a href="http://localhost:3000/miperfil" className="nav_link"> <i className='bx bx-user bx-tada nav_icon'></i></a> 
                    <a href="http://localhost:3000/" className="nav_link"> <i className='bx bx-directions bx-tada nav_icon' ></i> </a> 
                    <a href="http://localhost:3000/" className="nav_link"> <i className='bx bx-log-out-circle bx-tada nav_icon'></i></a> 
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
                {listName.map((item,index1) => (
                    <div key={index1} className="row">
                        <div style={{paddingTop:10,paddingBottom:10}} className="col-sm">
                            {listImg.map((dato,index) => (
                                <>
                                <img key={index} alt="" style={{width:"80%"}} src="https://image.shutterstock.com/z/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg"></img>
                                </>
                            ))}
                        </div>
                        <div style={{paddingTop:10,paddingBottom:10,textAlign:"center", alignSelf:"center"}} className="col-sm">
                            <h3 style={{fontSize:34, fontWeight:"bold"}}>{item.first_name + " "+ item.last_name}</h3> 
                        </div>
                        <div style={{paddingTop:10,paddingBottom:10,textAlign:"right"}} className="col-sm">
                            {listImg.map((dato,index) => (
                                <>
                                <h4 key={index} style={{fontSize:34, fontWeight:"bold"}}><MdStars style={{color:"#7B3E90"}}/>{dato.points + " pts"}</h4>     
                                
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="container">
                    <div>
                        {listName.map((dato,index) => (
                                <>
                                <h4 key={index} style={{fontWeight: 300,paddingTop:15}}>{"Correo: "+dato.email}</h4>
                                </>
                        ))}                        
                            <div className="row">
                                <div className="col">
                                {listImg.map((dato,index) => (
                                    <>
                                        <h4 key={index} style={{fontWeight: 300,paddingTop:15}}>{"Telefono: "+dato.phone}</h4>
                                    </>
                                ))}
                                </div>
                                <div style={{textAlign:"right"}} className="col">
                                    <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} className="btn" >Actualizar informacion</button>
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