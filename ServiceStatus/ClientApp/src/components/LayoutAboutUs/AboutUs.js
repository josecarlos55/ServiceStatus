import React, { Component } from 'react';
import Card from '../LayoutHome/Card';
import "./AboutUs.css";

export class AboutUs extends Component {
  static displayName = AboutUs.name;



  

  render() {
    return (
        <div className="float-container">
          
            <div className="float-child">
                <Card titulo="Eleandro Laureano">
                    <img src="/images/eleandrofoto3.jpg" />
                    <li>Developer</li>
                    <li>Java</li>
                    <li>Reactjs Developer</li>
                </Card>
            </div>
            <div className="float-child" >
                <Card titulo="Jos� Carlos">
                    <img src="/images/joselindao.jpg" />
                    <li>Team Manager</li>
                    <li>Reactjs Developer</li>
                    <li>Java</li>
                </Card>
            </div>
            <div className="float-child" >
                <Card titulo="Gon�alo Pereira">
                    <img src="/images/gon.jpg" />
                    <li>Developer</li>
                    <li>SQL Manager</li>
                    <li>Python and Java</li>
                </Card>
            </div>
            <div className="float-child" >
                <Card titulo="Fred Av�">
                    <img src="/images/fred.jpg" />
                    <li>Team Manager</li>
                    <li>SQL Manager</li>
                    <li>Java</li>
                </Card>
            </div>
           
            
            
        </div>
    );
  }
}
