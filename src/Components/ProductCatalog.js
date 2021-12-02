import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


const catalogtUrl = 'http://127.0.0.1:8000/products/api/get_catalog/';
const headers = {
    'Content-Type': 'application/json',
};

let product_name = "";

class ProductCatalog extends Component {

    state = {
        products: [],
    }

    componentDidMount() {
        axios.post(catalogtUrl, { product_name: product_name }, { headers })
            .then(res => {
                const products = res.data
                //console.log('datas: ', res.data)
                this.setState({
                    products: products
                });
            })
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        product_name = value;
    }


    SubmitName = (event) => {
        event.preventDefault();
        this.componentDidMount();
    }


    render() {
        // Aws S3
        const imguRL = ''; //'https://wishesinpointsbucket.s3.amazonaws.com/';

        return (
            <div>
                <h6>Buscar</h6>
                <form onSubmit={this.SubmitName}>
                    <label>
                        <input
                            type="text"
                            name="product_name"
                            value={this.product_name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" />
                </form>
                <br />
                <h6>Datos del usuario</h6>
                <ul>
                    {this.state.products.map(p =>
                        <ul key={p.id}>
                            <p>Id: {p.id}</p>
                            <p>Producto: {p.product_name}</p>

                            <Link to={`/producto/${p.id}`} className="btn btn-primary" id={p.id}>{p.product_name}</Link>
 
                            <p>Precio {p.points}</p>
                            <img src={imguRL + p.image} alt="products"></img>
                            <p>Descripción: {p.description}</p>
                        </ul>
                    )}
                </ul>
            </div>
        )
    }
}

export default ProductCatalog;