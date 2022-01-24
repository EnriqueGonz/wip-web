import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Modal,Button } from 'react-bootstrap';

import { ReactComponent as IconInicio } from '../images/iconos/inicio.svg';
import { ReactComponent as IconRegalos } from '../images/iconos/regalos.svg';
import { ReactComponent as IconAdminPerfiles } from '../images/iconos/administrarperfiles.svg';
import { ReactComponent as IconListaProducto } from '../images/iconos/listaproductos1.svg';


const baseUrl = 'https://wishesinpoints.herokuapp.com/products/api/all_products/';
const delurl = 'https://wishesinpoints.herokuapp.com/products/api/delete/';

var token = localStorage.getItem('tokenAdmin');
const imguRL = 'https://wishesinpointsbucket.s3.amazonaws.com/';
var id_direccion = "";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};


const FragmentAdminListaProductos = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

    const [list, setList] = useState([]);

      
      function methodName(id) {
        console.log(id);
        id_direccion = id;
        handleShow();
      }

      function methodUpdate(id) {
        console.log(id);
        //window.location.href = "/update-direccion/"+id ;
        
    }

      function methodDelete() {
          console.log(id_direccion);
          axios.delete(delurl+id_direccion+'/',{headers})
          .then((response) => {
              console.log(response);
              window.location.href = "/admin/listaproducto";
          })
          .catch((error) => {
            console.log(error);
          });
      }

      useEffect(() =>{  
        try {
          axios.post(baseUrl,{
            product_name:""
          },{ headers })
          .then((response) => {
            console.log(response.data);
            setList(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setList])

    return(    
        <>
        <div className="l-navbar" style={{padding:"1rem 0rem 0 0"}} id="nav-bar">
        <nav className="nav">
            <div>
                <div className="nav_list">
                    <a href="http://localhost:3000/admin/home" className="nav_link"> <IconInicio style={{width:26,height:"100%"}}/></a>
                    <a href="http://localhost:3000/admin/regalos" className="nav_link"> <IconRegalos style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/administrarperfiles" className="nav_link"> <IconAdminPerfiles style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/listaproducto" style={{backgroundColor:"gray"}}   className="nav_link"><IconListaProducto style={{width:26,height:"100%"}}/></a> 
                </div>
            </div>
        </nav>
        </div>
        <div className="height-100">
        <div className="container">
            <br></br>
            <h4 style={{fontWeight: 300}}>Lista de</h4>
            <h3 style={{fontSize:34, fontWeight:"bold"}}>Productos</h3>
        </div>
        <div className="container">
        <table className="table">
            <thead className="thead-dark" style={{backgroundColor: "#BFB3CF", color:"black"}}>
                <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre del producto</th>
                <th scope="col">Puntos</th>
                <th scope="col">Cantidad disponible</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item,index) => (
                    <tr key={index}>
                        <td>
                            <img style={{width:60}} alt='' src={imguRL + item.image}></img>  
                        </td>
                        <td>
                            {item.product_name}
                        </td>
                        <td>
                            {item.points}
                        </td>
                        <td>
                            {item.status +"/"+ item.amount}
                        </td>
                        <td>
                            <button className="btn" style={{borderRadius: 20,color:"white",backgroundColor:"#7B3E90",marginRight:5}} onClick = {() => { methodUpdate(item.id)} } >Editar</button>
                            <button className="btn" style={{borderRadius: 20,color:"white",backgroundColor:"#E94E1B"}} onClick = {() => { methodName(item.id)}} >Eliminar</button>
                        </td>

                    </tr>
                ))}
            
            </tbody>
        </table>

            

        </div>
    </div>

        <Modal  show={show} size="md" onHide={handleClose} >
        <Modal.Body>
                <div>
                  <div className="container">
                  <h4 style={{fontWeight: 300}}>Eliminar</h4>
                  <h3 style={{fontSize:34, fontWeight:"bold"}}>Producto</h3>
              </div>
                <h5 style={{textAlign:"center"}}>¿Seguro que quieres eliminar el producto?</h5>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick = {() => {methodDelete() } } >
            Eliminar
          </Button>
        </Modal.Footer>
        </Modal>
        </>
    )

}
export default FragmentAdminListaProductos;