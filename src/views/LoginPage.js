import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login(state));
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

export default LoginPage;
