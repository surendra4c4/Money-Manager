import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    input: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
  }

  onDelete = id => {
    const {transactionList} = this.state

    const deletedItemsList = transactionList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({transactionList: [...deletedItemsList]})
  }

  addTransaction = event => {
    event.preventDefault()
    const {input, amount, type} = this.state
    const typeOption = transactionTypeOptions.find(
      eachItem => eachItem.optionId === type,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      name: input,
      amount: parseInt(amount),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      input: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  changeText = event => {
    this.setState({input: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeType = event => {
    this.setState({type: event.target.value})
  }

  getExpenses = () => {
    let expenses = 0
    const {transactionList} = this.state

    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[1].displayText) {
        expenses += eachItem.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0

    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        income += eachItem.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {transactionList} = this.state
    let income = 0
    let expenses = 0
    let balance = 0

    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        income += eachItem.amount
      } else {
        expenses += eachItem.amount
      }
    })
    balance = income - expenses
    return balance
  }

  render() {
    const {transactionList, input, amount, type} = this.state

    const expenses = this.getExpenses()
    const income = this.getIncome()
    const balance = this.getBalance()

    return (
      <div className="bg-container">
        <div className="name-container">
          <h1 className="name">Hi, Rechards</h1>
          <p className="welcome-note">
            Welcome back to your{' '}
            <span className="span-class">Money Manager</span>
          </p>
        </div>
        <div className="amount-container">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>
        <div className="bottom-container">
          <div className="details-container">
            <h1 className="form-heading">Add Transactions</h1>
            <form className="form-control" onSubmit={this.addTransaction}>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                className="input-class"
                value={input}
                onChange={this.changeText}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                placeholder="Amount"
                className="input-class"
                value={amount}
                onChange={this.changeAmount}
              />
              <label htmlFor="select" className="label">
                TYPE
              </label>
              <select
                id="select"
                className="input-class"
                value={type}
                onChange={this.changeType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="details-container width">
            <h1 className="form-heading">History</h1>
            <ul className="history-list-container">
              <li className="border-container">
                <div className="small-containers">
                  <p className="list-items">Title</p>
                  <p className="list-items">Amount</p>
                  <p className="list-items">Type</p>
                </div>
              </li>
              {transactionList.map(eachItem => (
                <TransactionItem
                  transactionDetails={eachItem}
                  key={eachItem.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
