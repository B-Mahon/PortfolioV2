import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';


function CForm(props){
  const [contact,setContact] = useState({
    fName:'',
    lName:'',
    email:'',
    city:'',
    message:'',
    emailError:''
  })

  const validate = ()=>{
    if(!contact.email){
        setContact({
            name:"",
            title:"",
            post:"",
            emailError:"Email cannot be empty"
        })
        return false
}
return true
}


  const addPost = async(newPost) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
      }
      const response = await fetch("/message",requestOptions)          
      console.log(response)
  }



  function handleChange(event){
    const { name, value} = event.target
    setContact((prevVal=>{
      return{
        ...prevVal,
        [name]:value
      }
    }))
  }

  function handleSubmit(event){
    event.preventDefault()
    const valid = validate()
    if(valid === true){
    addPost(contact)
    setContact({
      fName:'',
      lName:'',
      email:'',
      city:'',
      message:''
    })
  }
  }


    return(
      <Form className="contact-form">
        <Row form>
          <Col md={5}>
            <FormGroup>
              <Label >First Name</Label>
              <Input onChange={handleChange} value={contact.fName} type="text" name="fName" style={{'width':'75%'}} />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
            <Label>Last Name</Label>
            <Input onChange={handleChange} value={contact.lName} type="text" name="lName" style={{'width':'75%'}} />
          </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col xs={12} >
            <FormGroup>
              <Label >Email</Label>
              <Input onChange={handleChange} value={contact.email} type="email" name="email" style={{'width':'75%'}}/>
              <div style={{'color':'red','fontSize':'12'}}>{contact.emailError}</div>
            </FormGroup>
          </Col>
          <Col xs={12}>
            <FormGroup>
              <Label >City</Label>
              <Input onChange={handleChange} value={contact.city} type="text" name="city" style={{'width':'75%'}}/>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Text Area</Label>
              <Col xs={12}>
              <Input onChange={handleChange} value={contact.message} type="textarea" name="message" style={{'width':'75%'}}/>
              </Col>
            </FormGroup>
          </Col>
      </Row>
      <Button onClick={handleSubmit}>Send Message</Button>
    </Form>
    )

}

export default CForm;