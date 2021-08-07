import { Map } from "@esri/react-arcgis";
import "./App.css";
import Locations from "./Locations";
import AddLocation from "./AddLocation";
import Widgets from "./widgets";

function App() {
  return (
    <div className="App">
      <Map
        style={{ width: "100%", height: "100vh" }}
        mapProperties={{ basemap: "hybrid" }}
        viewProperties={{
          zoom: 8,
          center: [-119.8047, 36.7381],
        }}
      >
        <Locations />
        <AddLocation />
        <Widgets />
      </Map>
    </div>
  );
}

export default App;
