import React from 'react';
import { Segment, Image, Container, Grid, Icon, List, Header } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
// import IconClients from '../../assets/images/icon-clients-ltblue.png';
// import IconContact from '../../assets/images/icon-contact-ltblue.png';
// import IconRegulatory from '../../assets/images/icon-regulatory-ltblue.png';
// import IconServices from '../../assets/images/icon-services-ltblue.png';

import IconCoinClients from '../../assets/images/icon-clients-coin-default.png';
import IconCoinClientsHover from '../../assets/images/icon-clients-coin-hover.png';
import IconCoinRegulatory from '../../assets/images/icon-regulatory-coin-default.png';
import IconCoinRegulatoryHover from '../../assets/images/icon-regulatory-coin-hover.png';
import IconCoinServices from '../../assets/images/icon-services-coin-default.png';
import IconCoinServicesHover from '../../assets/images/icon-services-coin-hover.png';
import IconCoinContact from '../../assets/images/icon-contact-coin-default.png';
import IconCoinContactHover from '../../assets/images/icon-contact-coin-hover.png';


class MainLinks extends React.Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row style={inlineStyles.mainLinksSpacerTop} />
        <Grid.Row>
          <Grid.Column width={4} style={inlineStyles.mainLinks}>
            <a href='/clients'><Image src={IconCoinClients} size='small' align='center' /></a>
          </Grid.Column>
          <Grid.Column width={4} style={inlineStyles.mainLinks}>
            <a href='/services'><Image src={IconCoinServices} size='small' align='center' /></a>
          </Grid.Column>
          <Grid.Column width={4} style={inlineStyles.mainLinks}>
            <a href='/regulatory'><Image src={IconCoinRegulatory} size='small' align='center' /></a>
          </Grid.Column>
          <Grid.Column width={4} style={inlineStyles.mainLinks}>
            <a href='/contact'><Image src={IconCoinContact} size='small' align='center' /></a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} textAlign='center' style={inlineStyles.mainLinks}>
            {/* <Header as='h2' textAlign='center'> */}
              <h2><a href='/clients'>Clients</a></h2>
            {/* </Header> */}
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' textAlign='center'>
              <a href='/services'>Services</a>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' textAlign='center'>
              <a href='/regulatory'>Regulatory</a>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' textAlign='center'>
              <a href='/contact'>Contact</a>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default MainLinks;
