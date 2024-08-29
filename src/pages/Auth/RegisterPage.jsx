import React from 'react';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="bg-black rounded-t-lg h-20 flex items-center justify-center">
          <div className="bg-white w-10 h-10 rounded-full"></div>
        </div>
        <h2 className="text-2xl font-bold text-center mt-6 mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have any account? <span className="text-black cursor-pointer">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
