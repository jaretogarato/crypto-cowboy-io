import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-contact.jpg';
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
            <HhH2>
              Contact
            </HhH2>
            <HhH1>
              Us
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' />
          <Header as='h1' textAlign='center'>
            We'd love to hear from you.
          </Header>
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
