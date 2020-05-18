import React,{useEffect,useState} from 'react';
import './App.css';
import Header from "./Header";
import Create from "./Create"
import Post from "./Post";
import {Jumbotron,Container,Row,Col} from "reactstrap";
import {animated, useSpring} from 'react-spring';
import Fab from '@material-ui/core/Fab';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
 
function App() {
  var [posts,setPosts] = useState([]);
  var [isNotesOpen,setNotesOpen] = useState(false)

  const notesAnimation=useSpring({transform:isNotesOpen?
    `translate3d(0,0,0) scale(1)`:
    `translate3d(0,100%,0) scale(0.1)`
  })

  const fade = useSpring({
  from:{opacity:0},
  opacity:1
  })

  useEffect(()=>
  {
    async function fetchMyApi(){
    const response = await fetch("/user")
    const data = await response.json()
    setPosts(posts=data) }
    fetchMyApi()
  },[])
  
  const getPosts = async() =>{
    const response = await fetch("http://localhost:2000/user")
    const data = await response.json()
    setPosts(posts=data)   
    }
    
  const addPost = async(newPost) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
      }
      const response = await fetch("http://localhost:2000/user",requestOptions)          
      getPosts()
    
  }

  const deletePost = async(delPost) =>{
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
  }
      console.log(delPost);
      const response = await fetch("http://localhost:2000/user/"+delPost,requestOptions)
      console.log(response);
      getPosts()
      
  }

   const editPost = async(updatedPost,originalPost)=>{
    console.log(originalPost) 
    console.log(updatedPost)
    const requestOptions = {
     method: 'PATCH',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(updatedPost)

   }
     const response = await fetch("http://localhost:2000/user/"+originalPost,requestOptions)
     getPosts()
      
  } 

  return (
    <animated.div style={fade} className="back"> 
      <Container className="container">
        <Header></Header>
        <Row>
          <Col xs="12">
            <Create add={addPost}/>         
          </Col>
        </Row>          
      <animated.div style={notesAnimation} className="my-notes">
        <Jumbotron style={{'boxShadow': '0 0 10px 0 rgba(0, 0, 0, 0.3)'}} fluid>
          <Container fluid>
            <h1 className="note-head">Notes</h1>
          </Container>
        </Jumbotron>
          <Row>
            {posts.map((post,i)=> <Col sm="4" xs="12" key={i}><Post delete={deletePost} name={post.name} title={post.post.title} body={post.post.body} edit={editPost} /></Col>)}
          </Row>
      </animated.div>
        </Container>
        <Fab onClick={()=>setNotesOpen(!isNotesOpen)} style={{'position':'absolute','top':'10px','right':'10px','zIndex':'15'}}color="secondary" aria-label="edit">
        <LibraryBooksIcon />
        </Fab>
    </animated.div>     
  );
}

export default App;
