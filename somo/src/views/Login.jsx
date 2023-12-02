import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from '../axios';
import '../index.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    
    login({
      email,
      password,
    })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          setError({ __html: finalErrors.join("<br>") });
        }
        console.error(error);
      });
  };

  return (
    <div className="user-details">
    <div className="login-container">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Login to your account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{" "}
        <Link
          to="/signup"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          signup for free
        </Link>
      </p>


      <form onSubmit={onSubmit} className="form-container" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="input-field">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Email address"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="checkbox-container">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="remember-me" className="text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="submit-button"
          >
            <span className="flex items-center">
              <LockClosedIcon style={{width:'20px'}}
              />
              Login
            </span>
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}