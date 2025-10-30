import React, { useState } from 'react';

export default function Support() {
  const [feedback, setFeedback] = useState([]);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject && message) {
      setFeedback([...feedback, { subject, message, id: Date.now() }]);
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div className="p-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-4">Support Center</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Submit Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Recent Feedback</h2>
        {feedback.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No feedback submitted yet.</p>
        ) : (
          <div className="space-y-4">
            {feedback.map((item) => (
              <div key={item.id} className="border border-gray-200 dark:border-gray-700 p-4 rounded-md">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Subject: {item.subject}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}