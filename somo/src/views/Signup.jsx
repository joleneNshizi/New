import { signup } from '../axios';
import '../index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    
    signup({
      name: fullName,
      email,
      password,
    })
    .then(({ data }) => {
      // Handle successful signup
      setCurrentUser(data.user);
      setUserToken(data.token);
      console.log("Signup successful", data);
    })
    .catch((error) => {
      // Handle signup error
      console.error("Signup error", error);
    });
  };



  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup for Free</h2>
      <p className="text-center text-sm text-gray-600">
        Or{" "}
        <Link to="/login" className="signup-link">
          Login with your account
        </Link>
      </p>

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
            <LockClosedIcon style={{ width: '20px' }} />
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}