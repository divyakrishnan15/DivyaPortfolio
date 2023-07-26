import React from "react";
import "./contacts.css";

export default function Contacts() {
  const contacts_list = require("../../json/contacts_data");
  return (
    <div className="contacts">
      {Object.values(contacts_list.cl).map((contact, i) => {
        return (
          <a key={i} target="_blank" href={contact.href}>
            <img className={contact.className} src={contact.caption} />
          </a>
        );
      })}
    </div>
  );
}
