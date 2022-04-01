import React, { Component } from 'react';
import axios from 'axios';
import { Button,Row,Col } from 'react-bootstrap';
import { MdStars } from 'react-icons/md';

const giftUrl = 'https://wishesinpoints.herokuapp.com/products/api/get_catalog/';
var id = localStorage.getItem('id_user_invitacion');



class FragmentCatalog extends Component {    
    state = {
        products: []
    }

    redirection = (parametro) => {
        console.log('Hola'+ parametro);
        localStorage.setItem('producto', parametro);

        window.location.href = "/product/"+parametro;
    }

    componentDidMount() {
        axios.post(giftUrl+id+"/",{
            product_name: '',
        })
            .then(res => {
                const products = res.data;
                console.log(res)
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

                <h6>Productos disponibles</h6>

                <div>
                    <div className="grid-container-products">
                        {this.state.products.map(p =>
                        <Button style={{backgroundColor:"transparent", borderColor:"black",color:"black"}} className="content-product card__content" onClick={() => this.redirection(p.id)}>
                            <div key={p.id}>
                            <div style={{textAlign:"center"}}>
                                <img style={{width:"50%", height:160}} src={ imguRL + p.image } alt="products"></img>
                            </div>
                            <div>
                                <Row>
                                    <Col md={6} style={{textAlign:"left"}}>
                                    <p>{p.product_name}</p>
                                    </Col>
                                    <Col md={6} style={{textAlign:"right"}}>
                                    <p><MdStars style={{fontSize:20,color:"#7B3E90"}}/>{p.points} pts</p>
                                    </Col>
                                </Row>
                            </div>
                            </div>
                        </Button>
                        )}
                    </div>
                </div>
            </div>

            
            </div>
            


        )
    }
}





export default FragmentCatalog;