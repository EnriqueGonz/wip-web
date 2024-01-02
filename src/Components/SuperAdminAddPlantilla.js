import React, {useState} from 'react';
import { Form,Button,Row,Col,Modal } from 'react-bootstrap';
import axios from 'axios';
import MenuSuperAdmin from './MenuSuperAdmin';
import { PhotoshopPicker   } from 'react-color';
import '../config';

var baseUrl = global.config.wishes.inPoints.url;
var token = localStorage.getItem('tokenSuperAdmin');

const headers = {
    'Authorization': `Token ${token}`,
    "Content-Type": "multipart/form-data"
};

const SuperAdminAddPlantilla = () =>{
    const [color, setColor] = useState('#ffffff');
    const [selectedFile, setSelectedFile] = useState("");

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);  

    const [inputsPlantilla, setinputsPlantilla] = useState({
        template_name: "", 
        primary_color: "",
        secondary_color: "",
        color_header: "",
        color_footer: "",
        description: "",
    })

    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        //console.log(name + value)
        setinputsPlantilla(values => ({ ...values, [name]: value }))
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
      }

    const submitPlantilla = (event) => {
        event.preventDefault()
        let formData = new FormData();
        
        
        formData.append('avatar', selectedFile)
        formData.append('template_name', inputsPlantilla.template_name)
        formData.append('primary_color', inputsPlantilla.primary_color)
        formData.append('secondary_color', inputsPlantilla.secondary_color)
        formData.append('color_header', inputsPlantilla.color_header)
        formData.append('color_footer', inputsPlantilla.color_footer)

        formData.append('description', inputsPlantilla.description)
        
        
        axios.post(baseUrl+'/plantillas/api/register/', 
        formData    
        ,{headers})
        .then((response) => {
            //console.log(response);
            window.location.href= '/superadmin/lista-plantillas/'

        })
        .catch(err => {
            if(err.response.status === 409){
                //console.log(err.response.status)
                handleShow1();
            }else{
                console.log(err.response.status)
            }
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
        <div className="height-100">
            <div className="container">
                <div>
                    <h4 style={{fontWeight: 300,paddingTop:15}}>Crear</h4>
                    <div className="row">
                        <div className="col">
                            <h3 style={{fontSize:34, fontWeight:"bold"}}>Nueva plantilla</h3> 
                        </div>
                    </div>
                </div>
                <hr style={{height: 9}}></hr>
            </div>

            <div className="container" style={{paddingBottom:80}}>
                <div className='container' style={{width:"85%"}}>
                    <div className='row'>
                        <div className='col-8'>
                            <PhotoshopPicker    color={color} onChangeComplete={ (color) => {setColor(color.hex)} }/>
                        </div>
                        <div className='col-4' style={{backgroundColor:color,display:"flex"}}>
                            <h4 style={{margin:"auto"}}>{color}</h4>

                        </div>

                    </div>

                </div>

            <div className='container' style={{width:"85%", marginTop:"50px"}}>
                <Form onSubmit={submitPlantilla}>
                    <Row>
                        <Form.Label>Background:</Form.Label>
                        <input type="file" onChange={handleFileSelect}/><br></br><br></br>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Nombre de la plantilla</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="template_name" value={inputsPlantilla.template_name} onChange={handleChange}  />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Color del Header:</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="color_header" defaultValue="#000000" value={inputsPlantilla.color_header} onChange={handleChange} />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Color de Letras:</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="primary_color" defaultValue="#000000" value={inputsPlantilla.primary_color} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                        <Form.Label>Color de estrella y boton:</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="secondary_color" defaultValue="#000000" value={inputsPlantilla.secondary_color} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control style={{backgroundColor:"#BFBFBF",borderRadius:20}} required type="text" name="description" value={inputsPlantilla.description} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Button style={{marginLeft:20,border:"none",float:"right",borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} type="button" onClick={submitPlantilla}>
                    Crear
                    </Button>
                </Form>  
            </div>

            </div>
            
        </div>

        <Modal show={show1} size="md" onHide={handleClose1} >
        <Modal.Body style={{backgroundColor:"#FFF"}}>
        <div>
        <div>
            <h4 style={{fontWeight: 300,paddingTop:15}}>Upsss...</h4>
            <h3 style={{fontSize:34, fontWeight:"bold"}}>Error</h3> 
            <p style={{fontSize:24, fontWeight:300}}>Ese nombre de plantilla ya esta en uso</p>    
        </div>

        </div>
            </Modal.Body>
        </Modal>
        </>
    )

}
export default SuperAdminAddPlantilla;