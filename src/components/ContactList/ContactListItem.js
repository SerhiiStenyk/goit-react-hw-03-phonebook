import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={s.item}>
      {' '}
      {name}: {number}
      <button
        className={s.delete}
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;
