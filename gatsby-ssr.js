import React from "react";

const headComponents = [
  <script
    key="fathom-script"
    src="https://cdn.usefathom.com/script.js"
    data-site="CNOZPPSE"
    defer
  ></script>,
];

export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents(headComponents);
};
