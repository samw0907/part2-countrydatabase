const CountryInfo = ({country, handleShowInfo}) => {
    return (
        <div>
            <p><strong>Official Name:</strong> {country.name.official}</p>
          <p><strong>Capital:</strong> {country.capital.join(', ')}</p>
          <p><strong>Population:</strong> {country.population}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
          <p><strong>Flag:</strong> <img src={country.flags.png} alt={`Flag of ${country.name.common}`} /></p>
        </div>
    )
}

export default CountryInfo
