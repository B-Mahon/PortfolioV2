import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {animated, useSpring,} from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function Project(props){
    const [aniProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 350, friction: 50 } }))
    return(
     <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
     onMouseLeave={() => set({ xys: [0, 0, 1] })}
     style={{ transform: aniProps.xys.interpolate(trans) }}>   
    <Card className="card-style" >
        <FontAwesomeIcon icon={props.icon} size='5x'/>
        <CardBody>
            <CardTitle style={{'fontSize':'1.5rem'}}>{props.title}</CardTitle>
                <CardSubtitle>{props.subtitle}</CardSubtitle>
                <CardText>{props.text}</CardText>
                <a href={props.link} style={{'zIndex':'10'}}><Button style={{'backgroundColor':'purple'}}>Check It Out</Button></a>
            </CardBody>
        </Card>
        </animated.div>
)
}


export default Project;