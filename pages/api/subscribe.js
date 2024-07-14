import { useState, useEffect } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);

  useEffect(() => {
    fetch('/api/subscribers')
      .then(res => res.json())
      .then(data => setSubscriberCount(data.count))
      .catch(error => console.error('Error fetching subscriber count:', error));
  }, []);

  const subscribe = async (e) => {
    e.preventDefault();
    setState('loading');

    try {
      const response = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });

      const { error } = await response.json();
      if (error) {
        setState('error');
        setErrorMessage(error);
        return;
      }

      setState('success');
      setEmail('');
      // Refresh subscriber count after successful subscription
      const countResponse = await fetch('/api/subscribers');
      const { count } = await countResponse.json();
      setSubscriberCount(count);
    } catch (e) {
      setState('error');
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={subscribe}>
      <input
        type="email"
        placeholder="you@awesome.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? 'Loading...' : 'Subscribe'}
      </button>
      {state === 'error' && <p>{errorMessage}</p>}
      {state === 'success' && <p>Awesome, you've been subscribed!</p>}
      {subscriberCount !== null && (
        <p>Join {subscriberCount} other subscribers!</p>
      )}
    </form>
  );
}