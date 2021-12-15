import React, { Component } from "react";
import { nanoid } from "nanoid";

import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    const isNewName = this.state.contacts
      .map(({ name }) => name)
      .includes(data.name);

    if (isNewName) {
      alert(`${data.name} is already in contacts `);
    } else {
      const contact = { id: nanoid(), ...data };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = (idContact) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== idContact),
      };
    });
  };

  changefilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    console.log(prevProps);
    console.log(prevState);
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const {
      formSubmitHandler,
      deleteContact,
      changefilter,
      getVisibleContacts,
    } = this;

    const visibleContacts = getVisibleContacts();

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} changefilter={changefilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
