const WeatherIcon = ({ img, imgAlt }) => {
    // console.log(`img: ${img}\nimgAlt: ${imgAlt}`);
    return (
        <img src={img} alt={imgAlt} />
    );
};

export default WeatherIcon