import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions/auth'

const Header = (props) => (
    <header>
        <h1>Epensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={props.signout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(signOut())
})

export default connect(undefined, mapDispatchToProps)(Header)