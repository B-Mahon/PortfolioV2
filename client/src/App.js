import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer'
import { BrowserRouter as Router, Switch, useLocation,Link } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';

function App() {
    
  return (
    <div>
      <Router>
        <Nav />
          <Main/>
          <Footer/>
      </Router>
    </div>
   );
}


function Main(){
  let location = useLocation()
  const transitions = useTransition(location,location=>location.key,{
    config:config.wobbly,
    from:{opacity:0,transform:'translate3d(0,100%,0)'},
    enter:{opacity:1,transform:'translate3d(0,0,0)'},
    leave:{opacity:0,transform:'translate3d(100%,0,0)'}
  })
  console.log(location)
  return(transitions.map(( { item,props:transition,key } )=>(
    <animated.div key={key} style={transition} >
      <Switch>
        <Link path="/" exact component={Home}></Link>
        <Link path="/about" component={About}></Link>
        <Link path="/contact" component={Contact}></Link>
      </Switch>
    </animated.div>
  )))
}


export default App;
