import React, {useState, Fragment} from "react";
import { nanoid } from 'nanoid';
import "./App.css"; 
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from './components/EditableRow';


const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: '',
    name: '',
    email: '',
    gender: '',
    dob: '',
    country: '',
    city: '',
  });

  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    email: '',
    gender: '',
    dob: '',
    country: '',
    city: '',

  })

  const [editContactId, setEditContactId] = useState(2);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAtrribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAtrribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);

  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      gender: addFormData.gender,
      dob: addFormData.dob,
      country: addFormData.country,
      city: addFormData.city


    };

    const newContacts = [...contacts, newContact]
    setContacts(newContacts);

  };

  const handleEditClick = (event, contact)=> {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      gender: contact.gender,
      dob: contact.dob,
      country: contact.country,
      city: contact.city,
    }
    setAddFormData(formValues);
  };
  return <div className="app-container">
    <form></form>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Country</th>
          <th>City</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact)=> (
          <Fragment>
            { editContactId === contact.id ? ( <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} /> ) : ( <ReadOnlyRow contact={contact} handleEditClick={handleEditClick}/>)}
          
          
         
         
          </Fragment>
          
           
          
        ))}
        
      </tbody>
    </table>
    <h2>Add Row</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input 
      type="text" 
      name="id" 
      required="required" 
      placeholder="Enter id..."
      onChange={handleAddFormChange}/>
      <input 
      type="text" 
      name="name" 
      required="required" 
      placeholder="Enter a name..."
      onChange={handleAddFormChange}/>
      <input 
      type="text" 
      name="email" 
      required="required" 
      placeholder="Enter an email..."
      onChange={handleAddFormChange}/>
      <input 
      type="text" 
      name="gender" 
      required="required" 
      placeholder="Enter your gender"
      onChange={handleAddFormChange}/>
      <input 
      type="text" 
      name="dob" 
      required="required" 
      placeholder="Enter dob"
      onChange={handleAddFormChange}/>
      <input 
      type="text" 
      name="country" 
      required="required" 
      placeholder="country name"
      onChange={handleAddFormChange}/>
      <input 
      type="text" 
      name="city" 
      required="required" 
      placeholder="city name"
      onChange={handleAddFormChange}/>
      <button type="submit">Add Rows</button>
    </form>
  </div>;
  };

export default App;