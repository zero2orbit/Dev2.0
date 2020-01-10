import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getCurrentProfile  } from '../../action/profile'
import Spinner from '../layout/spinner'

const Dashbord = ({ getCurrentProfile, auth:{ user }, profile:{profile, loading}}) => {

    useEffect(()=>{
        getCurrentProfile();
    }, [])

    return (
        loading && profile === null ? <Spinner /> : <Fragment>
            <h1 className="large text-primary">Dashbord</h1>
            <p className="lead">
                <i className="fas fa-user" />Welcome { user && user.name }
            </p>
            { profile===null ?
            
            //Profile Account Has Not Set
            (<Fragment>
                <p>You have not setup a Profile, Please Add Some information </p>
                <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
            </Fragment>) : 
            

            //Already Has A Profile Account 
            (<Fragment>Has</Fragment>)}
        </Fragment>
    )
}

Dashbord.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    auth: state.authReducer,
    profile: state.profileReducer
})


export default connect(mapStateToProp, { getCurrentProfile })(Dashbord)
