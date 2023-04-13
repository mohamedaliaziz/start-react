import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return <>


<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
  <Link className="navbar-brand fs-1 text-white fw-bold" to="/">start react</Link>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link  active text-white fw-bolder"  to="Contact">Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white fw-bolder" to="About">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white fw-bolder" to="Portfolio">Portfolio</Link>

        </li>

      </ul>
    </div>
  </div>
</nav>
  </>
    

}
