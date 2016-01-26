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

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
  )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumnailProps) {

      // shortcut for saying title={thumnailProps.title}, etc...
      return React.createElement(Thumbnail, React.__spread({},  thumnailProps))
    });

    return React.createElement("div", null, 
      list
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, 
              React.createElement(Badge, {title: this.props.title, number: this.props.number})
            )
        )
    )
  }
});
