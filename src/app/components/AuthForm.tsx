// AuthForm.tsx
'use client';

import { useState } from 'react';

type AuthFormProps = {
  title: string;
  buttonText: string;
  onSubmit: (email: string, password: string) => Promise<void>;
  successMessage: string;
  errorMessage: string;
};

const AuthForm: React.FC<AuthFormProps> = ({ title, buttonText, onSubmit, successMessage, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessageState, setSuccessMessageState] = useState('');

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessageState('');

    try {
      await onSubmit(email, password);
      setSuccessMessageState(successMessage);
    } catch (err) {
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleClick}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {buttonText}
              </button>
            </div>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            {successMessageState && <p className="text-green-500 mt-4 text-center">{successMessageState}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

//perdorimi
// LoginForm.tsx
/*
'use client';

import AuthForm from './AuthForm';

const LoginForm = () => {
  const handleLogin = async (email: string, password: string) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // save token
      sessionStorage.setItem('token', data.token);
      window.location.href = '/dashboard'; // URL
    } else {
      throw new Error(data.message);
    }
  };

  return (
    <AuthForm
      title="Login to Your Account"
      buttonText="Sign in"
      onSubmit={handleLogin}
      successMessage="Login successful!"
      errorMessage="Login failed. Please check your credentials."
    />
  );
};

export default LoginForm;
*/
