import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
import '../../css/inlineStyles.js';
// import LogoMed from '../../assets/images/ims-logo-med.png';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Grid>
            <Grid.Row style={inlineStyles.footerSpacerTop} />
          </Grid>
        </Container>
        <Container fluid style={inlineStyles.darkGrayBg}>
          <Grid padded stackable>
            <Grid.Row>
              <Grid.Column width={16}>
                <span style={inlineStyles.lightGrayTextPadLeftCenter}>
                  <p>
                    <Icon name='map pin' />
                    1520 Windhaven Circle<br />
                    &nbsp; Las Vegas, NV 89117<br />
                  </p>
                  <p>
                    <Icon name='mail outline' />
                    info@cryptocowboy.io
                  </p>
                  <p>
                    Copyright © 2018 | Crypto Cowboy<br />
                  </p>
                </span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Footer;
