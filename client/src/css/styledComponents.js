import styled from 'styled-components';
// import '../css/fonts.css';

// ------------ HeroHeader ---------------
export const HeroHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  background-image: url(${ props => props.bgImage}) !important;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  min-height: 30em;
  padding: 0;
  margin: 0;
  color: '#FFF';

  @media (max-width: 64em) {
    top: 10%;
    width: 120%;
    margin-left: -10%;
    padding: 0 10%;
  }

  @media (max-width: 50em) {
    top: 20%;
    width: 160%;
    margin-left: -30%;
    padding: 0 30%;
  }
`
export const HhTextContainer = styled.div`
  width: 80%;
  max-width:98%;
  min-width:51%;
  margin: 0;
  padding: 7% 10% 5%;
  text-align: center;

  @media (max-width: 50em) {
    padding: 7% 0 0 7%;
  }
`
export const HhH1 = styled.div`
  width:95%;
  max-width:95%;
  color: white;
  font-family: 'Gobold', sans-serif;
  font-size: 5em;
  line-height: 1em;
  padding-bottom: 1em;
`
export const HhH2 = styled.div`
  width: 95%;
  max-width:95%;
  color: white;
  font-family: 'Gobold', sans-serif;
  font-size: 3em;
  line-height: 1em;
  padding-bottom: 0.8em;
`

// ------------ NavBar ---------------
export const NavStyled = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 10%;
  z-index: 10000;
  background:rgba(255, 255, 255, 0.0);
  width: 80%;
  min-height: 100px;
  padding: 10px 0;
  text-align: right;
`
export const NavLogo = styled.div`
  ${'' /* min-width: 200px; */}
  ${'' /* min-height: 100px; */}
  ${'' /* height: 100%; */}
  width: ${ props => props.logoWidth};
  min-width: ${ props => props.logoWidth};
  background-image: url(${ props => props.logoImage}) !important;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0;
  margin: 0;
  float:left;
`
export const NavLinks = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  ${'' /* border: 1px solid orange; */}
`
export const LinkMm = styled.div`
  height: 1em;
  ${'' /* color: white; */}
  font-size: 0.9em;
  padding-left: 2.2em;
  display: flex;
  ${'' /* float: right; */}
  align-self: center flex-end;

  &:hover {
    color: #1fccdc;
  },
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const FlexContent = styled.div`
  flex: 1 0 auto;
  border-top: solid 1px;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`

// ------------ Footer ---------------
export const FooterStyled = styled.div`
  flex-shrink: 0;
`

// ------------ defunct ---------------
export const HeroHeaderTextContainerLeft = styled.div`
  z-index: 2;
  position: relative;

  /* Internet Explorer 10 */
  display:-ms-flexbox;
  -ms-flex-pack:start;
  -ms-flex-align:start;

  /* Firefox */
  display:-moz-box;
  -moz-box-pack:start;
  -moz-box-align:start;

  /* Safari, Opera, and Chrome */
  display:-webkit-box;
  -webkit-box-pack:start;
  -webkit-box-align:start;

  /* W3C */
  display:box;
  box-pack:start;
  box-align:start;

  display: block;
  min-height: 10em;
  overflow: hidden;
  margin: 0;
  padding: 5% 0 0 6%;
  text-align:left;

  :after {
    content: ' ';
    clear: both;
    display: table;
  }

  @media (max-width: 50em) {
    padding: 7% 0 0 7%;
  }
`
export const HeroHeaderTextContainerRight = styled.div`
  z-index: 2;
  position: relative;

  /* Internet Explorer 10 */
  display:-ms-flexbox;
  -ms-flex-pack:end;
  -ms-flex-align:end;

  /* Firefox */
  display:-moz-box;
  -moz-box-pack:end;
  -moz-box-align:end;

  /* Safari, Opera, and Chrome */
  display:-webkit-box;
  -webkit-box-pack:end;
  -webkit-box-align:end;

  /* W3C */
  display:box;
  box-pack:end;
  box-align:end;

  min-height: 10em;
  overflow: hidden;
  margin: 0;
  padding: 0 6% 2% 0;
  text-align: right;
  vertical-align: bottom !important;

  :after {
    content: ' ';
    clear: both;
    display: table;
  }

  @media (max-width: 50em) {
    padding: 0 7% 7% 0;
  }
`
export const HeroHeaderH1LowerRight = styled.h1`
  position: relative;
  color: white;
  display: inline-block;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 3em;
  text-align: right !important;
  padding-right: 6% !important;
  vertical-align: bottom !important;

  ${'' /* @media (max-width: 50em) {
    font-size: 2em;
  } */}
`
export const HeroHeaderH1UpperLeft = styled.h1`
  position: relative;
  color: white;
  display: block;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 3em;
  text-align: left !important;
  padding-left: 6%;
  padding-top: 5%;

  ${'' /* @media (max-width: 50em) {
    font-size: 2em;
  } */}
`