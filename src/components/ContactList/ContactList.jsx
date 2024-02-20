import { Contact } from './Contact/Contact';
import styled from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const getFilterContacts = (contacts, { filter }) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const contactState = useSelector(state => state.contacts);
  const filterState = useSelector(state => state.filter);

  const getVisibleContacts = getFilterContacts(contactState, filterState);

  console.log(getVisibleContacts);
  return (
    <div>
      <ul className={styled.ul}>
        {getVisibleContacts.map(contact => (
          <li key={contact.id} className={styled.contact}>
            <div>
              <Contact
                name={contact.name}
                number={contact.number}
                contactId={contact.id}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
