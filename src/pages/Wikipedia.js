import React, { Component } from 'react'
import Clock from '../components/Clock.js'
import Wikipedia from '../components/Wikipedia.js'



export default class WikipediaList extends Component {
    render() {
        return (
            <div>
                <Wikipedia />
                <WikipediaList />
            </div>
        )
    }
}
