var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3 className="text-center">About</h3>
      <p>Welcome to my simple weather application written in <a href="https://facebook.github.io/react">React.js!</a> </p>
      
      <p>The API is <a href="http://openweathermap.org/">Open Weather Map</a>.
      Sign up is free and easy! </p>
      
    </div>
  )
}

module.exports = About;