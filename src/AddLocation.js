import { loadModules } from "esri-loader";
import React, { useEffect, useState } from "react";

const AddLocation = ({ view }) => {
  const [state, setState] = useState({
    title: "",
    details: "",
    x: null,
    y: null,
  });

  useEffect(() => {
    view.ui.add(document.querySelector("#add-location"), "top-right");

    view.on("click", (e) => {
      const { latitude, longitude } = e.mapPoint;
      let newstate = { ...state };
      newstate.y = latitude;
      newstate.x = longitude;
      setState(newstate);
    });
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    let newstate = { ...state };
    newstate[name] = value;
    setState(newstate);
  };

  const handleAddLocation = () => {
    console.log("state", state);

    loadModules(["esri/Graphic"]).then(([Graphic]) => {
      const geo = {
        type: "point",
        x: state.x,
        y: state.y,
      };

      const sym = {
        type: "simple-marker",
        color: "red",
        size: "15",
        outline: null,
      };

      let grph = new Graphic({
        geometry: geo,
        symbol: sym,
        popupTemplate: {
          title: state.title,
          content: state.details,
        },
      });

      view.graphics.add(grph);
    });
  };

  return (
    <div id="add-location" className="esri-widget" style={{ padding: 10 }}>
      <input
        type="text"
        placeholder="Title"
        className="esri-input"
        style={{ margin: 5, width: "300px" }}
        value={state.title}
        name="title"
        onChange={handleChange}
      />
      <br />

      <textarea
        cols={5}
        placeholder="Details"
        className="esri-input"
        style={{ margin: 5, width: "300px" }}
        value={state.details}
        name="details"
        onChange={handleChange}
      ></textarea>

      <br />

      <span>X:{state.x}</span>
      <br />
      <span>Y:{state.y}</span>
      <input
        type="button"
        value="Add Location "
        className="esri-button"
        style={{ margin: 5 }}
        onClick={handleAddLocation}
      />
    </div>
  );
};

export default AddLocation;
