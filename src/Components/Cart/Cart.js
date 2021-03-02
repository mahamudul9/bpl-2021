import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart= props.cart;
    const total= cart.reduce((total,player)=>total+player.salary,0);
    return (
        <div>
            <h1>View Summery</h1>
            <h4>Number of selected players: {cart.length}</h4>
            <h4>Total Budget: ${total}</h4>
            <br/>
            <h1>Your Team</h1>
            <ol>
             {cart.map(player=><li>Player: {player.name} & Salary: ${player.salary}</li>)}  
            </ol>
        </div>
    );
};

export default Cart;