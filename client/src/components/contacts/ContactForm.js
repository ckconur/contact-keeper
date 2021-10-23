import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
function ContactForm() {
  const contactContext = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contact;

  const onchange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onchange}
      ></input>
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onchange}
      ></input>
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onchange}
      ></input>
      <h5>Contact Type</h5>
      <div>
        <div>
          <input
            type='radio'
            name='type'
            value='personal'
            checked={type === 'personal'}
            id='personal'
            onChange={onchange}
          ></input>{' '}
          <label for='personal'>Personal</label>
        </div>

        <div>
          <input
            type='radio'
            name='type'
            value='professional'
            checked={type === 'professional'}
            id='professional'
            onChange={onchange}
          ></input>{' '}
          <label for='professional'>Professional</label>
        </div>
      </div>

      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        ></input>
      </div>
    </form>
  );
}

export default ContactForm;
