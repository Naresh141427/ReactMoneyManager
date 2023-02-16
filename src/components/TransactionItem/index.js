import './index.css'

const TransactionItem = props => (
  <li className="transaction-item">
    <p className="title">Title</p>
    <p className="amount">Amount</p>
    <p className="type">Type</p>
    <button className="delete-button" type="button">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete-image"
      />
    </button>
  </li>
)

export default TransactionItem
