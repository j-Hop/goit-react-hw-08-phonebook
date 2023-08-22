// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/authentificated/operations';
import { selectContacts } from 'redux/contacts/selectors';
// import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handelInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const onAddContact = contactData => {
    const comparison = contacts.find(
      el => contactData.name.toLowerCase() === el.name.toLowerCase()
    );

    if (comparison) {
      alert(`${contactData.name} is already in contacts!`);
      return;
    }

    const contact = {
      ...contactData,
    };
    dispatch(addContact(contact));
  };

  const handelSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handelSubmit}>
      <span>Name</span>
      <label className={css.label}>
        <input
          placeholder="Please enter a name"
          onChange={handelInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <span>Phone</span>
      <label>
        <input
          placeholder="Please enter a number"
          onChange={handelInputChange}
          type="text"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
