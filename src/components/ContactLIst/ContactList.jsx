// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useCallback, useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/authentificated/operations';
import { selectAuthentificated } from 'redux/authentificated/authSelectors';
// import { deleteContact, fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const authentificated = useSelector(selectAuthentificated);

  const dispatch = useDispatch();

  const getApiContacts = useCallback(
    () => dispatch(fetchContacts()),
    [dispatch]
  );

  useEffect(() => {
    if (!authentificated) return;
    getApiContacts();
  }, [getApiContacts, authentificated]);

  const onRemoveContact = contactId => dispatch(deleteContact(contactId));

  const getFilteredContacts = () => {
    return contacts?.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visible = getFilteredContacts();

  if (!visible.length) return null;

  return (
    <ul className={css.list}>
      {getFilteredContacts().map(({ id, name, number }) => {
        return (
          <li className={css.items} key={id}>
            <p>{name} </p>
            <p>: {number}</p>
            <button type="button" onClick={() => onRemoveContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
