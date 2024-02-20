import { Contact } from './Contact/Contact';
import styled from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {

  const contactState = useSelector((state) => state.contacts);
  return (
    <div>
      <ul className={styled.ul}>
        {contactState.map((contact) => (
          <li key={contact.id} className={styled.contact}>
            <div>
              <Contact name={contact.name} number={contact.number} contactId={contact.id}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
