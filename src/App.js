import { Map } from "@esri/react-arcgis";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Map
        style={{ width: "100%", height: "100vh" }}
        mapProperties={{ basemap: "satellite" }}
        viewProperties={{
          // center: [-122.4443, 47.2529],
          //zoom: 3,
          scale: 100000,
        }}
      />
    </div>
  );
}

export default App;
