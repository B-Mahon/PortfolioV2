import React, { useState } from "react";
import { Form, FormGroup, Input } from 'reactstrap';
import PublishIcon from '@material-ui/icons/Publish';
import Fab from '@material-ui/core/Fab';

function Edit(props){
    var [newPost,setNewPost] = useState({name:"",titl:"",post:""})   
   
    function handleChange(e){
        const {name,value} = e.target
        setNewPost( prevPost =>{
            return{
                ...prevPost,
                [name]:value
            }
        })
    }

    function handleClick(e){
        console.log(newPost);
        
        props.sendToFront(newPost)
        setNewPost({
            name:"",
            titl:"",
            post:""
            }
        )
        e.preventDefault()
    }

    return (
    <Form>
        <FormGroup>
            <Input
                name="titl"          
                placeholder="Title"
                onChange={handleChange}
                value={newPost.titl}
                />
        </FormGroup>
        <FormGroup>
            <Input
                name="post"
                placeholder="What do you want to post..."
                rows="1"
                onChange={handleChange}
                value={newPost.post}
                />
        </FormGroup>
        <FormGroup>
            <Input 
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={newPost.name}
                />
        <Fab onClick={handleClick} color="secondary" aria-label="edit">
        <PublishIcon />
        </Fab>
        </FormGroup>
        
    </Form>
  );
}

export default Edit;