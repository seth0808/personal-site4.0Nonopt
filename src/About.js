import React from 'react';
import {Jumbotron, Button, Row, Col, Container} from 'react-bootstrap';

import { bounceIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


import './About.css';

const styles = {
    bounceImage: {
        animation: 'x 1s',
      animationName: Radium.keyframes(bounceIn, 'bounceIn'),
      height: "200px", 
      width: "300px", 
      borderRadius : "20px"
    }
  }

export default class About extends React.Component {

    images = require.context('./images/', true);
    img = this.images('./seth.png');

   


  
    

    render() {
        
        return(
            <div>
            <Jumbotron>
                <Container>
                    <Row> 
                        <Col><StyleRoot><img src={this.img} style={styles.bounceImage}></img></StyleRoot></Col>
                        <Col> 
                            <h3>CS Major | DEC 2020</h3>
                            <h5> The University of Maryland - College Park</h5>
                        </Col>
                    </Row>
                </Container>
          </Jumbotron>
          </div>
          

            )
        
    }
}