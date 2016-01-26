var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./dropdown');

// passed into the component
var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
  items: [ // List of items to show in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

// render the class
var element = React.createElement(ThumbnailList, options);

// tell react where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.target'));
