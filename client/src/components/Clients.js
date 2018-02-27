import React, { Component } from 'react';
import { Header, Container, Card, Icon, Image } from 'semantic-ui-react';
import TopBg from '../assets/images/top-bg.jpg';
import Footer from './partials/Footer';
import LogoSunPacific from '../assets/images/sun-pacific.png';
import LogoMoneyTrac from '../assets/images/mtrac.png';
import LogoUSGold from '../assets/images/us-gold.png';
import LogoOpenNetwork from '../assets/images/on-blue-shadow.png';
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
            <HhH2>
              We Love
            </HhH2>
            <HhH1>
              Our Clients
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Clients</Header>
          <Card.Group itemsPerRow={3} centered>
            <Card>
              <Image src={LogoSunPacific} />
              <Card.Content>
                <Card.Header>
                  <a href="http://sunpacificpower.com/">Sun Pacific Power Corp</a></Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                {/* <Card.Description>Daniel is a comedian living in Nashville.</Card.Description> */}
              </Card.Content>
              {/* <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content> */}
            </Card>
            <Card>
              <Image src={LogoMoneyTrac} />
              <Card.Content>
                <Card.Header>
                  <a href="https://www.moneytractechnology.com/">MoneyTrac</a></Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                {/* <Card.Description>Daniel is a comedian living in Nashville.</Card.Description> */}
              </Card.Content>
              {/* <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content> */}
            </Card>
            <Card>
              <Image src={LogoUSGold} />
              <Card.Content>
                <Card.Header>
                  <a href="http://www.usgoldinc.com/">US Gold</a></Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                {/* <Card.Description>Daniel is a comedian living in Nashville.</Card.Description> */}
              </Card.Content>
              {/* <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content> */}
            </Card>
            <Card>
              <Image src={LogoOpenNetwork} />
              <Card.Content>
                <Card.Header>
                  <a href="http://www.opennetwork.exchange/">Open Network Exchange</a></Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                {/* <Card.Description>Daniel is a comedian living in Nashville.</Card.Description> */}
              </Card.Content>
              {/* <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content> */}
            </Card>
          </Card.Group>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Clients;
