import React, { Component } from 'react';
import { Spring } from 'react-spring';
import { Transition, animated } from "react-spring";
import './custom1.css'
import Card from './LayoutHome/Card';
import  './LayoutHome/Cardbox.css';
export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (

            <Spring from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 0, marginTop: 0 }}
                config={{delay: 1000, duration: 1000}}>

                {props => (
                    <div style={props}>
                        <div style={c1Style}>
                            <h1>Service Status</h1>
                            <p>Com o Service Status pode:</p>
                            <li><strong>Consultar informações mais atualizadas</strong> sobre a disponibilidade dos serviços da UA.</li>
                            <li><strong>Consultar falhas</strong> de cada serviço</li>
                            <li><strong>Subscrever</strong> serviços para receber notifações acerca dos mesmos </li>
                        </div>
                        
                            <div className= "Cardbox">
                       
                           <Card titulo="Elearning" color="#354458"><img src="/images/Elearning.png" alt="" /></Card>
                            <Card titulo="Rede da Ua" color="#DE593A" > <img src="/images/UA.png" width="400" alt="" /></Card>
                                
                                <Card titulo="CodeUA" color="#E94C6F"><img src="/images/Codeua.PNG" alt="" /></Card>
                                <Card titulo="Glua" color="#73503C"><img src="/images/Glua.png" alt="" /></Card>
                                <Card titulo="Stick" color="darkBlue"> <img src="/images/stick.png" alt="" /></Card>
                                <Card titulo="PACO" color="Orange"><img src="/images/PACO.png" alt="" /></Card>

                            </div>
                        
                    </div>
                )}
            </Spring>


            

            
    );
    }
}



const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}
