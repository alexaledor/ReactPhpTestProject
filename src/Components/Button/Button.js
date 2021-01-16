import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

    render() {
        return (
            <div className="row-button">
                <button onClick={this.props.clickButton}>Розрахувати</button>
            </div>
        )
    }

}

export default Button