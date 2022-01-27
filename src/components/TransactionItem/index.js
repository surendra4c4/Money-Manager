// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDelete} = props
  const {id, name, amount, type} = transactionDetails

  const deleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="history-list-item">
      <div className="width-container">
        <p className="details">{name}</p>
        <p className="details">Rs {amount}</p>
        <p className="details">{type}</p>
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={deleteItem}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
