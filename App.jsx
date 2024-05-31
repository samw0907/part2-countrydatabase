import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Country from './components/Country'
import CountryInfo from './components/CountryInfo'
import Weather from './components/Weather'
import countriesService from './services/countries'
import axios from 'axios'
// import './index.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [countrySearch, setCountrySearch] = useState('search')
  const [weather, setWeather] = useState(null)
  const [icon, setIcon] = useState(null)
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])


   const checkCountry = (event) => {
    event.preventDefault()
    console.log('search entered', event.target)
    const filter = countries.filter(country => country.name.common.toLowerCase().includes(countrySearch.toLowerCase()))
    console.log(filter)
    if (filter.length < 10) {
    setFilteredCountries(filter)
    setMessage('')
  } else {
    setFilteredCountries([])
    refineFilterMessage()
  }
}

  const handleCheckCountry = (event) => {
    console.log(event.target.value)
    setCountrySearch(event.target.value)
   }

   const refineFilterMessage = ()=> {
    setMessage('Too many matches, specify another filter')
   }

   const handleShowInfo = (country) => {
      console.log('show info clicked', event.target.value)
      setFilteredCountries([])
      setSelectedCountry(country)
      fetchWeather(country.capital[0])
      fetchIcon(country.capital[0])
   }

   const fetchWeather = (capital) => {
    const apiKey = import.meta.env.VITE_SOME_KEY
    console.log(apiKey)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
    
    axios.get(url)
      .then(response => {
        console.log('weather data', response.data)
        setWeather(response.data)
      })
      .catch(error => {
        console.error('Error fetching weather data:', error)
      })
  }

  const fetchIcon = (capital) => {
    const apiKey = import.meta.env.VITE_SOME_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`

    axios.get(url)
      .then(response => {
        const iconCode = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
        setIcon(iconCode);
      })
      .catch(error => {
        console.error('Error fetching icon data:', error)
      })
  }

  return (
    <>
      <Filter countrySearch={countrySearch} checkCountry={checkCountry} handleCheckCountry={handleCheckCountry} message={message}></Filter>
      <div>
        {filteredCountries.map(country => (
          <Country key={country.name.common} country={country} handleShowInfo={() => handleShowInfo(country)}></Country>
        ))}
        </div>
        {selectedCountry && <CountryInfo country={selectedCountry}></CountryInfo>}
        <div>
        {weather && <Weather weather={weather} icon={icon}></Weather>}
        </div>
   </>
  )
}

export default App