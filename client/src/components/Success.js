import React, { Component } from 'react';
import { Header, Grid, Container, Segment, Image, List, Item, Divider, Card } from 'semantic-ui-react';

import TopBg from '../assets/images/top-bg.jpg';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';
import SubmitForm from './partials/SubmitForm';
import Footer from './partials/Footer';
import { inlineStyles } from '../css/inlineStyles.js';

class Success extends Component {
  render() {
    return (
      <div>
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
        </Container>

        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={14}>
                <Header as='h3' align='center'>
                  H3 header action.
                </Header>
                <Header as='h3'>&nbsp;</Header>
                <Header as='h2' align='center'>
                  H2 header action?
                </Header>
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Divider />
                <Header as='h3'>
                  Introducing Crypto Cowboy
                </Header>
                WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT!
                <Divider />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h2' align='center'>
                  When I was first asked to make a film about my nephew, Hubert Farnsworth, I thought "Why should I?" Then later, Leela made the film. But if I did make it, you can bet there would have been more topless women on motorcycles. Roll film!
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h4' align='center'>
                  Anyone who laughs is a communist!
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container>
          <Grid columns='equal' padded>
            <Grid.Row>
              <Grid.Column align='center'>
                <Card.Group itemsPerRow={3}>
                  <Card>
                    <Card.Header as='h2' style={inlineStyles.h2CardHeaderBlue}>
                      About
                    </Card.Header>
                    <Card.Content style={inlineStyles.cardContentNoTopLine}>
                      <List bulleted style={inlineStyles.listLeft}>
                        <List.Item>
                          A
                        </List.Item>
                        <List.Item>
                          B
                        </List.Item>
                        <List.Item>
                          C
                        </List.Item>
                      </List>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Header as='h2' style={inlineStyles.h2CardHeaderOrange}>
                      Benefits
                    </Card.Header>
                    <Card.Content>
                      <List bulleted style={inlineStyles.listLeft}>
                        <List.Item>
                          1
                        </List.Item>
                        <List.Item>
                          2
                        </List.Item>
                        <List.Item>
                          3
                        </List.Item>
                      </List>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Header as='h2' style={inlineStyles.h2CardHeaderGreen}>
                      More Benefits
                    </Card.Header>
                    <Card.Content>
                      <List bulleted style={inlineStyles.listLeft}>
                        <List.Item>1A</List.Item>
                        <List.Item>1B</List.Item>
                        <List.Item>1C</List.Item>
                      </List>
                    </Card.Content>
                  </Card>
                </Card.Group>
                <Segment basic></Segment>
                <Segment basic align='left'>
                  <p>
                    Have you ever tried just turning off the TV, sitting down with your children, and hitting them?
                  </p>
                  <p>
                    I don't want to be rescued. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food.
                  </p>
                  <p>
                    Noooooo! That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Is that a cooking show? In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells.
                  </p>

                  <p><br /></p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container fluid>
          <Grid>
            {/* <Grid.Row>
              <Grid.Column width={16}>
                <Segment basic>
                  &nbsp;
                </Segment>
              </Grid.Column>
            </Grid.Row> */}
            <Grid.Row>
              <Grid.Column width={16}>
                <SubmitForm />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Success;
