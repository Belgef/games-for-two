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
        <div className="card center" style={{ width: "28rem" }}>
            <div className="card-body">
                <center>
                    <h3 className="card-title font-baumans" style={{ fontWeight: "bold" }}>Tic Tac Toe</h3>
                </center>

                <div className="form-group ">
                    <input type="text" className="form-control narrow" id="username" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="tic-tac-toe-game-buttons">
                    <button className="btn btn-primary font-baumans btn-sm" style={{ margin: "0 1rem" }} onClick={() => navigate(`${location.pathname + (location.pathname.endsWith('/') ? '' : '/')}create?username=${username}`)}>Create Game</button>
                    <a href="#" className="btn btn-primary font-baumans btn-sm" style={{ margin: "0 1rem" }}>Join Game</a>
                </div>
            </div>
        </div>
    );
}

export function TicTacToeCreateRoom() {
    let room = uuidv1();
    let joinUrl = window.location.host + '/tic-tac-toe/join/' + room;

    return (
        <div>
            <div className="card center" style={{ width: "28rem" }}>
                <div className="card-body">
                    <center>
                        <h3 className="card-title font-baumans" style={{ fontWeight: "bold" }}>Tic Tac Toe Room</h3>
                    </center>

                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text font-exo narrow" id="basic-addon2" style={{ backgroundColor: "white", border: "none" }}>Game id: </span>
                        <input type="text" className="form-control font-exo narrow" placeholder="Game ID" aria-label="Recipient's username" value={room} aria-describedby="basic-addon2" />
                        <CopyButton copyValue={room} />
                    </div>

                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text font-exo narrow" id="popoverbtns" style={{ backgroundColor: "white", border: "none" }}>Or copy this link: </span>
                        <input type='text' value={joinUrl} className="form-control font-exo narrow" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <CopyButton copyValue={joinUrl} />
                    </div>

                    <center>
                        <h5 className="card-title font-baumans" style={{ fontWeight: "bold" }}>Players: </h5>
                    </center>

                    <center>
                        <table class="table" style={{ width: "20rem" }}>
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "1rem" }}>#</th>
                                    <th scope="col">Player nickname</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                </tr>
                            </tbody>
                        </table>
                    </center>

                    <div className="tic-tac-toe-game-buttons">
                        <button className="btn btn-primary btn-sm font-baumans" style={{ margin: "0 1rem" }}>Start Game</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CopyButton(props) {
    var icons = [
        (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>),
        (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
        </svg>)
    ];
    let [i, setI] = useState(0);
    return (
        <button className="input-group-text font-exo narrow" type="button" onClick={() => {
            navigator.clipboard.writeText(props.copyValue);
            setI(1);
            setTimeout(() => setI(0), 3000);
        }}>
            {icons[i]}
        </button>)
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