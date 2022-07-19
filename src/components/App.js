import React, { useState, useEffect } from "react"; // imports react library
import { uuid } from "uuidv4"; // imports uuid from uuid version 4
import "./App.css"; // imports App.css
import Header from "./Header"; // imports Header
import AddContact from "./AddContact"; // imports AddContact
import ContactList from "./ContactList"; //imports ContactList

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // Defining addContactHandler
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]); /* Creating an object for uuid */
  };

  // Deleting a single contact 
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  /* Getting item from local storage and storing it in a  variable before displaying it */
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

//  Making use of useEffect hook to render component again
// Making use of the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

// exporting App
export default App;
