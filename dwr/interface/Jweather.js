
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (Jweather == null) var Jweather = {};
Jweather._path = '/dwr';
Jweather.main = function(p0, callback) {
  dwr.engine._execute(Jweather._path, 'Jweather', 'main', p0, callback);
}
Jweather.getweather = function(p0, p1, callback) {
  dwr.engine._execute(Jweather._path, 'Jweather', 'getweather', p0, p1, callback);
}
Jweather.getChinaWeather = function(p0, p1, callback) {
  dwr.engine._execute(Jweather._path, 'Jweather', 'getChinaWeather', p0, p1, callback);
}
Jweather.getChinaWeatherToFile = function(p0, p1, callback) {
  dwr.engine._execute(Jweather._path, 'Jweather', 'getChinaWeatherToFile', p0, p1, callback);
}
Jweather.getChinaWeatherFromFile = function(p0, callback) {
  dwr.engine._execute(Jweather._path, 'Jweather', 'getChinaWeatherFromFile', p0, callback);
}
