import LocationSearchScreen from "UI/Domains/LocationSearchScreen/LocationSearchScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherScreen from "UI/Domains/WeatherScreen/WeatherScreen";
import { useState } from "react";
import BrowserGeoLocationService, {
  GeoCoords,
} from "lib/geolocation/browserGeolocationService";

const locator = new BrowserGeoLocationService();

function App() {
  const [geoCoords, setGeoCoords] = useState<GeoCoords | null>(
    locator.readGeoCoordsFromLocalStorage()
  );

  const [cityName, setCityName] = useState<string | null>(
    localStorage.getItem("city name")
  );

  return (
    <div className="App darkTheme">
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <LocationSearchScreen
              setGeoCoords={setGeoCoords}
              geoCoords={geoCoords}
              setCityName={setCityName}
              cityName={cityName}
            />
          </Route>
          <Route path="/weather">
            <WeatherScreen
              geoCoords={geoCoords}
              cityName={cityName}
              setGeoCoords={setGeoCoords}
              setCityName={setCityName}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
