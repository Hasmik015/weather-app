import React, {Component} from 'react';

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleCityInput = (e) => {
    const {setCity, getWeather} = this.props;
    this.setState({
      city: e.target.value,
    })
    setCity(e.target.value);
    getWeather();
  }

  render() {
    return (
      <div className='city-input'>
        <span>Enter the City Name</span>
        <input type='text' onChange={this.handleCityInput}/>
      </div>
    )
  }
}