
import React from 'react';
import ReactDOM from 'react-dom/client';

var reactElement = React.createElement("h1", null, "Sample React");
var reactRoot = ReactDOM.createRoot(document.getElementById("root-react"));
reactRoot.render(reactElement);
