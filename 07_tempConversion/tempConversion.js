const convertToCelsius = function(f) {
  //let conversion = ((f-32)*5) / 9
  let celcius = Math.round((((f-32)*5) / 9) *10) / 10;
  return celcius
};

const convertToFahrenheit = function(c) {
  let farenheit = Math.round(((c*1.8)+32) *10) / 10;
  return farenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
