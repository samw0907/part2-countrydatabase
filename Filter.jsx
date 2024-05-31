const Filter = ({checkCountry, countrySearch, handleCheckCountry, message}) => {
    return (
      <form onSubmit={checkCountry}>
        <div>
          find countries <input
          type="search"
          value={countrySearch}
          onChange={handleCheckCountry}></input>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </form>
    )
}

export default Filter