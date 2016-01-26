var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

// passed into the component
var options = {
  thumbnailData: [{
    title: 'Want this model to verify',
    number: 35,
    header: 'Learn React',
    description: 'React is a great library blah blabh lbhab adsd fa',
    imageUrl: 'http://3.bp.blogspot.com/-sz5Daf80fEc/VCPESlLG--I/AAAAAAAAAPM/j7cFggqKIPI/s1600/atom.png'
  },{
    title: 'Gulpy Gulp Gulp',
    number: 01,
    header: 'Gulp be next, yo',
    description: 'Gulp will speed up dev workflow',
    imageUrl: 'https://media-mediatemple.netdna-ssl.com/wp-content/uploads/2014/06/00-gulp-intro.png'
  }]
};

// render the class
var element = React.createElement(ThumbnailList, options);

// tell react where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.target'));
