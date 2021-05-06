import React, { Component } from 'react';
import "./FooterFixed.css";

const FooterFixed = () => {
    return (
        <ul className="navbar-nav flex-grow">
            <div className="main-footer">
                <div className="page-container">
                        <h4> SERVICE STATUS UA </h4>
                        <ul className="list-unstyled">
                            <li> 3810-193 </li>
                            <li> Aveiro, Portugal </li>
                            <li> Campus Universitário de Santiago </li>
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} SERVICE STATUS | ALL RIGHTS RESERVED | TERMS OF SERVICE | PRIVACY
                            </p>
                        </ul>
                </div>
            </div>
        </ul>
    )
}

export default FooterFixed;