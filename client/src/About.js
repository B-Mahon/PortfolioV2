import React, {useState} from 'react';
import {Row,Container,Col,Progress} from 'reactstrap';
import avatar from './images/avatar.PNG';
import {animated,useSpring} from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import pdf from './Resume.pdf'
import mongoIcon from './images/mongo240.png';
import nodeIcon from './images/nodejs240.png';
import reactIcon from './images/react240.png';

function About(){
  const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 0 : 1, config: { duration: 1000,friction:1 }})
  return(
      <div class="about">
        <Container>
          <Row className="biography">
            <Col sm="12" md="6"><img src={avatar} alt='avatar'></img></Col>
            <Col sm="12" md="6">
              <div className="aboutme" onMouseEnter={() => toggle(!state)}>
                <animated.h1  style={{opacity: x.interpolate({ range: [0, 1], output: [1, 0.3] }),
                  transform: x.interpolate({range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  })
                  .interpolate(x => `scale(${x})`)}}>AboutMe</animated.h1>
                  <div className="text-background"><h3>Motivated To Produce Results</h3><p>I have lots of experience learning and using low level coding languages such as C and C++.  I have used these same principles and applied them to learn full stack web development over the past year.  With the aid of a Udemy course I have been able to expand my portfolio and software skills.</p></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Progress multi>
                <Progress bar value="15" />
                <Progress bar color="success" value="30" />
                <Progress bar color="info" value="25" />
                <Progress bar color="warning" value="20" />
                <Progress bar color="danger" value="5" />
                </Progress>
              </Col>
            </Row>
            <Row>
              <Col className="resume" xs="12" md="6">
                  <img src={mongoIcon} alt='mongoIcon'></img>
                  <img src={nodeIcon} alt='nodeIcon'></img>
                  <img src={reactIcon} alt='reactIcon'></img>
              </Col>
              <Col className="resume">
              <h1>Resume</h1>
              <div ><a href={pdf} ><FontAwesomeIcon size="5x" icon={faFile} ></FontAwesomeIcon></a></div>
              </Col>
          </Row>
        </Container>
      </div>
    )
  }

export default About;