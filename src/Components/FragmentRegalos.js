import { MdStars } from 'react-icons/md';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

const baseUrl = 'https://wishesinpoints.herokuapp.com/orders/api/get_index_customer/';
const imguRL = 'https://wishesinpointsbucket.s3.amazonaws.com/';

var token = localStorage.getItem('token');
var id_usuario = localStorage.getItem('id_usuario');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const FragmentProductDetails = () =>{
    const [list, setList] = useState([]);
    const [ListInfo, setListInfo] = useState([]);
    const [ListIds, setListIds] = useState([]);
    

    function methodName(id) {
        console.log(id);
        window.location.href = "/detallescanje/"+id;
      }

    useEffect(() =>{  
        try {
          axios.get(baseUrl+id_usuario+'/',{ headers })
          .then((response) => {
            console.log(response);
            setListInfo(response.data[1]);
            setListIds(response.data[2]);
            setList(response.data[3]);

          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setList],[setListInfo],[setListIds])

    return(    
        <>
        <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div>
                <div className="nav_list">
                    <a href="http://localhost:3000/home" className="nav_link"> <i className='bx bx-home nav_icon'></i></a>
                    <a href="http://localhost:3000/misregalos" style={{color:"blueviolet"}} className="nav_link"> <i className='bx bx-gift bx-tada nav_icon'></i></a> 
                    <a href="http://localhost:3000/miperfil" className="nav_link"> <i className='bx bx-user nav_icon'></i></a> 
                    <a href="http://localhost:3000/misdirecciones" className="nav_link"> <i className='bx bx-directions nav_icon' ></i> </a> 
                    <a href="http://localhost:3000/logout" className="nav_link"> <i className='bx bx-log-out-circle nav_icon'></i></a> 
                </div>
            </div>
        </nav>
    </div>
    <div className="height-100">
        <div className="container">
            <br></br>
            <h4 style={{fontWeight: 300}}>Regalos</h4>
            <h3 style={{fontSize:34, fontWeight:"bold"}}>Canjeados</h3>
        </div>
        <div className="container">
        <table className="table">
            <thead className="thead-dark" style={{backgroundColor: "#BFB3CF", color:"black"}}>
                <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre del producto</th>
                <th scope="col">Fecha de canje</th>
                <th scope="col">Puntos del producto</th>
                <th scope="col">Estatus</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
            {ListIds.map((item, index) => (
                <tr key={index}>
                    {list.map((datosProducto) => (
                        item.products_id === datosProducto.id
                        ? (<><td ><img  alt="" style={{width:60}} src={ imguRL + datosProducto.image }></img></td><td >{datosProducto.product_name}</td>
                            {ListInfo.map((datosEntrega) => (
                                item.orders_id === datosEntrega.id
                                ? (<><td >{datosEntrega.order_date}</td></>)
                                :null
                            ))}
                            <td ><MdStars style={{fontSize:28,color:"#7B3E90"}}/>{datosProducto.points}</td>
                            {ListInfo.map((datosEntrega) => (
                                item.orders_id === datosEntrega.id
                                ? (<><td>{datosEntrega.status}</td></>)
                                :null
                            ))}
                            <td><button className="btn btn-danger" style={{borderRadius: 20,color:"white"}} onClick = {() => { methodName(item.orders_id);} } >Ver detalle</button></td>
                        </>)
                        : null
                    
                    
                    ))}

                    
                     


                    
                </tr>
            ))}
            </tbody>
        </table>

            

        </div>
    </div>
        
         


        </>
    )

}
export default FragmentProductDetails;