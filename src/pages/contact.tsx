import ContactForm from "../components/form/contactForm";
import Header from "../components/ui/header/header";
import { contactData } from "../utils/utilsData";

const Contact = () => {
  return (
    <div>
      <Header data={contactData} hight={85} />
      <ContactForm />
    </div>
  );
};

export default Contact;
