const apiKey = "60594f698646c8637bb5f8dd166d178c";
const mainApiUrl = "https://api.openweathermap.org/data/2.5";
const getWeatherData = {infoType, searchParameters} => {
    const url = new URl(mainApiUrl + "/" + infoType)
    url.search = new URLSearchParameters ({...searchParameters, appid:apiKey})

    return get(url).then(res)
};