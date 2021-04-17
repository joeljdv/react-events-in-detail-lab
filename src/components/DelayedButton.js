// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    clickHandler = (e) => {  
        e.persist()
        this.props.onDelayedClick(e)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}/>
            </div>
        )
    }
}
