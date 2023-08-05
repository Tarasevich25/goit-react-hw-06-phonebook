import { useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
import Container from './Container';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContatcs';
import PhonebookFilter from './PhonebookFilter';
import { getContacts } from 'redux/contactSlice';

function App() {
  const contacts  = useSelector(getContacts);
   
  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      {contacts.length > 1 && (
          <PhonebookFilter />
        )}
      {/* <PhonebookFilter /> */}
      <PhonebookContacts />
    </Container>
  );
}

export default App;
