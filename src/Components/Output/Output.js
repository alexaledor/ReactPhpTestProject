import React, { Component } from 'react'
import './Output.css';

class Output extends Component {

    render() {        
        
        let {data} = this.props
        
        return (
            <div className="answer">
                <h2>Середнє: {data[0].average}</h2>
                <h2>Стандартне відхилення: {data[1].deviation}</h2>
                <h2>Мода: {data[2].mode.join('; ')}</h2>
                <h2>Медіана: {data[3].median}</h2>
            </div>
        )
    }
}

export default Output