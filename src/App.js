import FirstComponent from "./components/body/FirstComponent";
import SecondComponent from "./components/body/SecondComponent";
import ContactFormComponent from "./components/contact-form";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Header />
      <FirstComponent />
      <SecondComponent />
      <ContactFormComponent />
      <Footer />
    </>
  );
};

export default App;
