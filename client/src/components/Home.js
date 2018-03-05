import React, { Component } from 'react';
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-home-02.png';
import Cowboy from '../assets/images/cowboy-2.jpg';
import MainLinks from './partials/MainLinks';
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
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Introducing Crypto Cowboy</Header>
          <Grid align='center' verticalAlign='middle' padded >
            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <img src={Cowboy} />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={14}>
                <Header as='h3' textAlign='center'>
                  By using our proprietary blockchain technology specifically designed for financial services, CryptoCowboy can take the world of contracts and certificates and turn them into an efficient, fast, and secure way of managing ownership of your assets.
                </Header>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
          </Grid>
          <MainLinks />
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Home;
