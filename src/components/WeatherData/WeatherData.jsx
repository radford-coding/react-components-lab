const WeatherData = ({ dayta, conditions, time }) => {
    return (
        dayta ?
            <>
                <h2>{dayta}</h2>
            </>
            :
            <>
                <p><span>conditions: </span>{conditions}</p><p><span>time: </span>{time}</p>
            </>
    );
};

export default WeatherData;