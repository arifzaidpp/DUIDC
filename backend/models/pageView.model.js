// models/pageView.model.js
import mongoose from 'mongoose';

const pageViewSchema = new mongoose.Schema({
  page: { type: String, required: true, unique: true },
  views: { type: Number, default: 0 },
});

const PageView = mongoose.model('PageView', pageViewSchema);

export default PageView;
