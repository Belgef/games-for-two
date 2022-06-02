import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Games for two</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/bulls-and-cows">Bulls & Cows</Link>
          </li>
          <li>
            <Link to="/hangman">Hangman</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}