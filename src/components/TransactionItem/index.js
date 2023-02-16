import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onRemovingTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onDeletingItem = () => {
    onRemovingTransaction(id, amount, type)
  }

  return (
    <li className="transaction-item">
      <p className="title">{title}</p>
      <p className="amount">RS {amount}</p>
      <p className="type">{type}</p>
      <button className="delete-button" type="button" onClick={onDeletingItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
