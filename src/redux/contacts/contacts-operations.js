import axios from 'axios';
import actions from './contacts-actions';

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = actions;

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get(`/contacts?name=${name}`);
    if (data[0]?.name === name) {
      alert(`${name} is already in contacts`);
      dispatch(fetchContactSuccess());
      return;
    }
    dispatch(addContactRequest());
    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(err => dispatch(addContactError(err)));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

// eslint-disable-next-line
export default { addContact, deleteContact, fetchContacts };

// const addContact = (name, number) => dispatch => {
//   const contact = { name, number };
//   dispatch(addContactRequest());
//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(err => dispatch(addContactError(err)));
// };
