import React from 'react';
import { MdStars } from 'react-icons/md';

const FragmentProductDetails = () =>{

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
        <div style={{paddingTop: 25,paddingLeft: 45}}>
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
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><MdStars style={{fontSize:28,color:"#7B3E90"}}/> 500 pts</td>
                <td>En camino</td>
                <td><button className="btn btn-danger" style={{borderRadius: 20,color:"white"}}>Cancelar canje</button></td>
                </tr>
            </tbody>
        </table>

            

        </div>
    </div>
        
         


        </>
    )

}
export default FragmentProductDetails;