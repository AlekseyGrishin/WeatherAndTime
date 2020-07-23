import React, {Component} from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import moment from 'moment';
import "./Clock.css";


class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            todayDate: false
        }
    }
    toggleSwitch = () =>{
        this.setState({
            todaysDate: !this.state.todaysDate
        })
    }
  render(){
  return (
    <div className="Time">
 
      <Clock format={'H:mm:ss'} ticking={true} timezone={'Russia'} />
      <div className="toggleDate">
          {this.state.todaysDate ? moment().format('MMMM Do YYYY') : ''}
          </div>
    </div>
  );
}
}

export default Time;
