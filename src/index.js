import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routes/AppRouter'
import configStore from './store/configStore'
import './firebase/firebase'
import '../node_modules/normalize.css/normalize.css'
import './styles/index.scss'
// import actions
import { startSetExpenses } from './actions/expenses'
import { firebase } from './firebase/firebase'

const store = configStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(<p>Loading...</p>, document.getElementById('root'))

store.dispatch(startSetExpenses()).then(() => {

    ReactDom.render(jsx, document.getElementById('root'))
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in ')
    } else {
        console.log('log out ')

    }
})