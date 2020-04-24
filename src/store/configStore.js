import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import expensesReducers from '../reducers/expenses'
import filtersReducers from '../reducers/filters'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducers,
            filters: filtersReducers,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}

