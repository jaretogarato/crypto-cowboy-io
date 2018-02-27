import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import TopBg from '../assets/images/top-bg.jpg';
import Footer from './partials/Footer';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH1>
              Key Message
            </HhH1>
            <HhH2>
              Supporting Message
            </HhH2>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Crypto Cowboy</Header>
          <p>
            By using our proprietary blockchain technology specifically designed for financial services, CryptoCowboy can take the world of contracts and certificates and turn them into an efficient, fast, and secure way of managing ownership of your assets.
          </p>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Home;
