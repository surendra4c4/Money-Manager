// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="three-containers-container">
      <div className="list-item balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="images"
        />
        <div className="amount-container">
          <p className="balance-paragraph">Your Balance</p>
          <p className="balance-heading" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="list-item income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="images"
        />
        <div className="amount-container">
          <p className="income-paragraph">Your Income</p>
          <p className="income-heading" testid="incomeAmount">
            RS {income}
          </p>
        </div>
      </div>
      <div className="list-item expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="images"
        />
        <div className="amount-container">
          <p className="expenses-paragraph">Your Expenses</p>
          <p className="expenses-heading" testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
