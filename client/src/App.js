import React, { Fragment, useEffect} from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import LandingPage from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alert'

// DashBord
import DashBord from './components/Dashbord/Dashbord'
import PrivateRout from './components/routing/Privaterouting'
import CreateProfile from "./components/profile-form/CreateProfile";


//Redux
import { Provider } from 'react-redux'
import store from './store'
import {loadUser} from './action/auth'
import setAuthToken from './utils/setAuthToken'



if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return(
    <Provider store={store}>
    <BrowserRouter>
    <Fragment>
    <Navbar />
    <Route exact  path="/" component={LandingPage} />  
    <section className='container'>
    <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRout exact path='/dashbord' component={DashBord} />
        <PrivateRout exact path='/create-profile' component={CreateProfile} />
      </Switch>
    </section>
  </Fragment>
  </BrowserRouter>
  </Provider>
  )
    
}

export default App;
