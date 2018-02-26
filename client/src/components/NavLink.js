import React, { Component } from 'react';
import { NavStyled, NavLogo, NavLinks, LinkMm } from '../css/styles';
import '../css/styles.css';

class NavLink extends Component {

  theLink = () => {
    const { name, to, isCurrent } = this.props;
    let linkClass = '';
    if (isCurrent){
      (isCurrent == 'yes') ? linkClass="navlink-current" : linkClass="navlink";
    } else {
      return (
        <p>Missing "current" status for link</p>
      )
    }
    if (name && to){
      return(
        <a
          href={to}
          className={linkClass}
        >
          {name}
        </a>
      );
    } else {
      return (
        <span>*</span>
      );
    }
  }

  // showHoverStyle = () => {
  //   this.style = styles.linkTextHover;
  // }

  render() {
    return(
      <LinkMm>
        {this.theLink()}
      </LinkMm>
    );
  }
}

// const styles = {
//   linkText: {
//     color: 'white',
//   },
//   linkTextHover: {
//     color: 'red',
//   },
// }

export default NavLink;
