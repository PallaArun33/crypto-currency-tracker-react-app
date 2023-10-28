// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyItemDetails

  return (
    <li className="coin-item-container">
      <div className="currency-log-info">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd-para">{usdValue}</p>
        <p className="euros-para">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
