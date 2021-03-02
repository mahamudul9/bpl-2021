import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Board.css';
import data from '../../Data/data.json';
import React, { useEffect, useState } from 'react';


const Board = () => {
    const [player, setPlayer]=useState([]);
    
    useEffect(()=>{
        setPlayer(data);
    }, [])

    const [cart, setCart]=useState([]);
    const [salary, setSalary]= useState([]);
    const handleButton=(player)=>{
        const newCart= [...cart,player];
        setCart(newCart);

        const newSalary=[...salary,player.salary];
        setSalary(newSalary);
    }
    
    return (
        <div className='Board-container'>
            <div className="player-container">
                {player.map(element => <Players player={element} handleButton={handleButton}></Players>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Board;