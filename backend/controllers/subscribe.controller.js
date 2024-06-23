import Subscription from "../models/subscribe.model.js";


// Controller function to add a new subscription
export const addSubscription = async (req, res) => {
  const { email } = req.body;

  try {
    const existingSubscription = await Subscription.findOne({ email });

    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    res.status(201).json({ message: 'Subscription added successfully', subscription: newSubscription });
  } catch (error) {
    console.error("Error adding subscription:", error);
    res.status(500).json({ message: 'Failed to add subscription', error: error.message });
  }
};

// Controller function to fetch all subscriptions
export const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ message: 'Failed to fetch subscriptions', error: error.message });
  }
};
