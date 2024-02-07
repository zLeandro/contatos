import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/contactSlice";
import { Container, Input, AddButton } from "./styles";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name && email && phone) {
      dispatch(addContact({ id: 1, name, email, phone }));
      setName("");
      setEmail("");
      setPhone("");
    } else {
      alert("Por favor preencha todos os campos");
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <AddButton onClick={handleSubmit}>Adicionar Contato</AddButton>
    </Container>
  );
};

export default ContactForm;
