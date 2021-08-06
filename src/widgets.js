import { loadModules } from "esri-loader";
import React, { useEffect } from "react";

const Widget = ({ view }) => {
  useEffect(() => {
    loadModules(["esri/widgets/Home", "esri/widgets/BasemapToggle"]).then(
      ([Home, BasemapToggle]) => {
        view.ui.add(
          new Home({
            view: view,
          }),
          "top-left"
        );

        view.ui.add(
          new BasemapToggle({
            view: view,
            nextBasemap: "topo",
          }),
          "bottom-right"
        );
      }
    );
  }, []);

  return null;
};

export default Widget;
