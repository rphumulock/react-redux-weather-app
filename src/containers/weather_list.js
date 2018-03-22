import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(data) {
        const id = data.city.id;
        const name = data.city.name;
        const temp = [];
        const pressure = [];
        const humidity = [];
        const { lat, lon } = data.city.coord;
        data.list.forEach((weather) => {
            temp.push(weather.main.temp);
            pressure.push(weather.main.pressure);
            humidity.push(weather.main.humidity);
        });

        return (
            <tr key={id}>
                <td>{name}</td>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart color="red" data={temp} units="K" /></td>
                <td><Chart color="blue" data={pressure} units="hPA" /></td>
                <td><Chart color="green" data={humidity} units="%" /></td>
            </tr>
        );
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Map</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map((weather) => this.renderWeather(weather))}
                </tbody>
            </table>
        );
    };
};

function mapStateToProps(state) {
    return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherList);