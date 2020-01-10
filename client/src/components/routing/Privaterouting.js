import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const Privaterouting = ({component: Component, auth :{isAuthenticate, loading}, ...rest }) => 
(
    <Route {...rest} render = {props => !isAuthenticate && !loading ? (<Redirect to='/login' />) : (<Component {...props} />) } />
)

Privaterouting.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProp = state =>({
    auth: state.authReducer
})


export default connect(mapStateToProp)(Privaterouting)
