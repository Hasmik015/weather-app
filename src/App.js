import React, {Component} from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getWeather,
  setCity,
} from "./redux/Weather/weather.actions";
import Weather from "./components/Weather";
import City from "./components/City";

class App extends Component {


  render() {
    return (
      <div className="App">
        <City {...this.props}/>
        <Weather {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.appData.city,
  weather: state.appData.weather,
});

const mapDispatchToProps = dispatch => ({
  getWeather: bindActionCreators(getWeather, dispatch),
  setCity: bindActionCreators(setCity, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
