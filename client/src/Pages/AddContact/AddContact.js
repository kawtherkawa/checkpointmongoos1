import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { addContact } from '../../JS/Actions/contact';
const AddContact = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [newContact,setNewContact]=useState({})
  const handelChange=(e)=>{
    setNewContact({...newContact,[e.target.name]:e.target.value})
  }
  const handelAdd=()=>{
    dispatch (addContact(newContact))
    navigate("/contactList")
  }
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" onChange={handelChange} name='name' />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="  We'll never share your email with anyone else." onChange={handelChange} name='email'/>
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="number" placeholder="enter your phone number" onChange={handelChange} name='phone'/>
    </Form.Group>
 
    <Button variant="primary" type="submit" onClick={handelAdd}>
      Add
    </Button>
  </Form></div>
  )
}

export default AddContact