import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/cartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img src="./EVC Logo Chico.jpg" width="50" alt="Logo EVC" />
          </Link>
          <h6 clasName="estiloNumber">0</h6>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx auto">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/items">
                  Items
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/ofertas">
                  Ofertas
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/contacto">
                  Contacto
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#navbarNavAltMarkup">
                  <cartWidget/>
                </a>
                
              </li>
              
            </ul>
            
          </div>
           
        </div>
      </nav>
    </div>
  );
};
export default NavBar;