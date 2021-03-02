import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div >
      <Header></Header>
      <Board></Board>  
    </div>
  );
}

export default App;
