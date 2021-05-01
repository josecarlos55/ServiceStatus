import React, { Component } from 'react';







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
                    {forecasts.map(forecast => {


                        return <tr key={forecast.Id}>
                            <td>{forecast.Id}</td>
                            <td>{forecast.Nome}</td>
                            <td>{forecast.Estado}</td>


                        </tr>
                    })}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = Services.renderForecastsTable(this.state.forecasts);

        return (
            <div>

                {contents}
            </div>
        );
    }
}