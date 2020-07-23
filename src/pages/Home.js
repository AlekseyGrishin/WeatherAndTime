import React, { Component } from 'react'
import "./Home.css";


export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePageBlock">
                <h1>Главная страница</h1>
                <p>С помощью этого приложения вы сможете узнать время, погоду и интересные статьи о своем городе</p>
            </div>
        )
    }
}
