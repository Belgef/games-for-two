import { React, useState } from 'react'
import {
    useNavigate,
    useLocation,
    useParams
} from "react-router-dom";
import { v1 as uuidv1 } from 'uuid';

export function TicTacToeLobby() {
    const [username, setUsername] = useState('');
    let location = useLocation();
    let navigate = useNavigate();
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <form>
                <input type='text' placeholder='Enter your name...' onChange={(e) => setUsername(e.target.value)}></input>
            </form>
            <div>
                <button onClick={() => navigate(`${location.pathname}/create?username=${username}`)}>Create room</button>
            </div>
        </div>
    );
}

export function TicTacToeCreateRoom() {
    let room = uuidv1();
    let joinUrl = window.location.host+'/tic-tac-toe/join/'+room;

    return (
        <div>
            <h1>Create new room</h1>
            <p>Give your friend a room id: {room}</p>
            <p>Or let them join via url: <input type='url' readOnly='true' value={joinUrl} /><button onClick={()=>navigator.clipboard.writeText(joinUrl)}>Copy</button></p>
        </div>
    );
}

export function TicTacToeJoinRoom() {
    let room = useParams()

    return (
        <div>
            <h1>Room of ... ({room.id})</h1>
            <p>Waiting for host to start game</p>
        </div>
    );
}











/*

export class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.makeMove = this.makeMove.bind(this);
        this.state = { 
            grid: [...Array(3)].map(e => Array(3).fill('')),

        };
    }

    makeMove(i, j, send=false) {
        var newgrid = this.state.grid;
        //newgrid[i][j]=((!first&&send)||(first&&!send))?'X':'O';
        this.setState({ grid: newgrid })
        //if(send)
        //    socket.emit("move", i + ' ' + j)
    }

    render() {
        var rows = this.state.grid.map((item, i) => {
            var entry = item.map((element, j) => {
                return (
                    <td key={j} ><button onClick={()=>this.makeMove(i, j, true)}>{element}</button></td>
                );
            });
            return (
                <tr key={i}>{entry}</tr>
            );
        });
        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}*/