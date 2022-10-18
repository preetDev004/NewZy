/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <>
            
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <h2 style={{color:'white'}}><Link color='#2f66fd' className="navbar-brand" to="/general" style={{fontSize:'1.2rem'}}>NewBreaker</Link></h2>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div  style={{ fontSize: '0.1rem', color:'lightgrey' }} className="collapse navbar-collapse ul" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-1 my-1">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item mx-1 my-1">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item mx-1 my-1">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item mx-1 my-1">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item mx-1 my-1">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}