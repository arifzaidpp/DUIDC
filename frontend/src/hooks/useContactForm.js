import { useState } from "react";
import toast from "react-hot-toast";

const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      setSuccess(true);
      toast.success('Message sent successfully');
    } catch (err) {
      setError(err.message);
      toast.error('Failed to submit the form');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, submitForm };
};

export default useContactForm;
