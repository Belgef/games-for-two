import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid">
          <Link className="navbar-brand font-exo" to="/">Games for two</Link>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link font-exo" to="/tic-tac-toe">Tic Tac Toe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-exo" to="/bulls-and-cows">Bulls & Cows</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-exo" to="/hangman">Hangman</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}