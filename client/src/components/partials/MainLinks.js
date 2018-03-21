import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
import '../../css/mainlinks.css';

import IconCoinClients from '../../assets/images/icon-clients-coin-default.png';
import IconCoinClientsHover from '../../assets/images/icon-clients-coin-hover.png';
import IconCoinRegulatory from '../../assets/images/icon-regulatory-coin-default.png';
import IconCoinRegulatoryHover from '../../assets/images/icon-regulatory-coin-hover.png';
import IconCoinServices from '../../assets/images/icon-services-coin-default.png';
import IconCoinServicesHover from '../../assets/images/icon-services-coin-hover.png';
import IconCoinContact from '../../assets/images/icon-contact-coin-default.png';
import IconCoinContactHover from '../../assets/images/icon-contact-coin-hover.png';

import IconCoinClientsTop from '../../assets/images/icon-coin-clients-top.png';
import IconCoinClientsBottom from '../../assets/images/icon-coin-clients-bottom.png';
import IconCoinServicesTop from '../../assets/images/icon-coin-services-top.png';
import IconCoinServicesBottom from '../../assets/images/icon-coin-services-bottom.png';
import IconCoinRegulatoryTop from '../../assets/images/icon-coin-regulatory-top.png';
import IconCoinRegulatoryBottom from '../../assets/images/icon-coin-regulatory-bottom.png';
import IconCoinContactTop from '../../assets/images/icon-coin-contact-top.png';
import IconCoinContactBottom from '../../assets/images/icon-coin-contact-bottom.png';

class MainLinks extends React.Component {
  render() {
    return (
      <Grid centered columns='equal'>
        <Grid.Row style={inlineStyles.mainLinksSpacerTop} />
        {/* <Grid.Row>
          <Grid.Column style={inlineStyles.mainLinks}>
            <a href='/clients'><Image src={IconCoinClients} size='small' align='center' /></a>
          </Grid.Column>
          <Grid.Column style={inlineStyles.mainLinks}>
            <a href='/services'><Image src={IconCoinServices} size='small' align='center' /></a>
          </Grid.Column>
          <Grid.Column style={inlineStyles.mainLinks}>
            <a href='/regulatory'><Image src={IconCoinRegulatory} size='small' align='center' /></a>
          </Grid.Column>
          <Grid.Column style={inlineStyles.mainLinks}>
            <a href='/contact'><Image src={IconCoinContact} size='small' align='center' /></a>
          </Grid.Column>
        </Grid.Row> */}

        <Grid.Row>
          <Grid.Column style={inlineStyles.mainLinks}>
            <a href='/clients'>
              <div className="cf">
                <img className="bottom" src={IconCoinClientsBottom} />
                <img className="top" src={IconCoinClientsTop} />
              </div>
            </a>
          </Grid.Column>
          <Grid.Column style={inlineStyles.mainLinks}>
            <a href='/services'>
              <div className="cf">
                <img className="bottom" src={IconCoinServicesBottom} />
                <img className="top" src={IconCoinServicesTop} />
              </div>
            </a>
          </Grid.Column>
          <Grid.Column style={inlineStyles.mainLinks}>
            <a href='/regulatory'>
              <div className="cf">
                <img className="bottom" src={IconCoinRegulatoryBottom} />
                <img className="top" src={IconCoinRegulatoryTop} />
              </div>
            </a>
          </Grid.Column>
          <Grid.Column style={inlineStyles.mainLinks}>
            <a href='/contact'>
              <div className="cf">
                <img className="bottom" src={IconCoinContactBottom} />
                <img className="top" src={IconCoinContactTop} />
              </div>
            </a>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column textAlign='center' style={inlineStyles.mainLinks}>
            {/* <Header as='h2' textAlign='center'> */}
              <h2><a href='/clients'>Clients</a></h2>
            {/* </Header> */}
          </Grid.Column>
          <Grid.Column>
            <Header as='h2' textAlign='center'>
              <a href='/services'>Services</a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h2' textAlign='center'>
              <a href='/regulatory'>Regulatory</a>
            </Header>
          </Grid.Column>
          <Grid.Column>
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
