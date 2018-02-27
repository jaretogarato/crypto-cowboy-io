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

class Regulatory extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              Compliance
            </HhH2>
            <HhH1>
              Matters
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Regulatory Compliance Adherence</Header>
          <p>
            Crypto Cowboy and its legal team ensures all designs meet all existing regulatory requirements needed Our philosophy is that security tokens should comply with all existing regulations in each country. Therefore, tailors the entire user experience for each investor based on their country and the advice of the client’s legal team, including various checks, different legal documents per country, management of quotas for types of investors etc. This enables our clients to maximize their global investor footprint, while staying well within the guidelines of their legal advisers.
          </p>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Regulatory;
