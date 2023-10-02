/* eslint-disable react/prop-types */
export default function ContactItem({ contact, contactMethods }) {
  return (
    <>
      <div>
        Name:{contact.name}
        <br />
        Phone:{contact.phone}
        <br />
        Action:
        <button>{contact.favorite ? "💖" : "🖤"}</button>
        <button onClick={() => contactMethods.edit(contact.id)}>📝</button>
        <button onClick={() => contactMethods.delete(contact.id)}>🗑️</button>
      </div>
      <hr />
    </>
  );
}
