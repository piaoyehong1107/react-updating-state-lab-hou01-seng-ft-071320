// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    state={
        timesClicked: 0
    }

    handleClick=()=>{
    let timesClicked=this.state.timesClicked;
        this.setState({
            timesClicked: timesClicked+1
        })
    }
    render() {
        return (
            <div>
                <button onClick={
                    this.handleClick
                }>{this.state.timesClicked}</button>
            </div>
        )
    }
}
