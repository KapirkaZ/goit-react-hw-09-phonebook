import ContactListItem from "../ContactListItem";
import { useSelector, useDispatch } from "react-redux";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContact);

  const deleteItem = (contactId) => dispatch(deleteContact(contactId));

  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
}
