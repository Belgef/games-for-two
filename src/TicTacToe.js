import { React, useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import { v1 as uuidv1 } from 'uuid';
import { socket } from './context/socket';

export function TicTacToeLobby() {
    let room = useParams()
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
                {room.id === undefined ? (
                    <button onClick={`${location.pathname + (location.pathname.endsWith('/') ? '' : '/')}create?username=${username}`}>Create room</button>
                ) : (
                    <button onClick={() => navigate(`/tic-tac-toe/room/${room.id}?username=${username}`)}>Join room</button>
                )}
            </div>
        </div>
    );
}

export function TicTacToeHostRoom() {
    let room = uuidv1();
    let joinUrl = window.location.host + '/tic-tac-toe/' + room;
    const [searchParams, setSearchParams] = useSearchParams();
    let username = searchParams.get("username")
    useEffect(() => {
        let s = socket()
        s.emit('join', room, username);
        s.on('gethost', id => s.emit('host', id, username));
        s.on('message', message => console.log(message));
        return () => s.disconnect();
    })

    return (
        <div>
            <h1>Create new room</h1>
            <p>Give your friend a room id: {room}</p>
            <p>Or let them join via url: <input type='url' readOnly='true' value={joinUrl} /><button onClick={() => navigator.clipboard.writeText(joinUrl)}>Copy</button></p>
        </div>
    );
}

export function TicTacToeJoinRoom() {
    let params = useParams();
    let [host, setHost] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    let username = searchParams.get("username")
    useEffect(() => {
        let s = socket()
        s.emit('join', params.id, username);
        s.on('host', message => setHost(message));
        s.on('message', message => console.log(message));
        return () => s.disconnect();
    })
    return (
        <div>
            <h1>Room of {host}</h1>
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