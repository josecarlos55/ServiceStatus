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

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped'>
                <thead>
                    
                    <tr>
                        <th>Id</th>
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

                            <button className="btn btn-primary" onClick={this.incrementCounter}> Historic </button>
                            <button className="btn btn-primary" onClick={this.incrementCounter}> Subscribe </button>
                            
                            
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