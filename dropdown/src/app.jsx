var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

// passed into the component
var options = {
  title: 'Choose a dessert',  // what should show up on the button to open/close dropdown
  items: [ // List of items to show in the dropdown.
    'Apple Pie',
    'Peach Cobber',
    'Coconut Cream Pie'
  ]
};

// render the class
var element = React.createElement(Dropdown, options);

// tell react where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.target'));
