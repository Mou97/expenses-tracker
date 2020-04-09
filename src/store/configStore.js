import { createStore, combineReducers } from 'redux'

import expensesReducers from '../reducers/expenses'
import filtersReducers from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducers,
            filters: filtersReducers
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

