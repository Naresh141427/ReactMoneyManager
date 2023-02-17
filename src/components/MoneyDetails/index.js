import './index.css'

const MoneyDetails = props => {
  const {transactionTypeList, stateObject} = props
  const {optionId, displayText, imageUrl, className} = transactionTypeList
  const {balance, income, expenses} = stateObject
  let value
  if (optionId === 'BALANCE') {
    value = balance
  } else if (optionId === 'INCOME') {
    value = income
  } else {
    value = expenses
  }

  return (
    <li className={className}>
      <img src={imageUrl} className="images" alt={className} />
      <div className="content-container">
        <p className="title">Your {displayText}</p>
        <p className="money">RS {value}</p>
      </div>
    </li>
  )
}

export default MoneyDetails
