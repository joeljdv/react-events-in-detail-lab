// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    
    
    handleClick = (e) => {
        let array = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} />
            </div>
        )
    }
}
