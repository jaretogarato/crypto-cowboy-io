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

class Services extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              How Can
            </HhH2>
            <HhH1>
              We Help?
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Service Offerings</Header>
          <p>
            CryptoCowboy is a fully turnkey vertical solutions provider to make your coin or token business come alive.  From Pre-design, Business Plan & Requirements, Development, Deployment, Support, Legal Guidance and Marketing, our team takes full ownership of your offering and ensures it is managed, maintained, and adheres to all regulatory requirements to ensure your success.
          </p>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Services;
