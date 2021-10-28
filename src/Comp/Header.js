import React from "react";
import {
  Link
} from "react-router-dom";

export function Header() {

  function logout()
  {
    localStorage.removeItem("token");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TraWander</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              {localStorage.getItem("token")?(
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/Mybooking">My Bookings</Link></li>
                </ul>
              </li>):null}

            </ul>
            
    {!localStorage.getItem("token")?(
      <>
        <Link to="login" className="btn btn-success" type="submit">Login</Link>
        <Link to="signup" className="btn btn-success mx-2" type="submit">Sign Up</Link>
        </>
    ):(<a href='/' className="btn btn-success" onClick={logout}>Logout</a>)}
          </div>
        </div>
      </nav>
    </>
  );


}
