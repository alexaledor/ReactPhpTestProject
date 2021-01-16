import React, { Component } from 'react'
import Input from '../Input/Input'

class Inputs extends Component {
    
    render() {
        return (
            <>
                <Input
                    title="Мінімальне число"
                    id="minValue"
                    maxLength="7"
                    changeValue={this.props.changeValue}
                />

                <Input
                    title="Максимальне число"
                    id="maxValue"
                    maxLength="7"
                    changeValue={this.props.changeValue}
                />

                <Input
                    title="Кількість чисел"
                    id="amountValue"
                    maxLength="10"
                    changeValue={this.props.changeValue}
                />
            </>
        )
    }
}

export default Inputs