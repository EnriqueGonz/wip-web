import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import MenuSuperAdmin from './MenuSuperAdmin';


var token = localStorage.getItem('tokenSuperAdmin');
let users = [];

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};


const SuperAdminEnviarInvitacion = () =>{
    const [list, setList] = useState([]);
    const [listcampanas, setlistcampanas] = useState([]);


    

      useEffect(() =>{  
        try {
          axios.post('https://wishesinpoints.herokuapp.com/usercampaigns/api/super-admin/all-campaigns/1/',{
            campaign_name:""
          },{ headers })
          .then((response) => {
            setlistcampanas(response.data[1]);
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setlistcampanas])
      

    function BuscarPorCampana(evt) {
        axios.get('https://wishesinpoints.herokuapp.com/usercampaigns/api/users-belonging-to-campaign/'+document.getElementById('selectCategoriaBuscar').value+'/',{headers})
          .then((response) => {
              console.log(response)
              setList(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    function agregarUser(email) {
        
        
        if(users.indexOf(email) === -1){
            users.push(email);
        }else{
            users.splice(users.indexOf(email), 1)
        }
        
    }

    function postAgregar() {
        console.log('----')

        users.forEach(function(elemento) {
            axios.post('https://wishesinpoints.herokuapp.com/emailer/api/sendgift/',{
                campaign_id:document.getElementById('selectCategoriaBuscar').value,
                email:elemento,
            },{headers})
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {
                console.log(error);
            });
            window.location.href = "/superadmin/enviar-Invitacion/"
        })
        
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
        <div className="height-100">
            <div className="container">
                    <div>
                        <h4 style={{fontWeight: 300,paddingTop:15}}>Enviar</h4>
                        <div className="row">
                                <div className="col-4">
                                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Invitaciones</h3> 
                                    
                                </div>
                            </div>
                    </div>
                    <hr style={{height: 9}}></hr>
            </div>
            
            <div className="container">
                <p>- Selecciona la campaña para ver los usuarios</p>
                <p>- Selecciona a los usuarios que decees enviarle la invitacion</p>

                <Form.Select id='selectCategoriaBuscar' onChange={BuscarPorCampana}>
                    <option value="">Buscar por campaña</option>
                    {listcampanas.map((item,index)=>(
                        <option key={index} value={item.id} >{item.campaign_name}</option>
                    ))}
                </Form.Select>
                <br></br>

                <table className="table">
                    <thead className="thead-dark" style={{backgroundColor: "#BFB3CF", color:"black"}}>
                        <tr>
                        <th scope="col">-</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item,index) => (
                                <tr key={index}>
                                    <td>
                                        <input style={{fontSize:25}} className="form-check-input" type="checkbox" onClick = {() => { agregarUser(item[0][0].email)}}  ></input> 
                                    </td>
                                    <td>
                                        {
                                            (item[1][0].image) === '' 
                                            ? <img style={{width:50}} alt='' src="https://wishesinpointsbucket.s3.amazonaws.com/assets/ProfilePic1.jpg"></img>
                                            : <img style={{width:50}} alt='' src={'https://wishesinpointsbucket.s3.amazonaws.com/'+item[1][0].image}></img>
                                        }
                                    </td>
                                    <td>
                                        {item[0][0].first_name + " "+item[0][0].last_name}
                                    </td>
                                    <td>
                                        {item[0][0].email}
                                    </td>
                                    <td>
                                        {item[1][0].phone}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className='container' style={{textAlign:"right"}}>
                    <button className="btn" style={{backgroundColor:"#7B3E90",color:"white"}} type="button" onClick = {() => { postAgregar()}} > 
                        Enviar invitacion
                    </button>
                </div>
            </div>
        </div>
        
        </>
    )

}
export default SuperAdminEnviarInvitacion;