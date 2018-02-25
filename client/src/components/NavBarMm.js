import React, { Component } from 'react';
import { Menu, Container, Header } from 'semantic-ui-react';
// import { StickyContainer, Sticky } from 'react-sticky';
// import Sticky from 'react-stickynode';
import Sticky from 'react-sticky-el';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { NavStyled } from '../css/styles';
import '../css/fonts.css';
// import { _debounce, insertNewClass, concat, sortBy, map, sample} from 'lodash';

class NavBarMm extends Component {
  state = {transform: 0.0, navBgOpacity: 0.0, navBgHeight: 100};

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

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
  }

  render() {
    const handleStateChange = (status) => {
      if (status.status === Sticky.STATUS_FIXED) {
        console.log('the component is sticky');
      }
      if (status.status === Sticky.STATUS_RELEASED) {
        console.log('the component is released');
      }
    }

    return (
      // <Sticky enabled={true} top={0} bottomBoundary={1200} onStateChange={handleStateChange}>
      <div>

        <NavStyled onStateChange={handleStateChange}>
          <Container>
            <i ref={(ref) => this.scrollIcon = ref} className="fa fa-2x fa-chevron-down">HOWDY</i>
            <Link to='/'>
            <span>
              Home
            </span>
            </Link>
            <Link to='/about'>
            <span>
              About
            </span>
            </Link>
            <Link to='/contact'>
            <span>
              Contact
            </span>
            </Link>
          </Container>
        </NavStyled>
      </div>
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
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBarMm));
