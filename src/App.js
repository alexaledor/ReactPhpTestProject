import React, { Component } from 'react'
import Output from './Components/Output/Output'
import Inputs from './Components/Inputs/Inputs'
import Button from './Components/Button/Button'
import axios from 'axios';
import './App.css'

const baseUrl = '/backend/index.php';

class App extends Component {

  state = {
    show: false,
    minValue: '',
    maxValue: '',
    amountValue: '',
    response: [],
    isLoading: false
  }

  changeValue = (e) => {
    let { value, id } = e.target
    value = this.checkInputData(e)
    this.setState({
      show: false,
      response: [],
      [id]: value
    });
  }

  checkInputData = (e) => {
    let { value } = e.target
    if ((!value.match(/^\d{1,}$/)) || (value.match(/^0/))) {
      value = value.slice(0, -1)
      e.target.value = value;
    }
    return value;
  }

  clickButton = () => {
    this.setState({ response: [] });
    if (this.checkDataBeforeSend()) {
      this.getData()
    }
  }

  checkDataBeforeSend() {
    let check = false;
    let { minValue, maxValue, amountValue } = this.state;
    if ((minValue === '') || (maxValue === '') || (amountValue === '')) {
      alert('Всі поля мають бути заповнені!');
    }
    else if (Number(minValue) >= Number(maxValue)) {
      alert('Мінімальне число не може бути більше або дорівнювати максимальному.');
    }
    else if (Number(amountValue) < 2) {
      alert('Кількість чисел має бути не меншє двох.');
    }
    else {
      check = true
    }
    return check;
  }

  getData = () => {
    this.setState({ isLoading: true })
    axios.post(baseUrl, { params: this.state })
      .then(response => {
        //console.log(response.data);
        if (response.data.length > 0) {
          var arr = [...this.state.response]
          try {
            response.data.map((item) => {
              return arr.push(item)
            })
          } catch (error) {                        
            alert('Помилка на сервері.');
          }
          this.setState({
            response: arr,
            show: true,
            isLoading: false
          })
        } else {
           alert('Помилка отримання даних.');
        }
      })
  }

  render() {

    const { isLoading } = this.state

    let Answer = null;
    let data = this.state.response;
    if (this.state.show && data.length > 0) {
      Answer = <Output data={data} />;
    } else if (isLoading) {
      Answer = <div>Please wait ... </div>
    }

    return (
      <div>
        <Inputs changeValue={this.changeValue} />
        <Button clickButton={this.clickButton} />
        {Answer}
      </div>
    )
  }
}

export default App