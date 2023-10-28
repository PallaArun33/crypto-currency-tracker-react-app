// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div className="currency-card">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" width={80} height={80} />
          </div>
        ) : (
          <div className="currency-container">
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
              alt="cryptocurrency"
              className="crypto-img"
            />
            <div className="coin-Details-container">
              <div className="coin-type-container">
                <h1 className="coin-type-heading">Coin Type</h1>
                <div className="usd-euro-container">
                  <h1 className="usd-heading">USD</h1>
                  <h1 className="euros-heading">EURO</h1>
                </div>
              </div>
              <ul className="ul-items">
                {currencyData.map(item => (
                  <CryptocurrencyItem
                    key={item.id}
                    currencyItemDetails={item}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
