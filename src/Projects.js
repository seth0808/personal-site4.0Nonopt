import React from 'react';
import {Card, Button, Row, Col, Container, Nav, NavDropdown} from 'react-bootstrap';

import './Projects.css';

import { Bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const images = require.context('./images/projects', true);


export default class Projects extends React.Component {


    styles= {
      flipY: {animation: 'x 1s',
      animationName: Radium.keyframes(Bounce, 'bounce'),
    }
    }

    cards = [
        {title: "Data Science", content: "I explored data on gun violence for a term project. I brought in data from multiple different sources and used R to analyze it.", imagesrc: "./ds.png", buttonTitle: "GitHub - R", buttonLink: "https://seth0808.github.io/data_science_320_final/"}, 
        {title: "iOS Dev", content: "I enjoy completing the full stack in my projects. For iOS development, I like taking the time to make a nice looking interface but I also love to figure out how I will communicate between users and store their data.", imagesrc: "./grop.png", buttonTitle: "GitHub - Swift", buttonLink:"https://github.com/seth0808/Diner2.0"}, 
        {title: "Algorithms", content: "It's fun to see how algorithms we learn in class can be used in practice", imagesrc: "./maze.png", buttonTitle: "GitHub - Java", buttonLink: "https://github.com/seth0808/MazeSolver"}, 
        {title: "Machine Learning", content: "This is a topic I'm taking classes on right now. I'm most fascinated with the concept of neural evolution of augmenting topologies", imagesrc: "./nn.png", buttonTitle: "GitHub - Python", buttonLink: "https://github.com/seth0808/Neural-Network"}, 
        {title: "This Website", content: "This website has gone through many iterations, each exploring new technologies. This current site uses React.", imagesrc: "./thissite.png", buttonTitle: "GitHub - JavaScript", buttonLink: "https://github.com/seth0808/"},
        {title: "Letter Recognition", content: "A current project I'm working on with my team is a handwriting font creator. At the moment I'm exploring how to identify the letters in a photo of our own handwriting. I use some unsupervised machine learning.", imagesrc: "./letters.png", buttonTitle: "GitHub - Python", buttonLink: "https://github.com/seth0808/LetterRecog"}
      ]

      nullcard = {title: "More Soon", content: "More Projects Coming Soon", imagesrc: "./ds.png", buttonTitle: "GitHub", buttonLink: "https://google.com"}
    rowCount = Math.ceil(this.cards.length/2)
    colCount = 2
    

    genCols(rowIndex) {
        var cols = []
            for (var j = 0; j < this.colCount; j++){
                
                if (j + rowIndex * this.colCount < this.cards.length){
                    var img = images(this.cards[j + rowIndex * this.colCount]["imagesrc"]);
                  var card = <Col>
                <Card id='hello'>
                  <Card.Img  src={img} />
                  <Card.Body>
                  <Card.Title>{this.cards[j + rowIndex * this.colCount]["title"]}</Card.Title>
                  <Card.Text>
                  {this.cards[j + rowIndex * this.colCount]["content"]}
                  </Card.Text>
                    <Button href={this.cards[j + rowIndex * this.colCount]["buttonLink"]} target='_blank' variant='primary'>{this.cards[j + rowIndex * this.colCount]["buttonTitle"]}</Button>
                  </Card.Body>
                  </Card>
                  </Col>
                  cols.push(card)
                }else{
                    var img = images(this.nullcard["imagesrc"])
                    var card = <Col>
                <Card id='hello'>
                  <Card.Img variant='top' src={img} />
                  <Card.Body>
                  <Card.Title>{this.nullcard["title"]}</Card.Title>
                  <Card.Text>
                  {this.nullcard["content"]}
                  </Card.Text>
                    <Button href ={this.nullcard["buttonLink"]} target='_blank' variant='primary'>{this.nullcard["buttonTitle"]}</Button>
                  </Card.Body>
                  </Card>
                  </Col>
                  cols.push(card)
                }
                
          } 
          return cols
      }
      
      genRows() {
        var returnElements = []
      
        for (var i = 0; i < this.rowCount; i++){
          var row = <Row class='row'> {this.genCols(i)} </Row>
          returnElements.push(row)
          }
          
        return (
            <Container style={{marginTop: '20px'}}>
            {returnElements}
            </Container>

        );
      }

    render() {
        return (
        this.genRows())
    }
}