// subscriptionModel.js
import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'subscriptions' }); // Corrected collection name to 'subscriptions'

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
