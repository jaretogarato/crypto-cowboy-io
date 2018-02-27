import React, { Component } from 'react';
import { Menu, Container, Header, Image } from 'semantic-ui-react';
// import { StickyContainer, Sticky } from 'react-sticky';
// import Sticky from 'react-stickynode';
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
    let rootContainer = document.getElementById("root");
    console.log(rootContainer);
    let scrollTop = rootContainer.scrollTop;
    let itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      transform: itemTranslate,
    });
    if (scrollTop > 100){
      this.setState({
        navBgOpacity: 1,
        navBgHeight: 200,
      })
    } else {
      this.setState({
        navBgOpacity: 0,
        navBgHeight: 100,
      })
    }
    console.log('scrollTop: ' + scrollTop);
    console.log('this.state.transform: ' + this.state.transform);
    console.log('this.state.navBgOpacity: ' + this.state.navBgOpacity);
    console.log('this.state.navBgHeight: ' + this.state.navBgHeight);
    this.getRoute();
  }

  // handleScroll() {
  //   var winHeight = window.innerHeight;
  //
  //   // Annoying to compute doc height due to browser inconsistency
  //   var body = document.body;
  //   var html = document.documentElement;
  //   var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
  //                  html.clientHeight, html.scrollHeight, html.offsetHeight );
  //
  //   var value = document.body.scrollTop;
  //   console.log ("Scroll position: " + value);
  //   console.log ("Container node offset:" + containerNode.scrollTop);
  // }

  getRoute = () => {
    var currentRoute = this.props.location.pathname;
    this.setState({
      currentRoute: currentRoute,
    });
    // console.log('----------------');
    // console.log('currentRoute: ' + currentRoute);
    // console.log('currentRoute in state: ' + this.state.currentRoute);
    // console.log('----------------');
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
      // <Sticky enabled={true} top={0} bottomBoundary={1200} onStateChange={handleStateChange}>
      <Container>
        {/* <NavStyled onStateChange={handleStateChange}> */}
        <NavStyled>
            <NavLogo logoImage={LogoImage} logoWidth={'253px'} />
            <NavLinks>
              {/* <i ref={(ref) => this.scrollIcon = ref} className="fa fa-2x fa-chevron-down">HOWDY</i> */}
              <NavLink name='Home' to='/' isCurrent={this.isRouteCurrent('/')} />
              <NavLink name='Clients' to='/clients' isCurrent={this.isRouteCurrent('/clients')} />
              <NavLink name='Services' to='/services' isCurrent={this.isRouteCurrent('/services')} />
              <NavLink name='Regulatory' to='/regulatory' isCurrent={this.isRouteCurrent('/regulatory')} />
              <NavLink name='Press' to='/press' isCurrent={this.isRouteCurrent('/press')} />
              <NavLink name='Contact' to='/contact' isCurrent={this.isRouteCurrent('/contact')} />
            </NavLinks>
            {/* </Container> */}
          {/* </Container> */}
        </NavStyled>
      </Container>
      // </Sticky>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBarMm));
