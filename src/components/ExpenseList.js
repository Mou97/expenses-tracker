import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-mobile'>Expenses</div>
            <div className='show-desktop'>Expense</div>
            <div className='show-desktop'>Amount</div>
        </div>
        <div className='list-body'>
            {
                props.expenses.length === 0 ? (
                    <div className='list-item list-item__no-data'>
                        <span>No Expenses</span>
                    </div>
                )
                    :
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id}{...expense} />
                    })
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)

    }
}

export default connect(mapStateToProps)(ExpenseList)

