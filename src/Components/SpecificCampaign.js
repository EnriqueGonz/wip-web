import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


// Se trae la lista de datos de login
const specificCUrl = 'http://127.0.0.1:8000/campaigns/api/specific/';
var token = '13a1a04f66f81b94dbb23ee191d0ede49d5c4d43';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};


const SpecificCampaign = () => {
    const [list, setList] = useState([]);
    var { id } = useParams(); // params  

    React.useEffect(() => {
        try {  
            axios.get(specificCUrl + id + '/', { headers })
                .then((response) => {
                    console.log(response.data);
                    setList(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.log(' . ', error);
        }
    }, [setList]);


    return (

        <div>
            <div>
                {list.map((item) => (
                    <div key={item.id}>
                        <label><strong>Nombre de campaña</strong></label>
                        <br />
                        <span>{item.campaign_name}</span>
                        <br />
                        <label><strong>Inicio de campaña</strong></label>
                        <br />
                        <span>{item.start_date}</span>
                        <br />
                        <label><strong>Fin de campaña</strong></label>
                        <br />
                        <span>{item.end_date}</span>
                        <br />
                        <label><strong>Estatus de campaña</strong></label>
                        <br />
                        <span>{item.status}</span>

                    </div>
                ))}
            </div>
        </div>
    )

}
export default SpecificCampaign;