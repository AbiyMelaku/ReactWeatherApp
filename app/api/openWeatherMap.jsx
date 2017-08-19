var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1d412c3ae79dfe87b3a8eade7cac0854&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    return axios.get(requestUrl)
      .then(function(res){      
        if(res.data.cod && res.data.message){
          throw new Error('Unable to fetch weather');
        } else {
          return res.data.main.temp;
        }
      })
      .catch(function(err){
        throw new Error(err.res.data.message);
      });
  }
}