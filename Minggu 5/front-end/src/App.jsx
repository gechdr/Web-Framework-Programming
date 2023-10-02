import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import axios from "axios";

const host = "http://localhost:3000/api";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "onhmq", name: "DUMMY", phone: "08100000000", favorite: true },
    { id: "37occ", name: "DUMMY", phone: "08111111111", favorite: false },
    { id: "thi5i", name: "DUMMY", phone: "08122222222", favorite: true },
  ]);
  const [activeContact, setActiveContact] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(`${host}/contacts`).then(function (response) {
      console.log(response.data);
      setContacts(response.data.contacts);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(`${host}/contacts?q=${filter}`).then(function (response) {
  //     console.log(response.data);
  //     setContacts(response.data.contacts);
  //   });
  // }, [filter]);

  useEffect(() => {
    let ignore = false;
    axios.get(`${host}/contacts?q=${filter}`).then(function (response) {
      if (!ignore) {
        setContacts(response.data.contacts);
      }
    });
    return () => {
      ignore = true;
    };
  }, [filter]);

  const formMethods = {
    submit: function (data) {
      // console.log(data);
      axios.post(`${host}/contacts`, data).then(function (response) {
        console.log(response.data);
        setContacts([...contacts, response.data]);
      });
    },
    reset: function () {
      setActiveContact({ id: "", name: "", phone: "", favorite: false });
    },
  };

  const contactMethods = {
    edit: function (id) {
      const c = contacts.find((x) => x.id == id);
      console.log(c);
      if (c) {
        setActiveContact(c);
      }
    },
    // delete: function (id) {
    //   axios.delete(`${host}/contacts/${id}`).then(function () {
    //     setContacts(contacts.filter((c) => c.id !== id));
    //   });
    // },

    // Optimistic rendering
    delete: function (id) {
      setContacts(contacts.filter((c) => c.id !== id));
      axios.delete(`${host}/contacts/${id}`).catch(function (err) {
        console.log(err);
        alert("error, check console");
        // ini mengembalikan ke posisi awal
        setContacts(contacts);
        // ingat: setContact sebelum axios.delete tidak mengubah
        // isi state contacts yang akan dipakai di callback ini
      });
    },
  };

  function filterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <div>
        <input
          type="search"
          name="q"
          onChange={filterChange}
          placeholder="search"
          value={filter}
        ></input>
      </div>
      <br />
      <div>
        {contacts.length > 0 ? (
          contacts.map((c) => (
            <ContactItem
              contactMethods={contactMethods}
              key={c.id}
              contact={c}
            />
          ))
        ) : (
          <>
            <h3>Tidak ada kontak</h3>
            <hr />
          </>
        )}
      </div>
      <div>
        <ContactForm activeContact={activeContact} formMethods={formMethods} />
      </div>
    </div>
  );
}
