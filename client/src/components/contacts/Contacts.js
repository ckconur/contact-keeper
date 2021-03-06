import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { ContactItem } from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h4>Please add contacts</h4>;
  }
  return (
    <>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={250} classNames='item'>
                <ContactItem contact={contact}></ContactItem>
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={250} classNames='item'>
                <ContactItem contact={contact}></ContactItem>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  );
};
