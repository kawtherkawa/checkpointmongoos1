// importation 

import {FAIL_CONTACTS,LOAD_CONTACTS,GET_CONTACTS,GET_CONTACT} from "../ActionsTypes/contact"
//initialeState
const initialeState={
    listContacts:[],
    contactToGet:{},
    errors:null,
    load:false

}
//pure function

const contactReducer=(state=initialeState,{type,payload})=>{
    switch(type){
        case LOAD_CONTACTS:
        return{...state,load:true}
        case GET_CONTACTS:
            return{...state,load:false,listContacts:payload.listContacts}//listcontacts meme nom que celui en back
         case GET_CONTACT:
         return{...state,load:false, contactToGet:payload.contactToGet}//contactToGet meme nom que celui en back
         case FAIL_CONTACTS:
            return{...state,load:false,errors:payload }
            default :
            return state

    }
}
export default contactReducer

