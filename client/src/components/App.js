import React, { Component } from 'react';
import NoMatch from './NoMatch';
// import NavBar from './NavBar';
import NavBarMm from './NavBarMm';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Clients from './Clients';
import Services from './Services';
import Regulatory from './Regulatory';
import Press from './Press';
import Contact from './Contact';
import '../css/fonts.css';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <NavBarMm />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/clients' component={Clients} />
            <Route path='/services' component={Services} />
            <Route path='/regulatory' component={Regulatory} />
            <Route path='/press' component={Press} />
            <Route path='/contact' component={Contact} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
