import React, { Component } from 'react';
import axios from 'axios';


const specifictUrl = 'http://127.0.0.1:8000/products/api/specific_product/';
const headers = {
    'Content-Type': 'application/json',
};


class SpecificProduct extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        let productId = this.props.match.params.id;

        axios.get(specifictUrl + productId + '/', { headers })
            .then(res => {
                const products = res.data;
                //console.log('datas: ', res.data)
                this.setState({
                    products: products
                });
            })
    }


    render() {
        // Aws S3
        const imguRL = ''; //'https://wishesinpointsbucket.s3.amazonaws.com/';

        return (
            <div>
                <h6>Datos del producto</h6>
                
                <ul>
                    {this.state.products.map(p =>
                    <ul key={p.id}>
                        <p>Id: {p.id}</p>
                        <p>Producto: {p.product_name}</p>
                        <p>Precio {p.points}</p>
                        <img src={ imguRL + p.image } alt="products"></img>
                        <p>Descripción: {p.description}</p>
                    </ul>
                    )}
                </ul>
                
            </div>
        )
    }
}

export default SpecificProduct;