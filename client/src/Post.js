import React, { useState } from "react";
import Edit from "./Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Post(props){

    var [isOpen,setIsOpen] = useState(true)

    function toggleEdit(){
        setIsOpen(!isOpen)
    }


    function handleClick(e){
        console.log(props.title);
        
        //send delete request for specific post
        props.delete(props.title);
    }

    function sendToFront(update){    
        const original = props.title          
        console.log('ddjidjc'+original);
        
        props.edit(update,original)
        
    }
   
    return(
        <div className="notes">
        <h1 style={{'backgroundColor':'#2c3e50','color':'#f7f7f7'}}>{props.title}</h1>
        <p>{props.body}</p>
        <p>{props.name}</p>
        <DeleteIcon style={{'paddingRight':'2%'}} onClick={handleClick}/>
        <EditIcon onClick={toggleEdit} style={{'paddingLeft':'1%'}} />
        {isOpen?null:<Edit sendToFront={sendToFront}></Edit>}
        </div>
    )
}

export default Post;