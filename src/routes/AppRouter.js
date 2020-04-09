import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import routes 
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage'
import CreateExpensePage from '../components/CreateExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import { helpPage } from '../components/HelpPage'
import { notFoundPage } from '../components/NotFoundPage'
import { Header } from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={CreateExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={helpPage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>


    </BrowserRouter>
)

export default AppRouter