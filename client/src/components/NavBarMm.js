import React, { Component } from 'react';
import { Menu, Container, Header, Image } from 'semantic-ui-react';
// import { StickyContainer, Sticky } from 'react-sticky';
// import Sticky from 'react-stickynode';
import Sticky from 'react-sticky-el';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { NavStyled, NavLogo, NavLinks } from '../css/styles';
import NavLink from './NavLink';
import '../css/fonts.css';
import LogoImage from '../assets/images/cryptocowboy-logo-nav.png';


class NavBarMm extends Component {
  state = {transform: 0.0, navBgOpacity: 0.0, navBgHeight: 100, currentRoute: '/'};

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
    this.getRoute();
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop; // ***
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
          {/* <Container> */}
            <NavLogo logoImage={LogoImage} logoWidth={'253px'} />
            {/* <Container style={styles.containerFlexFloatLeft}> */}
            <NavLinks>
              {/* <i ref={(ref) => this.scrollIcon = ref} className="fa fa-2x fa-chevron-down">HOWDY</i> */}
              <NavLink name='Home' to='/' isCurrent={this.isRouteCurrent('/')} />
              <NavLink name='Clients' to='/clients' isCurrent={this.isRouteCurrent('/clients')} />
              {/* <NavLink name='Why' to='/why' /> */}
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

// class NavBarMm extends Component {
//   state = {style:[], isSticky:true, wasSticky:true, distanceFromTop:0, distanceFromBottom:5000, calculatedHeight:100};
//
//   render() {
//     const {style, isSticky, wasSticky, distanceFromTop, distanceFromBottom, calculatedHeight} = this.state;
//
//     return (
//       <StickyContainer style={styles.stickyContainer}>
//         <Sticky topOffset={80}>
//           {
//             ({
//               style,
//               // the following are also available but unused in this example
//               // isSticky,
//               // wasSticky,
//               // distanceFromTop,
//               // distanceFromBottom,
//               // calculatedHeight
//             }) => {
//               return (
//                 <Container fluid>
//                   <Link to='/'>
//                     <span style={style}>
//                       Home
//                     </span>
//                   </Link>
//                   <Link to='about'>
//                     <span style={style}>
//                       About
//                     </span>
//                   </Link>
//                   <Link to='contact'>
//                     <span style={style}>
//                       Contact
//                     </span>
//                   </Link>
//                 </Container>
//               )
//             }
//           }
//         </Sticky>
//       </StickyContainer>
//     );
//   }
// }

const styles = {
  stickyContainer: {
    padding: '5%',
    border: '1px solid',
    // float: 'left',
  },
  linkWhiteFlexEnd: {
    color: 'white',
    fontSize: '1em',
    paddingLeft: '3em',
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
  },
  containerFlexFloatLeft: {
    display: 'flex',
    justifyContent: 'flex-end',
    float: 'left',
    border: '1px solid orange',
  },
  linkFlexRight: {
    justifyContent: 'flex-end',
  },
  floatLeft: {
    float: 'left',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBarMm));
