//Simple js example
var plainJSElement = document.getElementById("root");
var jsElement = document.createElement("h1");
jsElement.innerText = "Sample JS";
plainJSElement.appendChild(jsElement);

//React example
var reactElement = React.createElement("h1", null, "Sample React");
var reactRoot = ReactDOM.createRoot(document.getElementById("root-react"));
reactRoot.render(reactElement);
