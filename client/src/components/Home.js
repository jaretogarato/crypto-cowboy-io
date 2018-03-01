import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-home-02.png';
import Cowboy from '../assets/images/cowboy-2.jpg';
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
      <Container fluid id={0}>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              We Make Blockchain
            </HhH2>
            <HhH1>
              Better
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Introducing Crypto Cowboy</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <img src={Cowboy} />
                <Header as='h3' centered>
                  By using our proprietary blockchain technology specifically designed for financial services, CryptoCowboy can take the world of contracts and certificates and turn them into an efficient, fast, and secure way of managing ownership of your assets.
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Home;
