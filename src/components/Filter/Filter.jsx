import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions.js";

const Filter = ({ filter, changeFilter }) => {
  return (
    <form action="">
      <label htmlFor="">
        <p> Find contacts by name</p>
        <input
          placeholder="Find contacts"
          onChange={(e) => changeFilter(e.currentTarget.value)}
          type="text"
          name="name"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </form>
  );
};

const mapStateToProps = ({ contacts: { filter } }) => ({ filter: filter });

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
