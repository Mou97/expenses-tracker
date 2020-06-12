import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import LoadingPage from './components/LoadingPage'

import AppRouter, { history } from './routes/AppRouter'
import configStore from './store/configStore'
import './firebase/firebase'
import '../node_modules/normalize.css/normalize.css'
import './styles/index.scss'
// import actions
import { startSetExpenses } from './actions/expenses'
import { firebase } from './firebase/firebase'
import { login, logout } from './actions/auth'

const store = configStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDom.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
}

ReactDom.render(<LoadingPage />, document.getElementById('root'))



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})