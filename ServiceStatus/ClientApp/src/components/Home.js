import React, { Component } from 'react';
import { Spring } from 'react-spring';
import { Transition, animated } from "react-spring";

import './custom1.css'

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
                        <div>
                            <div>
                                <img src="/images/UA.png" width="400" alt="" />
                                <img src="/images/Elearning.png" alt="" />

                                <img src="/images/Codeua.PNG" alt="" />
                                <img src="/images/Glua.png" alt="" />
                                <img src="/images/stick.png" alt="" />
                                <img src="/images/PACO.png" alt="" />
                            </div>
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
