import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import imgDefault from '../images/redeemDefault.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const baseUrl = 'https://wishesinpoints.herokuapp.com';
const profileUrl = baseUrl + '/users/api/profile/';
// Aws S3
const imguRL = 'https://wishesinpointsbucket.s3.amazonaws.com/';

// '651f702614801bcf36692b0e8e995cd3' // Sólo prueba
var token = 'b677a5ccac9cace57ba26b29c8ee393706436114';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const Profile = () => {
    const [list, setList] = useState([]);
    const [listUser, setListUser] = useState([]);
    const [listProfile, setListProfile] = useState([]);
    const [listAddress, setListAddress] = useState([]);

    var { username } = useParams(); // params

    React.useEffect(() => {
        try {
            axios.get(profileUrl + username + '/', { headers })
                .then((response) => {
                    console.log(response.data);
                    setList(response.data);
                    setListUser(response.data[0]); // user datas
                    setListProfile(response.data[1]); // profile datas
                    setListAddress(response.data[2]); // address datas
                })
                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.log(' error ', error);
        }
    }, []);


    return (
        <div>
            <div>
                <div>
                    {/* Profile */}
                    {list.map((item, index) => (
                        <div key={index}>
                            <span>{index}</span>
                            <br />
                        </div>

                    ))}
                </div>

                <div>
                    {/* Profile */}
                    {listProfile.map((item) => (
                        <div key={item.id}>
                            <img style={{ width: "50%", height: 160 }} src={imguRL + item.image} alt="profile"></img>
                            <br />

                        </div>
                    ))}
                </div>

                <div>
                    {/* User */}
                    {listUser.map((item) => (
                        <div key={item.id}>
                            <p>{item.email}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )

}
export default Profile;