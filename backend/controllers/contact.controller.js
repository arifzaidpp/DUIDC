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

export const deleteContacts = async (req, res) => {
  const { contactIds } = req.body;

  if (!contactIds || !Array.isArray(contactIds)) {
    return res.status(400).json({ error: 'Invalid request body. Expected an array of contactIds.' });
  }

  try {
    // Use $in operator to delete multiple contacts by their IDs
    const deletedContacts = await Contact.deleteMany({ _id: { $in: contactIds } });

    if (!deletedContacts || deletedContacts.deletedCount === 0) {
      return res.status(404).json({ error: 'Contacts not found' });
    }

    res.json({ message: 'Contacts deleted successfully' });
  } catch (error) {
    console.error('Error deleting contacts:', error);
    res.status(500).json({ error: 'Failed to delete contacts' });
  }
};
