import React from 'react';
import {Card, Button, Row, Col, Container, Nav, NavDropdown} from 'react-bootstrap'
import Projects from "./Projects.js"
import About from "./About.js"

import { Bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

export default class App extends React.Component {
styles= {
  flipY: {animation: 'x 1s',
  animationName: Radium.keyframes(Bounce, 'bounce'),
}
}


state = {
  content: [
    {type:  <Projects></Projects>, scroll: true}, 
    {type: <About></About>, scroll: false}],
  contentIndex: 0
}

handleNavSelection(eventKey){
  if (eventKey == 2){
    this.setState({contentIndex: 0});
  }else if (eventKey == 3) {
    this.setState({contentIndex: 1});
  }else if (eventKey == 4.1){
    window.open("./Seth_Kujawa_Resume_2.pdf", '_blank');
  }else if (eventKey == 4.2){
    window.open("https://www.linkedin.com/in/seth-kujawa-611b56145/", '_blank');
  }else if (eventKey == 4.3){
    window.open("https://github.com/seth0808", '_blank');
  }else {
    window.open("https://www.gierad.com/assets/aurasense/aurasense.pdf", '_blank');
    
  }
}

scrollImage() {
  const images = require.context('./images', true);
    var img = images("./scroll.png");
  if (this.state.content[this.state.contentIndex]["scroll"] == true){
    return <img src={img} style={{position: "fixed", bottom: "-20px", left: "0px", height: "100px", width: "100px"}}></img>
  }else {
    return <img src={img} style={{opacity: "0", position: "fixed", bottom: "-20px", left: "0px", height: "100px", width: "100px"}}></img>
  }
}

render(){
  const handleSelect = eventKey => this.handleNavSelection(eventKey);

  return (
    <div>
    <Container>
      <Row><Col><p id='name'>SETH KUJAWA</p></Col></Row>
      <Row><Col>
    <Nav  fill variant="tabs" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="2">
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Item">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" disabled>
          Videos
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="More" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Resume</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">LinkedIn</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">GitHub</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Cool Finds</NavDropdown.Item>
      </NavDropdown>
    </Nav></Col></Row>
    <Row><Col>{this.state.content[this.state.contentIndex]["type"]}</Col></Row>
    </Container>
      {this.scrollImage()}
    </div>
    
  );

  
}
}