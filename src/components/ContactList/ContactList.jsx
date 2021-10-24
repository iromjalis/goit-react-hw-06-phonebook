import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-actions.js";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name} {number}
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
const mapStateToProps = ({
  contacts: { phonebookContacts, phonebookFilter },
}) => ({
  contacts: getVisibleContacts(phonebookContacts, phonebookFilter),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
