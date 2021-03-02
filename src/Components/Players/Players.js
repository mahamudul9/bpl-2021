import './Players.css';

const Players = (props) => {
    const player = props.player;    
    return (
        <div className='player'>
            <div className="player-image">
                <img src={player.img} alt="" />
            </div>
            <div className="player-details">
                <h3>{player.name}</h3>
                <h4>Salary: ${player.salary}</h4>
                <button onClick={()=>props.handleButton(player)} className='btn btn-success'>Add to Team</button>
                
            </div>


        </div>
    );
};

export default Players;