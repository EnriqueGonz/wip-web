import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import imgDefault from '../images/redeemDefault.png';
import axios from 'axios';
import { Link } from 'react-router-dom';



// Se trae la lista de datos de login
const userCUrl = 'http://127.0.0.1:8000/usercampaigns/api/customercampaign/3/';
const redeemedUrl = 'http://127.0.0.1:8000/orders/api/get_index/3/';
// Aws S3
const imguRL = 'https://wishesinpointsbucket.s3.amazonaws.com/';


var token = '13a1a04f66f81b94dbb23ee191d0ede49d5c4d43';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};


const Home = () => {
    const [listCU, setListCU] = useState([]);  // List User Campaign
    const [listRG, setListRG] = useState([]); // List Redeemed Gift


    React.useEffect(() => {
        axios.all([
            axios.get(userCUrl, { headers }),
            axios.get(redeemedUrl, { headers })
        ])
            .then(axios.spread(function (uc, rg) {
                setListCU(uc.data[1]);
                setListRG(rg.data);
                console.log('uc ', uc.data[1]);
                console.log('rg ', rg.data);
            }))
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <div>
                {listCU.map((item) => (
                    <div key={item.id}>
                        <label><strong>Nombre de campaña</strong></label>
                        <br />
                        <span>{item.campaign_name}</span>
                        <br />
                        <Link to={`/campaign/${item.id}`}>Detalles</Link>

                    </div>
                ))}
            </div>

            <br /><br />
            <div>
                <ul>
                    {listRG.map((lrg, index) => (
                        <ul key={index}>
                            {lrg.map(item => (
                                <li key={item[0].id}>
                                    <p>Sólo producto</p>
                                    <br/>                                    
                                    <img style={{ width: "50%", height: 160 }} src={imguRL + item[0].image} alt="products"></img>
                                    <label><strong>Producto :</strong> </label>
                                    <span>{item[0].product_name}</span>
                                    <br />
                                    <label><strong>Producto :</strong> </label>
                                    <span>{item[0].campaign}</span>
                                    <br /><br />
                                    


                                    <p>Regalos canjeados</p>
                                    <br />
                                    
                                    <label><strong>Regalo :</strong> </label>
                                    <span>{item[0].product_name}</span>
                                    <br />
                                    <label><strong>Canjeado</strong></label>
                                    <br/>
                                    <span>{item[0].order_date}</span>
                                    <br/>
                                    <label><strong>Entregado</strong></label>
                                    <br/>
                                    <span>{item[0].date_delivery}</span>
                                    <br/>
                                    <label><strong>Status del pedido</strong></label>
                                    <br/>
                                    <span>{item[0].order_status}</span>

                                </li>
                            ))}
                        </ul>
                    ))}
                </ul>
            </div>
        </div>
    )

}
export default Home;