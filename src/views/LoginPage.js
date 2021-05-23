import { useState } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = ({ onLogin }) => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(state);
    setState(initialState);
  };

  return (
    <div>
      <h1>Please login</h1>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
