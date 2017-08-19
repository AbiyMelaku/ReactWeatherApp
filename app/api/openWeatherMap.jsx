var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=1d412c3ae79dfe87b3a8eade7cac0854&units=imperial';

//1d412c3ae79dfe87b3a8eade7cac0854

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodedURILocation(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    axios.get(requestUrl).then(function(res){
      if( res.data.cod && res.data.message ){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw newError(res.data.message);
    });
  };
}