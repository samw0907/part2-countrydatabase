const Country = ({country, handleShowInfo}) => {
    return (
        <li key={country.name.common}>
            <div>
           {country.name.common}
            <button type="button" value={country.name.common} onClick={handleShowInfo}>show info</button>
            </div>
        </li>
    )
}

export default Country
