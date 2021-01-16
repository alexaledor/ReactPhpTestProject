import React, { Component } from 'react'
import './Input.css'

class Input extends Component {

    inputClick = (e) => {
        e.target.style.backgroundColor = 'yellow';        
    }

    leaveInput = (e) => {
        e.target.style = { backgroundColor: 'white' }
    }

    render() {
        return (
            <div className="row">
                <div className="label">{this.props.title}</div>
                <input
                    id={this.props.id}
                    title='Тількі цілі числа'
                    maxLength={this.props.maxLength}
                    className="input"
                    onClick={this.inputClick}
                    onBlur={this.leaveInput}
                    onChange={this.props.changeValue}
                ></input>
            </div>
        )
    }
}

export default Input