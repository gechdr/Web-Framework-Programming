/* eslint-disable react/prop-types */
import { useState } from "react";
export default function ContactItem({
  contact,
  deleteContact,
  toggleFavorite,
  editContact,
}) {
  return (
    <>
      <div>
        Name: {contact.name}
        <br />
        Phone: {contact.phone}
        <br />
        Action:
        <button onClick={() => toggleFavorite(contact.id)}>
          {contact.favorite ? "💖" : "🖤"}
        </button>
        <button onClick={() => editContact(contact.id)}>📝</button>
        <button onClick={() => deleteContact(contact.id)}>🗑️</button>
      </div>
      <hr />
    </>
  );
}
