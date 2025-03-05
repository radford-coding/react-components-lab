import './WeatherForecast.css'

const WeatherForecast = (weather) => {
    return (
        <div className="weather">
            <h2>{weather.day}</h2>
            <img src={weather.img} alt="" />
            <p><span>conditions: </span>{weather.conditions}</p>
            <p><span>time: </span>{weather.time}</p>
        </div>
    );
};

export default WeatherForecast;