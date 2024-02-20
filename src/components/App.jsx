import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';

function App() {

  // FILTER
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList/>
    </>
  );
}

export default App;
