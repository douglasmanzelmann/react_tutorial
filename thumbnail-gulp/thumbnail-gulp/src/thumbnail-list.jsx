var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumnailProps) {

      // shortcut for saying title={thumnailProps.title}, etc...
      return <Thumbnail {...thumnailProps} />
    });

    return <div>
      {list}
    </div>
  }
});
