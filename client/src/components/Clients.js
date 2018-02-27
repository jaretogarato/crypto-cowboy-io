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

class Clients extends Component {
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
          <Header as='h1' textAlign='center'>Clients</Header>
          <p>
            Sun Pacific Power Corp (Logo), link to their website or press release
          </p>
          <p>
            MoneyTrac (Logo or link to their website)
          </p>
          <p>
            USGold (Logo or link to their website)
          </p>
          <p>
            OpenNetwork.Exchange
          </p>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Clients;
