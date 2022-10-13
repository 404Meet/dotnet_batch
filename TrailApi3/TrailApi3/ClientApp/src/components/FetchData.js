import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = { forecasts: [], loading: true };
  }

 
    componentDidMount() {
        this.populateWeatherData()
}

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td key={forecast.date}>{forecast.date} hello </td>
                        <td key={forecast.date}>{forecast.temperatureC}</td>
                        <td key={forecast.date}>{forecast.temperatureF}</td>
                        <td key={forecast.date}>{forecast.summary}</td>
                   </tr>
          )}
        </tbody>
      </table>
    );
  }

    render() {
        console.log(this.state.forecasts);
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            
        <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    var data = await response.json();
    this.setState({ loading: false });
    this.setState({ forecasts: data});
      console.log(this.state.forecasts);
      console.log(this.state.loading);
      console.log(data);
  }
}
