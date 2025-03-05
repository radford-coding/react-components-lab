import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import WeatherData from '../WeatherData/WeatherData.jsx';


const WeatherForecast = (weather) => {
    return (
        <div className="weather">
            <WeatherData dayta={weather.day} />
            <WeatherIcon img={weather.img} imgAlt={weather.imgAlt} />
            <WeatherData conditions={weather.conditions} time={weather.time}/>
        </div>
    );
};

export default WeatherForecast;