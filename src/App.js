import { Component } from "react";
import shortid from "shortid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";

function App() {

  return (
    <>
      <Container className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}

export default App;

  // handleSubmit = (data) => {
  //   this.setState({ ...data });
  //   this.setState({ name: "", number: "" });
  // };
  // handleFilterChange = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  // handleDeleteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (contact) => contact.id !== contactId
  //     ),
  //   }));
  // };
  // handleAddContact = (data) => {
  //   const newContact = {
  //     id: shortid.generate(),
  //     ...data,
  //   };

  //   if (this.state.contacts.some(({ name }) => name === data.name)) {
  //     alert(`${data.name} already exists`);
  //     return;
  //   }
  //   this.setState(({ contacts }) => ({
  //     contacts: [newContact, ...contacts],
  //   }));
  //   this.setState({ name: "", number: "" });
  // };
