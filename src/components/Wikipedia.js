import React, { Component } from 'react'
import "./Wikipedia.css";
import {GOOGLE_API_KEY} from './config';


export default class Wikipedia extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        latitude: null,
        longitude: null,
        userAddress: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
} 
getLocation() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
            alert("Геолокация не поддерживается в этом браузере.");
    }
}

getCoordinates(position) {
    this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    })
    this.reverseGeocodeCoordinates();
}
reverseGeocodeCoordinates() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${GOOGLE_API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({
        userAddress: data.results[0].formatted_address
    }))
    .catch(error => alert(error))
}
handleLocationError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
          default:
          alert("An unknown error occurred.")
      }
}
    render() {
        return (
            <div className="GeoCity">
                <h2>
                    Узнать локацию
                </h2>
                <button onClick={this.getLocation}>Узнать координаты</button>
                    <p>Широта: {this.state.latitude}</p>
                    <p>Долгода: {this.state.longitude}</p>
                    <p>Адресс: {this.state.userAddress}</p>
                    {this.state.latitude && this.state.longitude ?
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7c${this.state.latitude}&key=${GOOGLE_API_KEY}`} alt='' /> 
:
null
}
                    </div>
        )
    
    }
    
}