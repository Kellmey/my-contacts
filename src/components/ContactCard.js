import React from "react"; // imports react
import user from "../images/user.img.png"; // imports user

// returns an individual entry/card making use of props 
// arrow fuction returning the jsx of ContactCard component
const ContactCard = (props) => {
  const { id, name, email, contact_number} = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div><div>{contact_number}</div>
      </div>


    
      <i // Creating delete entry icon
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

// exports ContactCard 
export default ContactCard;