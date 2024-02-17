import { Contact } from './Contact/Contact';
import styled from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={styled.ul}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styled.contact}>
            <div>
              <Contact name={contact.name} number={contact.number} onDelete={onDelete} contactId={contact.id}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
