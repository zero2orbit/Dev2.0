import React, { Fragment, useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../action/auth'


const Login = ({ login, isAuthenticate }) => {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const { email, password } = formData

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value})}

    const onSubmit = async (e) =>{
      console.log("Login Button Press")
      e.preventDefault();
      login(email, password)
    }

    //Redirect To Dashbord 
    if (isAuthenticate){
      return <Redirect to= "/dashbord" />
    }
    

  return (
    <Fragment >
        <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit ={e => onSubmit(e) }>
       
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={e => onChange(e)}
            minLength="3"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Create  an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  )
}

Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticate: PropTypes.bool
}

const mapStateToProp = state => ({
  isAuthenticate: state.authReducer.isAuthenticate
})

export default connect (mapStateToProp, {login}) (Login);
