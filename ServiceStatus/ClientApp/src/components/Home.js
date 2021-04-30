import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>ServiceStatus</h1>
       
       
        <p>Com o Service Status pode:</p>
        <ul>
          <li><strong>Consultar informações mais atualizadas</strong> sobre a disponibiliadde dos serviços da UA.</li>
          <li><strong>Consultar falhas</strong> de cada serviço</li>
          <li><strong>Subscrever</strong> serviços para receber notifações acerca dos mesmos </li>
        </ul>
        
      </div>
    );
  }
}
