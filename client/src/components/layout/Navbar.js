import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../action/auth'


const Navbar = ( { auth: { isAuthenticate, loading }, logout  } ) => {

  const authLink = (
    <ul>
      <li>
        <Link to="/dashbord">
          <i className='fas fa-user' /> { '  ' }
          <span className='hide-sm'>Dashbord</span> 
        </Link>
      </li>


      <li>
        <a onClick={logout} href = '#!'>
        <i className='fas fa-sign-out-alt' /> { '  ' }
        <span className='hide-sm'>Logout</span>
        </a>
      </li>
  </ul>
  )

  const guestLink = (
    <ul>
      <li><Link to="#!">Developers</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )



  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to="/"><i className="fas fa-code"></i> Devlopers Point</Link>
    </h1>
  { !loading && (<Fragment>{ isAuthenticate ? authLink: guestLink }</Fragment>) }
  </nav>
  )
}


Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
  auth: state.authReducer
})



export default connect(mapStateToProp, { logout }) (Navbar)
