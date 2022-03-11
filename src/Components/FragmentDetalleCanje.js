import { MdStars } from 'react-icons/md';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = 'https://wishesinpoints.herokuapp.com/orders/api/specific/';
const imguRL = 'https://wishesinpointsbucket.s3.amazonaws.com/';

var token = localStorage.getItem('token');


const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const FragmentDetalleCanje = () =>{
    var { idproduct } = useParams(); // params
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);

    function methodName(id) {
        console.log(id);
        window.location.href = "/cancelarcanje/"+id;
      }

    useEffect(() =>{  
        try {
          axios.get(baseUrl+idproduct+'/',{ headers })
          .then((response) => {
            console.log(response.data[0][0]);
            console.log(response.data[0][2][0]);
            setList2(response.data[0][0]);
            setList(response.data[0][2][0]);
            
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setList],[setList2])

    return(    
        <>
        <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div>
                <div className="nav_list">
                    <a href="http://localhost:3000/admin/home" className="nav_link"> <i className='bx bx-home nav_icon'></i></a>
                    <a href="http://localhost:3000/admin/regalos" style={{color:"blueviolet"}} className="nav_link"> <i className='bx bx-gift bx-tada nav_icon'></i></a> 
                    <a href="http://localhost:3000/admin/" className="nav_link"> <i className='bx bx-user nav_icon'></i></a> 
                    <a href="http://localhost:3000/admin/" className="nav_link"> <i className='bx bx-directions nav_icon' ></i> </a> 
                    <a href="http://localhost:3000/admin/" className="nav_link"> <i className='bx bx-log-out-circle nav_icon'></i></a> 
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
                <div style={{paddingTop:10,paddingBottom:10}} className="col-4">
                    <img alt="" style={{width:"80%"}} src={ imguRL + list.image}></img>
                </div>
                <div style={{paddingTop:10,paddingBottom:10,textAlign:"center", alignSelf:"center"}} className="col-4">
                    <h3 style={{fontSize:34, fontWeight:"bold"}}>{list.product_name}</h3> 
                </div>
                <div style={{paddingTop:10,paddingBottom:10,textAlign:"right"}} className="col-4">
                    <h4 style={{fontSize:34, fontWeight:"bold"}}><MdStars style={{color:"#7B3E90"}}/>{list.points + " pts"}</h4>     
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div>
            <p style={{fontSize:"1.5rem", fontWeight: 300,paddingTop:15}}><b style={{fontWeight: 700}}>Fecha de canje: </b>{list2.order_date}</p>
            <p style={{fontSize:"1.5rem", fontWeight: 300,paddingTop:15}}><b style={{fontWeight: 700}}>Fecha de entrega: </b>{list2.date_delivery}</p>
            <p style={{fontSize:"1.5rem", fontWeight: 300,paddingTop:15}}><b style={{fontWeight: 700}}>Status: </b>{list2.status}</p>
            <div className="row">
                <div className="col">
                    <p style={{fontSize:"1.5rem", fontWeight: 300,paddingTop:15}}><b style={{fontWeight: 700}}>Status: </b>{list2.status}</p>
                </div>
                <div style={{textAlign:"right"}} className="col">
                    <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} className="btn" onClick = {() => { methodName(list2.id);} }>Cancelar canje</button>
                </div>
            </div>
        </div>
        <hr style={{height: 9}}></hr>
    </div>
        
         


        </>
    )

}
export default FragmentDetalleCanje;