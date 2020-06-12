import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {
    state = {
        calanderFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calanderFocused) => {
        this.setState(() => ({ calanderFocused }))
    }
    onTextChange = e => {
        this.props.dispatch(setTextFilter(e.target.value))
    }

    onSortChange = e => {
        if (e.target.value === 'date') {
            this.props.dispatch(sortByDate())
        } else if (e.target.value === 'amount') {
            this.props.dispatch(sortByAmount())
        }
    }

    render() {
        return (
            <div className='content-container'>

                <div className='input-group'>
                    <div className='input-group__item'>
                        <input
                            type="text"
                            className='text-input'
                            placeholder='Search expenses'
                            defaultValue={this.props.filters.text}
                            onChange={this.onTextChange} />

                    </div>
                    <div className='input-group__item'>
                        <select
                            className='select'
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className='input-group__item'>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calanderFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)