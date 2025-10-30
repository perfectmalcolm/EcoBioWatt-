import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // In a real app, you'd send this data to a backend API for registration
    console.log('Registering user:', { username, email, password });

    // Mock API call for registration
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate successful registration
    setMessage('Registration successful! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="px-8 py-6 mt-4 text-left bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Sign Up for EcoBioWatt</h3>
        <form onSubmit={handleSignup}>
          <div className="mt-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Sign Up
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Already have an account? <Link to="/login" className="text-emerald-600 hover:underline">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
