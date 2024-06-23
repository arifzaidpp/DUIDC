// src/hooks/usePageView.js
import { useState, useEffect } from 'react';

const usePageView = (page) => {
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`/api/views/${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch page views');
        }
        const data = await response.json();
        setViews(data.views);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, [page]);

  return { views, loading, error };
};

export default usePageView;
