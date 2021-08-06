import { Map } from "@esri/react-arcgis";
import "./App.css";
import Locations from "./Locations";

function App() {
  return (
    <div className="App">
      <Map
        style={{ width: "100%", height: "100vh" }}
        mapProperties={{ basemap: "dark-gray" }}
        viewProperties={{
          zoom: 3,
          center: [35, 35],
        }}
      >
        <Locations />
      </Map>
    </div>
  );
}

export default App;
