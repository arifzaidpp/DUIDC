import Contact from "../models/contact.model.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

export const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const contact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await contact.save();

    res.status(201).json({ message: 'Message received' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save the message' });
  }
};


export const deleteContactById = async (req, res) => {
    const contactId = req.params.id;
  
    if (!contactId) {
      return res.status(400).json({ error: 'Contact ID is required' });
    }
  
    try {
      const deletedContact = await Contact.findByIdAndDelete(contactId);
  
      if (!deletedContact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
  
      res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('Error deleting contact:', error);
      res.status(500).json({ error: 'Failed to delete contact' });
    }
  };