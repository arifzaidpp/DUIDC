import { useState } from 'react';
import toast from 'react-hot-toast';

const useSubscription = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const subscribe = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      // If subscription succeeds, show success toast
      toast.success(data.message || 'Subscription successful');
    } catch (err) {
      // If subscription fails, show error toast
      console.error('Error subscribing:', err);
      toast.error(err.message || 'Subscription failed');
      setError(err.message || 'Subscription failed');
    } finally {
      setLoading(false);
    }
  };

  return { email, setEmail, loading, error, subscribe };
};

export default useSubscription;
