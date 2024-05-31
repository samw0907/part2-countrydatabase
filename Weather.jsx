const Weather = ({weather, icon}) => {
    return (
      <form>
        <div>
            <p><strong>Weather in {weather.name}</strong></p>
            <p>temperature {weather.main.temp} °C</p>
            <div>
              {icon && <img src={icon} alt="Weather icon"></img>}
            </div>
            <p>wind {weather.wind.speed} m/s</p>
        </div>
      </form>
    )
}

export default Weather