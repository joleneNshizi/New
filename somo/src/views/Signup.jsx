import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import axiosClient from '../axios.jsx';
import { useStateContext } from "../contexts/ContextProvider.jsx";
import '../index.css'

export default function Signup() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({ __html: "" });

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .post("/signup", {
        name: fullName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], []);
          console.log(finalErrors);
          setError({ __html: finalErrors.join('<br>') });
        }
        console.error(error);
      });
  };

// ... (rest of the component remains unchanged)

return (
  <div className="signup-container">
    <h2 className="signup-title">Signup for Free</h2>
    <p className="text-center text-sm text-gray-600">
      Or{" "}
      <Link to="/login" className="signup-link">
        Login with your account
      </Link>
    </p>

    {error.__html && (
      <div className="error-message" dangerouslySetInnerHTML={error}></div>
    )}

    <form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="form-group">
        <label htmlFor="full-name" className="sr-only">
          Full Name
        </label>
        <input
          id="full-name"
          name="name"
          type="text"
          required
          value={fullName}
          onChange={(ev) => setFullName(ev.target.value)}
          className="form-input"
          placeholder="Full Name"
        />



          </div>
          <div>
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
              className="input-field"
              placeholder="Email address"
            />
          </div>
          <div>
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
              className="input-field"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="password-confirmation" className="sr-only">
              Password Confirmation
            </label>
            <input
              id="password-confirmation"
              name="password_confirmation"
              type="password"
              required
              value={passwordConfirmation}
              onChange={(ev) => setPasswordConfirmation(ev.target.value)}
              className="input-field"
              placeholder="Password Confirmation"
            />
          </div>
          <div className="form-group">
        <button type="submit" className="submit-button">
          <LockClosedIcon style={{width:'20px'}}
          />
          Signup
        </button>
      </div>
    </form>
  </div>
);
}
