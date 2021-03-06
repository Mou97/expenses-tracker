import React from 'react'
import 'react-dates/initialize'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount / 100 : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
        }
    }

    onDesciptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))

        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please provide description and amount " }))
        } else {
            this.setState({ error: undefined })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: (this.state.createdAt).valueOf(),
                note: this.state.note
            })
        }
    }


    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className='form-error'>{this.state.error}</p>}
                <input
                    type="text"
                    className='text-input'
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDesciptionChange}
                />
                <input
                    type="text"
                    className='text-input'
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

                <textarea
                    className='textarea'
                    placeholder="Add a note to your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className='button'>Save Expense</button>
                </div>
            </form>
        )
    }
}