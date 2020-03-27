import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import routes 
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage'
import { createExpensePage } from '../components/createExpensePage'
import { editEXpensePage } from '../components/editEXpensePage'
import { helpPage } from '../components/helpPage'
import { notFoundPage } from '../components/notFoundPage'
import { Header } from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={createExpensePage} />
                <Route path="/edit" component={editEXpensePage} />
                <Route path="/help" component={helpPage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>


    </BrowserRouter>
)

export default AppRouter