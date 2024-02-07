import React from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

const App: React.FC = () => {
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
