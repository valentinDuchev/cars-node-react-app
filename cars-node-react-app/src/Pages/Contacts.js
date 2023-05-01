import '../Layout/css/App.css';
import ContactsImage from '../Layout/components/Contacts/ContactsImage';
import ContactsInfo from '../Layout/components/Contacts/ContactsInfo';
import Banner from '../Layout/components/Banner/Banner';
function Contacts() {
  return (
    <div>
      <ContactsImage/>
      <ContactsInfo/>
      <Banner/>
    </div>
  );
}

export default Contacts;