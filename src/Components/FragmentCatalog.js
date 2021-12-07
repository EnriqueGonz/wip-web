import React, { Component } from 'react';
import axios from 'axios';
import { Button,Row,Col } from 'react-bootstrap';
import { MdStars } from 'react-icons/md';
const giftUrl = 'https://ed93-2806-10ae-b-d248-3cd4-d181-119f-390a.ngrok.io/products/gift/Mw/ax8dn6-81ead6d544621ddc9da14783baa98a56/'
const headers = {
    'Content-Type': 'application/json',
};



class FragmentCatalog extends Component {    
    state = {
        user: [],
        products: []
    }

    redirection = (parametro) => {
        console.log('Hola'+ parametro);
        localStorage.setItem('producto', parametro);

        window.location.href = "/product/";
    }

    componentDidMount() {
        axios.get(giftUrl, { headers })
            .then(res => {
                const user = res.data[0];
                const products = res.data[2];
                //console.log('datas: ', res.data)
                // Save user id
                localStorage.setItem('user_id', user[0].id);
                this.setState({
                    user: user,
                    products: products
                });
            })
    }

    render() {
        // Aws S3
        const imguRL = 'https://wishesinpointsbucket.s3.amazonaws.com/';

        return (
            <div>
                <div style={{width:"100%"}}>
                <div>
                    {this.state.user.map(u =>
                    <div key={u.id} className="navbar navbar-expand-lg navbar-light navContainer" style={{backgroundColor:"#D8D8D8",justifyContent: "space-around"}}>
                                <h3>Usuario#{u.id}</h3>
                                <h3>{u.first_name} {u.last_name}</h3>
                                <h3><MdStars style={{fontSize:28,color:"#7B3E90"}}/>{u.points} Pts</h3>
                        </div>
                        )}
                </div>
            </div>
            <div>

                <h6>Productos disponibles</h6>

                <div>
                    <div className="grid-container">
                        {this.state.products.map(p =>
                        <Button style={{backgroundColor:"transparent", borderColor:"black",color:"black"}} className="content-product" onClick={() => this.redirection(p.id)}>
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