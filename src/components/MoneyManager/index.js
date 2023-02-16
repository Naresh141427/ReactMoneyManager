import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'BALANCE',
    displayText: 'Balance',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    className: 'balance',
  },
  {
    optionId: 'INCOME',
    displayText: 'Income',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    className: 'income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    className: 'expenses',
  },
]

class MoneyManager extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="manager-container">
          <div className="title-container">
            <h1 className="manager-name">Hi, Richard</h1>
            <p className="manager-description">
              Welcome back to your
              <span className="special-text">Money Manager</span>
            </p>
          </div>
        </div>

        <ul className="money-details-container">
          {transactionTypeOptions.map(each => (
            <MoneyDetails transactionTypeList={each} key={each.optionId} />
          ))}
        </ul>

        <div className="transaction-card-container">
          <div className="transaction-container">
            <h1 className="trans-header">Add Transaction</h1>
            <form className="transaction-details_container">
              <label htmlFor="title-bar" className="title-bar">
                TITLE
              </label>
              <input
                id="title-bar"
                type="text"
                className="input"
                placeholder="Title"
                onChange={this.onEnteringTitle}
              />
              <label htmlFor="title-bar" className="title-bar">
                AMOUNT
              </label>
              <input
                id="title-bar"
                type="text"
                className="input"
                placeholder="Title"
                onChange={this.onEnteringTitle}
              />
              <label htmlFor="title-bar" className="title-bar">
                TYPE
              </label>
              <select
                id="title-bar"
                className="input"
                placeholder="Title"
                onChange={this.onSelectingType}
              >
                <option>Inocome</option>
                <option>Expenses</option>
              </select>
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-history-container">
            <h1 className="history-header">History</h1>
            <div className="history-table">
              <p className="title">Title</p>
              <p className="title1">Amount</p>
              <p className="title2">Type</p>
            </div>

            <ul className="history-items-list-container">
              <TransactionItem />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
