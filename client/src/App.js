
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NNavBar from './Components/NNavBar';
import AddContact from './Pages/AddContact/AddContact';
import EditContact from './Pages/Edit/EditContact';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import ContactsList from './Pages/ContactsList/ContactsList'
function App() {
  return (
    <div className="App">
      <NNavBar/>
     
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/*" element={<Error/>}/>
        <Route exact path="/edit/:id" element={<EditContact/>}/>
        <Route exact path="/add/" element={<AddContact/>}/>
        <Route exact path="/contactList/" element={<ContactsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
