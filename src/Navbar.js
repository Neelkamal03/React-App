import './App.css'
import PropTypes from 'prop-types'
import App from './App';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar bg-body-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand">{props.title}</a>
    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        <Link className="nav-link" to='/About'>About</Link>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable mode</label>
</div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"Set title name"
}
