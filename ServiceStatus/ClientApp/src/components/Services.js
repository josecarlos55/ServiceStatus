import React, { Component } from 'react';


export class Services extends Component {
    static displayName = Services.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };

        fetch('Servico/GetServico')
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Estado</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.id}>
                            <td>{forecast.id}</td>
                            <td>{forecast.nome}</td>
                            <td>{forecast.estado}</td>
                            

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Services.renderForecastsTable(this.state.forecasts);

        return (
            <div>

                {contents}
            </div>
        );
    }
}