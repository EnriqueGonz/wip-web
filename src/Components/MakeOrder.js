import React, { Component } from 'react';
import axios from 'axios';


const addressupUrl = 'http://127.0.0.1:8000/orders/api/order/';
const headers = {
    'Content-Type': 'application/json',
};

let userId = 2; // Integer
let useraddressesId = 4; // Integer
let campaignsId = 1; // Integer
let productsId = 4; // Integer
let amountP = 3; // Integer

// These data are not saved in the database,
// These are only to validate if the user has the necessary points to place the order.
let totalPrice = 0; // Integer
let unitPrice = 16; // Integer
let pointsUser = 1700; // Integer


function MakeOrder() {
    const handleSubmit = (event) => {
        event.preventDefault();

        totalPrice = (amountP * unitPrice);

        if (totalPrice < pointsUser ) {
            axios.post(addressupUrl, {
                user: userId,
                useraddresses: useraddressesId,
                campaigns: campaignsId,
                date_delivery: '', // This field will be sent empty
                status: 'Pendiente', // The default value of this field is "Pendiente"
                products: productsId,
                amount: amountP
            }, headers)
                .then((response) => {
                    console.log(response.data);
                })
                .catch(err => console.log(err));         
        } else {
            console.log('No cuenta con suficiente punto para realizar la compra.')            
        }
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>Comprar</div>
            <input type="submit" />

        </form>
    );
}
export default MakeOrder;