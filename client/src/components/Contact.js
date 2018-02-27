import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/top-bg.jpg';
import Footer from './partials/Footer';
import SubmitForm from './partials/SubmitForm';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Contact extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH1>
              Contact Us
            </HhH1>
            <HhH2>
              We'd love to hear from you
            </HhH2>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' />
          <Container fluid>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <SubmitForm />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Contact;
