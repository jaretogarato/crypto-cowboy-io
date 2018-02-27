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
              Key Message
            </HhH1>
            <HhH2>
              Supporting Message
            </HhH2>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Contact Component</Header>
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
