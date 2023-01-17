import React ,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getContacts } from '../../JS/Actions/contact';
import Spinner from 'react-bootstrap/Spinner';
import ContactCard from '../../Components/ContactCard';
import './ContactsList.css'
const ContactsList = () => {
  const dispatch=useDispatch();
  const Contacts=useSelector(state=>state.contactReducer.listContacts);
  const Load=useSelector(state=>state.contactReducer.load)
 console.log (Contacts)
 useEffect(()=>{
  dispatch(getContacts());
},[dispatch]);
  return (
    <div className='container'>
      {Load ? <Spinner animation="border" />: Contacts.map(el=><ContactCard contact={el} key={el._id}/>)}
    </div>
  )
}

export default ContactsList