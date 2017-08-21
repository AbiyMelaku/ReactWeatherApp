var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to my simple weather application written in <a href="https://facebook.github.io/react">React.js!</a> </p>
      
      <p>The API is <a href="http://openweathermap.org/">Open Weather Map</a>.
      Sign up is free and easy! </p>
      
      <p>Checkout my code in my <a href="https://github.com/AbiyMelaku/ReactWeatherApp">Github</a>.</p>
      
    </div>
  )
}

module.exports = About;