import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { removeContact, editContact } from "../../store/contactSlice";
import { Contact } from "../../types";
import { Container, ContactItem, RemoveButton, EditButton } from "./styles";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeContact(id));
  };

  const handleEdit = (contact: Contact) => {
    const updatedName = prompt("Adicione o novo nome:", contact.name);
    if (updatedName) {
      dispatch(editContact({ id: contact.id, name: updatedName }));
    }
  };

  return (
    <Container>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          {contact.name} - {contact.email} - {contact.phone}
          <RemoveButton onClick={() => handleRemove(contact.id)}>
            Remover
          </RemoveButton>
          <EditButton onClick={() => handleEdit(contact)}>Editar</EditButton>
        </ContactItem>
      ))}
    </Container>
  );
};

export default ContactList;
