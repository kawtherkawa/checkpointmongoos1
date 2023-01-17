import axios from "axios";
import {FAIL_CONTACTS,LOAD_CONTACTS,GET_CONTACTS,GET_CONTACT} from "../ActionsTypes/contact";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get("/api/contact/all-user");
    dispatch({ type: GET_CONTACTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};

export const addContact = (newContact) => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    await axios.post("/api/contact/add", newContact);
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};
export const deleteContact=(id)=>async(dispatch)=>{
  dispatch({ type: LOAD_CONTACTS });
  try{
   await axios.delete(`/api/contact/${id}`)
   dispatch(getContacts())
  }catch(error){
    dispatch({ type: FAIL_CONTACTS, payload: error.response }); 
  }
}
 export const editContact=(id,newContact)=>async(dispatch)=>{
  dispatch({ type: LOAD_CONTACTS });
  try{
    await axios.put(`/api/contact/${id}`,newContact)
    dispatch(getContacts())
  }catch(error){
    dispatch({ type: FAIL_CONTACTS, payload: error.response }); 
  }
  
 }
 export const getContact=(id)=>async(dispatch)=>{
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get(`/api/contact/get_one/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data });
    dispatch(getContacts())
  }catch(error){
    dispatch({ type: FAIL_CONTACTS, payload: error.response }); 
  }
  
 }