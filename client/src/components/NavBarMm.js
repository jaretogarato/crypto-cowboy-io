import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { handleLogout } from '../actions/auth';
import { inlineStyles } from '../css/inlineStyles';
import { NavStyled, NavLinks } from '../css/styledComponents';
import NavLink from './NavLink';
import LogoImage from '../assets/images/cryptocowboy-logo-nav.png';
import '../css/fonts.css';
import '../css/styles.css';
import '../css/semantic-ui/semantic.min.css';

class NavBarMm extends Component {
  state = {transform: 0.0, navBgOpacity: 1.0, navBgHeight: 100, currentRoute: '/'};

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.scrollTo(0, 0);
    this.getRoute();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let rootContainerBoundingRect = document.getElementById('root').getBoundingClientRect();
    let scrollY = rootContainerBoundingRect.y;

    //console.log('scrollY: ' + scrollY);

    if (scrollY >= -50 ){
      this.setState({
        navBgOpacity: 1,
      });
    } else if (scrollY < -50 && scrollY >= -150 ) {
      let navBgOpacity = 1 + ((scrollY + 50) / 100);
      this.setState({
        navBgOpacity: navBgOpacity,
      });
    } else {
      this.setState({
        navBgOpacity: 0,
      });
    }
    // console.log("this.state.navBgOpacity: " + this.state.navBgOpacity);
  }

  getRoute = () => {
    var currentRoute = this.props.location.pathname;
    this.setState({
      currentRoute: currentRoute,
    });
  }

  isRouteCurrent = (route) => {
    if (this.state.currentRoute === route){
      return('yes');
    } else {
      return('no');
    }
  }

  render() {
    return (
      <Container>
        <NavStyled navOpacity={this.state.navBgOpacity}>
          <div className="logo-nav-wrap">
            <a href="/">
              <img src={LogoImage} alt="Crypto Cowboy Logo" className='logo-nav' />
            </a>
          </div>
          <NavLinks navOpacity={this.state.navBgOpacity}>
            <NavLink name='Home' to='/' isCurrent={this.isRouteCurrent('/')} />
            <NavLink name='Clients' to='/clients' isCurrent={this.isRouteCurrent('/clients')} />
            <NavLink name='Services' to='/services' isCurrent={this.isRouteCurrent('/services')} />
            <NavLink name='Regulatory' to='/regulatory' isCurrent={this.isRouteCurrent('/regulatory')} />
            {/* <NavLink name='Press' to='/press' isCurrent={this.isRouteCurrent('/press')} /> */}
            <NavLink name='Contact' to='/contact' isCurrent={this.isRouteCurrent('/contact')} />
          </NavLinks>
        </NavStyled>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBarMm));
