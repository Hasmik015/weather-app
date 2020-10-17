import React, {Component} from "react";

export default class Weather extends Component {
  render() {
    const { weather, city } = this.props;

    return (
      <div className='weather-details'>
        {weather && weather.main ? (
            <div>
              <div className='weather-city'>The Weather in { city }:</div>
              <div className='temp'>
                <div>{weather.main.temp}&deg;</div>
                <div className="condition">{weather.weather[0].main}</div>
              </div>
            </div>
          ) :
          <div>Not Found</div>
        }
      </div>
    );
  }
}