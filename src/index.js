import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routes/AppRouter'
import configStore from './store/configStore'

import '../node_modules/normalize.css/normalize.css'
import './styles/index.scss'
// import actions

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configStore()

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas Bill' }))
store.dispatch(setTextFilter('water'))

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))

}, 3000);


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(jsx, document.getElementById('root'))