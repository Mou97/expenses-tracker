import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducers from '../reducers/expenses'
import filtersReducers from '../reducers/filters'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducers,
            filters: filtersReducers
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}

