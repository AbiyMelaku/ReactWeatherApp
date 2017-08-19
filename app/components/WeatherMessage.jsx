var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    return (
      <h3> It is 40C in San Francisco</h3>
    )
  }
});

module.exports = WeatherMessage;