import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export class Services extends Component {
    static displayName = Services.name;
    
  
    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };

        fetch('Service/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }
     onSubmit () {
      
       const history = useHistory();
       history.push('/Historic');
    }


    incrementCounter() {
        console.log("Teste")
       
    }

   

    render() {
        //let contents = this.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <table className= 'table table-striped variant= "dark"' >
                    <thead>

                        <tr>
                            
                            <th>Name</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>

                        
                        {this.state.forecasts.map(forecast => {
                            console.log(forecast);
                            return <tr key={forecast.id}>
                                
                                <td>{forecast.nome}</td>
                                <td>{forecast.estado}</td>
                              
                                <td><NavLink exact activeClassName="active" to="/Historic"> Historic </NavLink></td>

                                <td><button className="btn btn-primary" onClick={this.incrementCounter}> Subscribe </button></td>


                            </tr>
                        })}
                    </tbody>
                </table>
            </div>  
        );
    }

}

