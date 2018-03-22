import React, { Component } from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-services.jpg';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
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
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Icon name='settings' size='massive' color='grey' />
              </Grid.Column>
              <Grid.Column width={12}>
                <p>
                  CryptoCowboy is a fully turnkey vertical solutions provider to make your coin or token business come alive.  From Pre-design, Business Plan & Requirements, Development, Deployment, Support, Legal Guidance and Marketing, our team takes full ownership of your offering and ensures it is managed, maintained, and adheres to all regulatory requirements to ensure your success.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <MainLinks />
        <Footer />
      </Container>
    );
  }
}

export default Services;
