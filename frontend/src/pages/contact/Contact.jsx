import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Contact.css";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
