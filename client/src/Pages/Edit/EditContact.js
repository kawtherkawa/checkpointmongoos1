import React from 'react'
import { useState ,useEffect} from 'react';
import  { Button, Form } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate,useMatch} from 'react-router-dom'
import { getContact } from '../../JS/Actions/contact';
import { editContact } from '../../JS/Actions/contact';
const EditContact = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [newContact,setNewContact]=useState({})
  const match=useMatch('/edit/:id')
  const selectedContact=useSelector(state=>state.contactReducer.contactToGet);
  const handelChange=(e)=>{
    setNewContact({...newContact,[e.target.name]:e.target.value})
  }
 
  useEffect(()=>{
    dispatch(getContact(match.params.id))
  })
  const handelEdit=()=>{
    dispatch(editContact(match.params.id, newContact))
    navigate(-1)
  }
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder={`${selectedContact.name}`} onChange={handelChange} name='name' />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder={`${selectedContact.email}`} onChange={handelChange} name='email'/>
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="number" placeholder={`${selectedContact.phone}`} onChange={handelChange} name='phone'/>
    </Form.Group>
 
    <Button variant="primary" type="submit" onClick={handelEdit} >
     Edit
    </Button>
  </Form>
    </div>
  )
}

export default EditContact