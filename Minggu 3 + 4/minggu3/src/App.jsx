// // import Contact from "./Contact"
// import RUForm from "./RUForm";
// // import EventDemo from "./EventDemo"

// function App() {
//   return (
//     // <EventDemo></EventDemo>
//     // <Contact></Contact>
//     <RUForm></RUForm>
//   );
// }

// export default App;

import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
export default function App() {
  const [contacts, setContact] = useState([
    { id: "asdfg", name: "Kiky", phone: "081000000000", favorite: true },
    { id: "gfdsd", name: "Laura", phone: "081111111111", favorite: false },
    { id: "qrwer", name: "Maria", phone: "081222222222", favorite: true },
  ]);

  // const contactsLi = [];
  // for (let i = 0; i < contacts.length; i++) {
  //   contactsLi.push(<ContactItem contact={contacts[i]} key={contacts[i].id} />);
  // }

  function deleteContact(id) {
    // const temp = [];
    // for (let i = 0; i < contacts.length; i++) {
    //   if (contacts[i].id != id) {
    //     temp.push(contacts[i]);
    //   }
    // }
    // setContact(temp);

    clearSelection();
    setContact(contacts.filter((contact) => contact.id != id));
  }

  // ------------------------------------------

  function toggleFavorite(id) {
    setContact(
      contacts.map((contact) =>
        contact.id == id ? { ...contact, favorite: !contact.favorite } : contact
      )
    );
  }

  // ------------------------------------------

  const [activeContact, setActiveContact] = useState("");

  function editContact(id) {
    setActiveContact(id);
  }

  function formSubmit(data) {
    if (data.id) {
      setContact(
        contacts.map((contact) => (contact.id == data.id ? data : contact))
      );
    } else {
      setContact([
        ...contacts,
        { ...data, id: Math.random().toString(36).substring(2, 7) },
      ]);
    }
  }

  // ------------------------------------------

  function clearSelection() {
    setActiveContact("");
  }

  return (
    <div>
      <div>
        {/* <ContactItem contact={contacts[0]} />
        <ContactItem contact={contacts[1]} />
        <ContactItem contact={contacts[2]} /> */}
        {/* {contactsLi} */}
        {contacts.length <= 0 ? (
          <h3>Tidak Ada Kontak!</h3>
        ) : (
          contacts.map((contact) => (
            <ContactItem
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
              toggleFavorite={toggleFavorite}
              editContact={editContact}
            ></ContactItem>
          ))
        )}
      </div>
      <div>
        <ContactForm
          activeContact={
            activeContact === ""
              ? { id: "", name: "", phone: "", favorite: false }
              : contacts.find((contact) => contact.id == activeContact)
          }
          formSubmit={formSubmit}
          clearSelection={clearSelection}
        ></ContactForm>
      </div>
    </div>
  );
}
