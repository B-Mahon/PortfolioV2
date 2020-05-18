import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import {  Form, FormGroup, Input } from 'reactstrap';

function Create(props){
    var [newPost,setNewPost] = useState({name:"",title:"",post:"",titleError:""})   
    var [isExpanded,setExpanded] = useState(false)

    function handleChange(e){
        const {name,value} = e.target
        setNewPost( prevPost =>{
            return{
                ...prevPost,
                [name]:value
            }
        })
    }

    const validate = ()=>{
        if(!newPost.title){
            setNewPost({
                name:"",
                title:"",
                post:"",
                titleError:"Title cannot be empty"
            })
            return false
    }
    return true
}
    
    function handleClick(e){
        e.preventDefault()
        const valid = validate()
        console.log(valid)
        if(valid === true){
        props.add(newPost)
        setNewPost({
            name:"",
            title:"",
            post:"",
            titleError:""
            }
        )}
    }

    return (
    <div >
    <Form style={{'width':'80%'}} >
    {isExpanded?
        <FormGroup>
            <Input 
                required
                name="title"          
                placeholder="Title"
                onChange={handleChange}
                value={newPost.title}
            />
        
                   <Input 
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={newPost.name}
            />
            
        <div style={{'color':'red','fontSize':'12'}}>{newPost.titleError}</div>
        </FormGroup>
        :null}
        <FormGroup>
            <Input 
                onClick={()=>setExpanded(true)}
                type="textarea"
                name="post"
                placeholder="What do you want to post..."
                rows="1"
                onChange={handleChange}
                value={newPost.post}
            />
        </FormGroup>
        
        <button onClick={handleClick} ><AddIcon/></button>       
      </Form>
      </div>
  );
}

export default Create;