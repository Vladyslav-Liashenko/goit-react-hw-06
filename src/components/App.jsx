import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';

function App() {

  // FORM
  const addContact = newContact => {
    setAllContacts(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = contactId => {
    const updatedContacts = allContacts.filter(
      contact => contact.id !== contactId
    );
    setAllContacts(updatedContacts);
  };
  
//   CONTACT LIST
  const [allContacts, setAllContacts] = useState(() => {
  const savedContacts = window.localStorage.getItem('allContacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
});

   useEffect(() => {
    window.localStorage.setItem('allContacts', JSON.stringify(allContacts));
  }, [allContacts]);

  // FILTER
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
