import { useState } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegisterPage = ({ onRegister }) => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(state);
    setState(initialState);
  };
  return (
    <div>
      <h1>Please register</h1>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name:
          <input
            type="name"
            name="name"
            value={name}
            required
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
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
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
