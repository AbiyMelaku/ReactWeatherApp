var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    // var location = this.props.location;
    // var temp = this.props.temp;
    var {temp, location} = this.this.props;
    return (
      <h3> It is {temp} in {location}.</h3>
    )
  }
});

module.exports = WeatherMessage;