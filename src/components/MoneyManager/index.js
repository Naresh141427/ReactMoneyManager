import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

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
  state = {
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
    expenses: 0,
    transactionList: [],
  }

  onAddingTransactionDetails = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        income: prevState.income + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amount),
        income:
          prevState.income > 0
            ? prevState.income - parseInt(amount)
            : prevState.income,
        balance: prevState.balance - parseInt(amount),
      }))
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  onEnteringTitle = event => {
    this.setState({title: event.target.value})
  }

  onEnteringAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSelectingType = event => {
    this.setState({type: event.target.value})
  }

  onRemovingTransaction = (id, amount, type) => {
    const {transactionList} = this.state
    const resultList = transactionList.filter(each => each.id !== id)

    if (type === 'Income') {
      this.setState(prevState => ({
        transactionList: resultList,
        balance: prevState.balance - parseInt(amount),
        income:
          prevState.income - parseInt(amount) > 0
            ? prevState.income - parseInt(amount)
            : 0,
      }))
    } else {
      this.setState(prevState => ({
        transactionList: resultList,
        expenses: prevState.expenses - parseInt(amount),
        income:
          prevState.income > 0
            ? prevState.income + parseInt(amount)
            : prevState.income,
        balance: prevState.balance + parseInt(amount),
      }))
    }
  }

  render() {
    const {transactionList, title, amount, type} = this.state

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

        <div className="container">
          <ul className="money-details-container">
            {transactionTypeOptions.map(each => (
              <MoneyDetails
                transactionTypeList={each}
                key={each.optionId}
                stateObject={this.state}
              />
            ))}
          </ul>
        </div>

        <div className="transaction-card-container">
          <div className="transaction-container">
            <h1 className="trans-header">Add Transaction</h1>
            <form
              className="transaction-details_container"
              onSubmit={this.onAddingTransactionDetails}
            >
              <label htmlFor="title-bar" className="title-bar">
                TITLE
              </label>
              <input
                id="title-bar"
                type="text"
                className="input"
                placeholder="Title"
                value={title}
                onChange={this.onEnteringTitle}
              />
              <label htmlFor="amount-bar" className="title-bar">
                AMOUNT
              </label>
              <input
                id="amount-bar"
                type="text"
                className="input"
                placeholder="Amount"
                value={amount}
                onChange={this.onEnteringAmount}
              />
              <label htmlFor="selection-bar" className="title-bar">
                TYPE
              </label>
              <select
                id="selection-bar"
                className="input"
                value={type}
                onChange={this.onSelectingType}
              >
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>

          <div className="transaction-history-container">
            <h1 className="history-header">History</h1>
            <div className="history-table">
              <p className="history-title">Title</p>
              <p className="history-amount">Amount</p>
              <p className="history-type">Type</p>
            </div>

            <ul className="history-items-list-container">
              {transactionList
                ? transactionList.map(each => (
                    <TransactionItem
                      transactionDetails={each}
                      key={each.id}
                      transactionTypeOptions={transactionTypeOptions}
                      onRemovingTransaction={this.onRemovingTransaction}
                    />
                  ))
                : ''}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
