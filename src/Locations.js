import { loadModules } from "esri-loader";
import React, { useEffect } from "react";

const Locations = (props) => {
  const view = props.view;

  useEffect(() => {
    loadModules(["esri/Graphic"]).then(([Graphic]) => {
      const geo = {
        type: "point",
        x: 30.1,
        y: 30,
      };

      const geo2 = {
        type: "point",
        x: 30.1,
        y: 32,
      };

      const sym = {
        type: "simple-marker",
        color: "red",
        size: "15",
        outline: null,
      };

      const sym2 = {
        type: "simple-marker",
        color: "green",
        size: "15",
        outline: null,
      };

      let grph = new Graphic({
        geometry: geo,
        symbol: sym,
      });

      let grph2 = new Graphic({
        geometry: geo2,
        symbol: sym2,
      });

      view.graphics.addMany([grph, grph2]);

      view.goTo([grph, grph2]);
    });
  }, []);

  console.log("view", view);

  return null;
};

export default Locations;
