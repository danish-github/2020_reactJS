"use strict";

console.log("app is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "indecision app"
  ),
  React.createElement(
    "p",
    null,
    "some info"
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
