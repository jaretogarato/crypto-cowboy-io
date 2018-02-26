import React from 'react';
import { Segment, Image, Container, Grid, Icon, List } from 'semantic-ui-react';
import { styles } from '../../css/inlineStyles';
import '../../css/styles.js';
// import LogoMed from '../../assets/images/ims-logo-med.png';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Grid padded stackable>
          <Grid.Row />
          <Grid.Row>
            <Grid.Column width={16}>
              <List>
                <List.Item style={styles.lightGrayText} >
                  <List.Icon name='map pin' />
                  <List.Content>
                    1520 Windhaven Circle <br />
                    Las Vegas, NV 89117<br />
                  </List.Content>
                </List.Item>
                <List.Item
                  icon='phone'
                  style={styles.lightGrayText}
                  content='888-555-1212'
                />
                <List.Item style={styles.lightGrayText}>
                  <List.Icon name='mail outline' />
                  <List.Content>
                    info@cryptocowbow.io
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={11}>
              <Segment basic style={styles.lightGrayText}>
                Copyright / Disclaimer go here<br />&nbsp;<br />
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Footer;
