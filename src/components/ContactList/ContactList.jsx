import { selectContacts, selectFilter } from '../../redux/selectors';
import { Contact } from './Contact/Contact';
import styled from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const getFilterContacts = (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const contactState = useSelector(selectContacts);
  const filterState = useSelector(selectFilter);

  const getVisibleContacts = getFilterContacts(contactState , filterState);
  
  return (
    <div>
      <ul className={styled.ul}>
        {Object.values(getVisibleContacts).map((contact, index) => (
          <li key={index} className={styled.contact}>
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
