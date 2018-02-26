import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import TopBg from '../assets/images/top-bg.jpg';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styles';

class Press extends Component {
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
          <Header as='h1' textAlign='center'>Press Component</Header>
          <p>
            Here,   <br />
            among the market vegetables, <br />
            this torpedo <br />
            from the ocean   <br />
            depths,   <br />
            a missile   <br />
            that swam, <br />
            now   <br />
            lying in front of me <br />
            dead. <br />
  <br />
            Surrounded <br />
            by the earth's green froth   <br />
            —these lettuces, <br />
            bunches of carrots— <br />
            only you   <br />
            lived through <br />
            the sea's truth, survived <br />
            the unknown, the <br />
            unfathomable <br />
            darkness, the depths<br />
            of the sea, <br />
            the great   <br />
            abyss, <br />
            le grand abîme,<br />
            only you:   <br />
            varnished <br />
            black-pitched   <br />
            witness <br />
            to that deepest night. <br />

            Only you: <br />
            dark bullet <br />
            barreled   <br />
            from the depths, <br />
            carrying   <br />
            only   <br />
            your   <br />
            one wound, <br />
            but resurgent, <br />
            always renewed, <br />
            locked into the current, <br />
            fins fletched <br />
            like wings <br />
            in the torrent, <br />
            in the coursing <br />
            of <br />
            the <br />
            underwater<br />
            dark, <br />
            like a grieving arrow, <br />
            sea-javelin, a nerveless   <br />
            oiled harpoon. <br />
  <br />
            Dead <br />
            in front of me,<br />
            catafalqued king <br />
            of my own ocean; <br />
            once   <br />
            sappy as a sprung fir <br />
            in the green turmoil, <br />
            once seed <br />
            to sea-quake, <br />
            tidal wave, now <br />
            simply <br />
            dead remains;<br />
            in the whole market<br />
            yours   <br />
            was the only shape left <br />
            with purpose or direction <br />
            in this   <br />
            jumbled ruin <br />
            of nature; <br />
            you are   <br />
            a solitary man of war <br />
            among these frail vegetables, <br />
            your flanks and prow <br />
            black   <br />
            and slippery <br />
            as if you were still <br />
            a well-oiled ship of the wind, <br />
            the only <br />
            true <br />
            machine <br />
            of the sea: unflawed, <br />
            undefiled,   <br />
            navigating now <br />
            the waters of death.<br />
          </p>
        </Container>
      </Container>
    );
  }
}

export default Press;
