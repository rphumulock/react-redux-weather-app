import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import { skey, gkey } from '../config/config';

class GoogleMap extends Component {
    componentDidMount() {
        let that = this;
        GoogleMapsLoader.KEY = skey;
        GoogleMapsLoader.load(function (google) {
            new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                lat: that.props.lat,
                lng: that.props.lon
            });
        });
        /*new window.google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });*/
    };

    render() {
        return <div id="map" ref="map" />
    };
};

export default GoogleMap;