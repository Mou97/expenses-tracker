import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions/auth'

const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard"  >
                    <h1>Expenses Tracker</h1>
                </Link>
                <button className="button__logout" onClick={props.signout}>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(signOut())
})

export default connect(undefined, mapDispatchToProps)(Header)