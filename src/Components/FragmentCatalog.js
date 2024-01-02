import React, { Component } from 'react';
import axios from 'axios';
import { Button,Row,Col } from 'react-bootstrap';
import { MdStars } from 'react-icons/md';
import '../config';

var baseUrl = global.config.wishes.inPoints.url;
var id = localStorage.getItem('id_user_invitacion');

var uuid = localStorage.getItem('uuid');
var rtoken = localStorage.getItem('rtoken');
var colorheader = localStorage.getItem('colorheader');
var nombre = localStorage.getItem('namecatalog');
var colorletra = localStorage.getItem('colorletra');
var puntos = localStorage.getItem('puntos');
var estrella = localStorage.getItem('estrella');


class FragmentCatalog extends Component {    
    state = {
        products: []
    }

    redirection = (parametro) => {
        localStorage.setItem('producto', parametro);

        window.location.href = "/product/"+parametro;
    }

    componentDidMount() {
        axios.post(baseUrl+'/products/api/get_catalog/'+id+"/",{
            product_name: '',
        })
            .then(res => {
                console.log(res);
                const products = res.data;
                this.setState({
                    products: products
                });
            })
    }

    render() {
        // Aws S3
        const imguRL = 'https://wishesinpointsbucket.s3.amazonaws.com/';

        return (
            <div>
            <div>
                <div className="navbar navbar-expand-lg navbar-light navContainer" style={{height:"8vh",justifyContent: "space-around", backgroundColor:colorheader}}>
                    <h3 style={{color:colorletra}}>{nombre}</h3>
                    <h2> </h2>
                    <h4 style={{color:colorletra}}><MdStars style={{color: estrella}}/> {puntos} pts</h4>
                    
                </div>

                <div className='row'>
                    <div className='col'>
                        <h3 style={{margin:40}}>Productos disponibles</h3>
                    </div>
                    <div className='col'>
                        <div style={{padding:40}}>
                            <button className='btn' style={{float:"right",backgroundColor:"#DC3545",color:"white"}} onClick={event =>  window.location.href='/Reedem/'+uuid+'/'+rtoken}>Volver</button>
                        </div>
                    </div>
                </div>

                <div style={{paddingBottom:40}}>
                    <div className="grid-container-products">
                        {this.state.products.map(p =>
                        <div key={p.id}>
                            <Button style={{backgroundColor:"transparent", borderColor:"black",color:"black"}} className="content-product card__content" onClick={() => this.redirection(p.id)}>
                                <div >
                                <div style={{textAlign:"center"}}>
                                    <img style={{width:200, height:200, objectFit:"cover"}} src={ imguRL + p.image } alt="products"></img>
                                </div>
                                
                                </div>
                            </Button>
                            <div>
                                <Row>
                                    <Col md={6} style={{textAlign:"left"}}>
                                    <p>{p.product_name}</p>
                                    </Col>
                                    <Col md={6} style={{textAlign:"right"}}>
                                    <p><MdStars style={{fontSize:20,color:colorheader}}/>{p.points} pts</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>

            
            </div>
            


        )
    }
}





export default FragmentCatalog;