import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from './../logo.svg';

import './NavBar.css';


export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="navbar-brand logo-image" src={logo} alt="Logo React" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/posts">My Posts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
