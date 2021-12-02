import React, { Component } from 'react';
import axios from 'axios';


const giftUrl = 'http://127.0.0.1:8000/products/gift/Mw/awz9rq-1506e8bdce9fb54b70e214c4bce92187/'
const headers = {
    'Content-Type': 'application/json',
};


class GiftInvitation extends Component {
    state = {
        user: [],
        products: []
    }

    componentDidMount() {
        axios.get(giftUrl, { headers })
            .then(res => {
                const user = res.data[0];
                const products = res.data[1];
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
                <h6>Datos del usuario</h6>
                <ul>
                    <ul>
                        {this.state.user.map(u =>
                            <ul key={u.id}>
                                <p>Id: {u.id}</p>
                                <p>Nombre completo: {u.first_name}</p>
                                <p>Apellidos: {u.last_name}</p>
                                <p>Correo: {u.email}</p>
                                <p>Puntos: {u.points}</p>
                            </ul>
                        )}
                    </ul>
                </ul>

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

export default GiftInvitation;