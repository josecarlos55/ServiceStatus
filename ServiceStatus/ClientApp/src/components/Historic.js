import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export class Historic extends Component {
    static displayName = Historic.name;


    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };

        fetch('Service/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }
    onSubmit() {

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
                <table className='table table-striped variant= "dark"' >
                    <thead>

                        <tr>

                            <th>Falha</th>
                            <th>Serviço</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>


                        {this.state.forecasts.map(forecast => {
                            console.log(forecast);
                            return <tr key={forecast.idfalha, forecast.idservico}>

                                <td>{forecast.idfalha}</td>
                                <td>{forecast.idservico}</td>
                                <td>{forecast.datafalha}</td>

                                


                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

