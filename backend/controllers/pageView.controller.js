// controllers/pageView.controller.js
import PageView from '../models/pageView.model.js';

// Increment view count for a page
export const incrementPageView = async (req, res) => {
  try {
    const pageView = await PageView.findOneAndUpdate(
      { page: "home" },
      { $inc: { views: 1 } },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Page view incremented', pageView });
  } catch (error) {
    res.status(500).json({ message: 'Failed to increment page view', error: error.message });
  }
};

// Get view count for a page
export const getPageView = async (req, res) => {
  const page = "home"; // Hardcoded to fetch the "home" page view count

  try {
    const pageView = await PageView.findOne({ page });

    if (!pageView) {
      return res.status(404).json({ message: 'Page not found' });
    }

    res.status(200).json(pageView);
  } catch (error) {
    res.status500().json({ message: 'Failed to fetch page view', error: error.message });
  }
};
