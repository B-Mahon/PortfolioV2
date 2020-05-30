import React,{ useState } from 'react';
import {animated,useSpring,useTrail,config} from 'react-spring';
import { Container, Row, Col} from 'reactstrap';
import Project from './Projects'
import cloud from './images/cloud.png';
import avatar from './images/avataaars.png';
import { Waypoint } from 'react-waypoint';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';


const items=[{
    title:'Weather App',
    subtitle:'Find weather around the world',
    icon:faCloudSunRain,
    text:'Uses OpenWeather API to provide real time weather data',
    link:'https://blaineweather.herokuapp.com/'
},{
    title:'CRUD Notes App',
    subtitle:'CRUD API with react front end',
    icon:faStickyNote,
    text:'I built a CRUD API that uses a mongoDB database to store notes',
    link:'https://salty-stream-72542.herokuapp.com/'
},{
    title:'Anonymous Posting Site',
    subtitle:'High level security and authentication',
    icon:faUserSecret,
    text:'features OAuth2 and mongoDB',
    link:'https://anonposting.herokuapp.com/'
},{
    title:'Simulating UDP protcols',
    subtitle:'University Project',
    icon:faNetworkWired,
    text:'Python project that emulated UDP protocols using sockets',
    link:'https://github.com/BlaineMcMahon/Network-Design'
},{
    title:'Selenium Web Automation',
    subtitle:'Internship Project',
    icon:faMousePointer,
    text:'Automated a manual work process using selenium and python',
    link:'https://github.com/BlaineMcMahon/Selenium-Web-Automation-Scripts'
    }]
    
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`


function Home(){
    const animatedItems = [0.5,0.3,0.7,1,1]
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const [on,toggle] = useState(false);
    const trail = useTrail(animatedItems.length,{
        config: config.wobbly,
        opacity: on ? 1:0, 
        transform: on? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'
    });

  return(
    <div> 
        <div className="home text-center">
            <Row>
                <Col xs="12"  onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} >
                    <animated.div style={{ transform: props.xy.interpolate(trans1) }}><img className="avatar" alt='avataar' src={avatar}/></animated.div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" center-block><h1>Im Blaine</h1></Col>
                <Col xs="12"  ><p>Programmer - Engineer - Designer </p></Col>
            </Row> 
            <img src={cloud} alt='cloud' className="left-cloud"/>
            <img src={cloud} alt='cloud' className="right-cloud"/>
        </div>
        
        <div className="portfolio">
            <Container>
                <h1>Gallery</h1>
                <Waypoint 
                bottomOffset="30%"
                onEnter={()=>{if (!on) toggle(true)}}/>
                <Row>
                {trail.map((animation,index)=>{return(
                    <Col xs="12" md="4">
                        <animated.div style={animation} >                        
                        <Project title={items[index].title} icon={items[index].icon} subtitle={items[index].subtitle} text={items[index].text} link={items[index].link} key={index}/>
                        </animated.div>
                    </Col>)}
                    )}
                </Row>   
            </Container>
        </div>
  </div>
  );
  
  }

  export default Home;