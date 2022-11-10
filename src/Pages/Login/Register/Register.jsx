import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contacts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState();
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="pt-24 pb-24">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-md bg-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-400">
          Register Account
        </h1>
        <form
          onSubmit={handleSubmit}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="name" className="block dark:text-gray-400">
              Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-md "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="block dark:text-gray-400">
              Enter Your Email
            </label>
            <input
              type="email"
              name="email"
              id="username"
              required
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              className="w-full px-4 py-3 rounded-md"
            />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <a rel="noopener noreferrer" href="/">
                Forgot Password?
              </a>
            </div>
          </div>
          <p className="text-secondary">{error}</p>
          <button className="block w-full p-3 text-center text-bold text-white rounded-lg bg-secondary ">
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Already have an account?
          </p>
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="underline dark:text-gray-100"
          >
            Login
          </Link>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
