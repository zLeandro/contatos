import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { Contact } from "../types";

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      const contact = state.contacts.find((c) => c.id === action.payload.id);
      if (contact) {
        contact.name = action.payload.name;
      }
    },
  },
});

export const { addContact, removeContact, editContact } = contactSlice.actions;

export const selectContacts = (state: RootState) => state.contacts;

export default contactSlice.reducer;
