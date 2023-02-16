import './index.css'

const MoneyDetails = props => {
  const {transactionTypeList} = props
  const {optionId, displayText, imageUrl, className} = transactionTypeList

  return (
    <li className={className}>
      <img src={imageUrl} className="images" alt={className} />
      <div className="content-container">
        <p className="title">Your {displayText}</p>
        <p className="money">RS 0</p>
      </div>
    </li>
  )
}

export default MoneyDetails
