import React, { Component } from 'react';
import { Menu, Container, Header, Image } from 'semantic-ui-react';
import Sticky from 'react-sticky-el';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { NavStyled, NavLogo, NavLinks } from '../css/styledComponents';
import NavLink from './NavLink';
import '../css/fonts.css';
import LogoImage from '../assets/images/cryptocowboy-logo-nav.png';

class NavBarMm extends Component {
  state = {transform: 0.0, navBgOpacity: 0.0, navBgHeight: 100, currentRoute: '/'};

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.scrollTo(0, 0);
    this.getRoute();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    // let scrollTop = event.srcElement.body.scrollTop;
    // let rootContainer = document.getElementById("root");
    // console.log(rootContainer);
    let rootContainerBoundingRect = document.getElementById('root').getBoundingClientRect();
    let scrollY = rootContainerBoundingRect.y;
    // console.log(rootContainerBoundingRect);
    console.log('scrollY: ' + scrollY);

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
    console.log("navBgOpacity: " + this.state.navBgOpacity);
  }

  getRoute = () => {
    var currentRoute = this.props.location.pathname;
    this.setState({
      currentRoute: currentRoute,
    });
  }

  isRouteCurrent = (route) => {
    if (this.state.currentRoute == route){
      // console.log('YES');
      return('yes');
    } else {
      // console.log('NO');
      return('no');
    }
  }

  render() {
    return (
      <Container>
        <NavStyled>
          <NavLogo logoImage={LogoImage} logoWidth={'253px'} />
          <NavLinks>
            {/* <i ref={(ref) => this.scrollIcon = ref} className="fa fa-2x fa-chevron-down">HOWDY</i> */}
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
