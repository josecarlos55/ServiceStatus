import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>ServiceStatus</h1>
       
       
        <p>Com o Service Status pode:</p>
        <ul>
          <li><strong>Consultar informa��es mais atualizadas</strong> sobre a disponibiliadde dos servi�os da UA.</li>
          <li><strong>Consultar falhas</strong> de cada servi�o</li>
          <li><strong>Subscrever</strong> servi�os para receber notifa��es acerca dos mesmos </li>
        </ul>
        
      </div>
    );
  }
}
