<<<<<<< HEAD
//import locator, { GeoCoords } from "lib/geolocationService";
//import { requestWeatherByGeoCoordinates } from "api/sources/weatherData";
//import { useEffect, useState } from "react";
import WeatherDataSearch from "Domains/StartScreen/WeatherDataSearch/WeatherDataSearch"

function App() {
  //const [weatherTemp, setWeather] = useState<any>(0);

  //async function getWeatherByCoords() {

    //const geoCoords: GeoCoords = await locator.getGeoCoords();
    //// try catch geoCoords 
    //// [catch]
    //// set State GeoLocationApiIsNotAvailable to false
    //// prompt search bar component for searching location
    //// and button "Try Again"
    //// use requestWeatherByLocatioName
    //// ^ separate all this to another function "getGeoGoords"

    //const weatherData: any = await requestWeatherByGeoCoordinates(geoCoords);

    //console.log(weatherData);
    //setWeather(weatherData.main.temp);
  //}

  //useEffect(() => {
    //getWeatherByCoords();
  //}, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <WeatherDataSearch/>
    </div>
  );
}

export default App;
