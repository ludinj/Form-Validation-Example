import FormInput from "./components/FormInput";
import "./app.scss";
import { useState } from "react";

const App = () => {
  const [userValues, setUserValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "username sould be 3-16 characters and shouln't include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It sould be a valid Email",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be At least 8 characters, and include at least 1 uppercase letter, 1 lowercase letter and 1 number",
      label: "Password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: userValues.password,
      required: true,
    },
  ];
  const onChange = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };
  console.log(userValues);
  const handleSumit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app">
      <form onSubmit={handleSumit}>
        <h1>Register</h1>
        <div className="inputContainer">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={userValues[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <button>Sumit</button>
      </form>
    </div>
  );
};

export default App;
