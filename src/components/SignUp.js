import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css";
import '../index.css'
import styled from "styled-components";
import { Link } from "react-router-dom";


function Signup() {
  

  const initialValues = { fullname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, );
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "fullname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container1">
      <MainContainer>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Registred  successfully</div>
      ) : (
        <pre>
          {/* {JSON.stringify(formValues, undefined, 2)} */}
          </pre>
      )}
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2> <br />
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Full Name :</label> <br /><br />
            <input
              type="text"
              name="fullname"
              placeholder="fullname"
              value={formValues.fullname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.fullname}</p><br />
          <div className="field">
            <label>Age :</label><br /><br />
            <input
              type="number"
              name="number"
              placeholder="Age"
              value={formValues.age}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.age}</p><br />
          
          <div className="field">
            <label>Email :</label><br /><br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p><br />
          <div className="field">
            <label>Password :</label><br /><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p><br />
          <button className="fluid ui button blue">Submit </button>
          <HorizontalRule />
          <SignUp><Link to='/login'>login</Link></SignUp>
        </div>
      </form>
    </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 40vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 100vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 110vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 110vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 110vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 110vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 120vh;
  }
`;

const SignUp = styled.h4`
  cursor: pointer;
  text-align:center;

`;
const HorizontalRule = styled.hr`
  width: 100%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;
export default Signup;