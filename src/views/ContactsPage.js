import Container from "../components/Container";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import Spinner from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { contactsOperations, contactsSelectors } from "../redux/contacts";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);
  const isError = useSelector(contactsSelectors.getError);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>Oops, we have some loading error! :(</p>
      ) : (
        <ContactList />
      )}
    </Container>
  );
};

export default ContactsPage;
