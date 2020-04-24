import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// import routes 
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage'
import CreateExpensePage from '../components/CreateExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import { helpPage } from '../components/HelpPage'
import { notFoundPage } from '../components/NotFoundPage'
import LoginPage from '../components/Login'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={CreateExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={helpPage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>


    </Router>
)

export default AppRouter