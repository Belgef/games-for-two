import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TicTacToeLobby, TicTacToeHostRoom, TicTacToeJoinRoom } from "./TicTacToe";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tic-tac-toe">
          <Route index element={<TicTacToeLobby />} />
          <Route path='host' element={<TicTacToeHostRoom />} />
          <Route path='room'>
            <Route path=':id' element={<TicTacToeJoinRoom />} />
          </Route>
          <Route path=':id' element={<TicTacToeLobby />} />
        </Route>
        <Route path="bulls-and-cows" element={<BullsCows />} />
        <Route path="hangman" element={<Hangman />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function BullsCows() {
  return (
    <h1>Bulls & Cows</h1>
  )
}
function Hangman() {
  return (
    <h1>Hangman</h1>
  )
}
function Home() {
  return (
    <h1>Home</h1>
  )
}