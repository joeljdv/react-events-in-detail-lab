// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    setTimeout = () => {
        this.props.delay
    }

    render() {
        return (
            <div>
                <button onClick={onDelayedClick(this.setTimeout)}/>
            </div>
        )
    }
}
