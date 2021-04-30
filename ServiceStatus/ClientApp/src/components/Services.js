import React, { Component } from 'react';

export class Services extends Component {
    static displayName = Services.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            {/*<th>Historic</th>*/}
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
                  {/*<td><td>{forecast.date}</td></td>*/}
                  {/*<td>forecast.temperatureC}</td></td>*/}
                  {/*<td>forecast.temperatureF}</td>}</td>*/}
                  {/*<td>forecast.summary}</td>}</td>*/}
              <td>{forecast.name}</td>
              <td>{forecast.status}</td>
              <td>{forecast.summary}</td>
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
        <h1 id="tabelLabel">University of Aveiro - Services</h1>
        <p>This component shows the status of the Services of the University of Aveiro </p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
