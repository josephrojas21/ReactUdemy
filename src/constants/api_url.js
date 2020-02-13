
const location ="Buenos Aires,ar";
const api_key = "071b4f927bff4f25886a8419e20e95ff";
const url_base_weather = `http://api.openweathermap.org/data/2.5/weather`;
export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}&units=metric`;