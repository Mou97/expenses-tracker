import React from 'react'
import ExpenseForm from './EpenseForm'
import { connect } from 'react-redux'
import { addExpense, startAddExpense } from '../actions/expenses'

class CreateExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(CreateExpensePage)