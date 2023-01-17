import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { deleteContact } from '../JS/Actions/contact'
import {useNavigate} from 'react-router-dom'
const ContactCard = ({contact}) => {
    const dispatch=useDispatch();
  const navigate=useNavigate()
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/2048px-Avatar_icon_green.svg.png" />
    <Card.Body>
      <Card.Title>{contact.name}</Card.Title>
      <Card.Text>
      {contact.email}
      </Card.Text>
      
      <Card.Text>
       {contact.phone}
      </Card.Text>
      <Button variant="success" onClick={()=>navigate(`/edit/${contact._id}`)} >Edit </Button>
      <Button variant="danger" onClick={()=>dispatch(deleteContact(contact._id))}>Delete </Button>
    </Card.Body>
  </Card></div>
  )
}

export default ContactCard