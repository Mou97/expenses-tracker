import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// import routes 
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage'
import CreateExpensePage from '../components/CreateExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import { helpPage } from '../components/HelpPage'
import { notFoundPage } from '../components/NotFoundPage'
import Header from '../components/Header'
import LoginPage from '../components/Login'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={CreateExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={helpPage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>


    </Router>
)

export default AppRouter