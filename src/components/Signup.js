import { Link } from "react-router-dom";
import React, { useState } from "react";
import axiosInstance from "../axios";
import { useHistory } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // //for storing it in array
  // const [allEntry, setAllEntry] = useState([]);

  // const Register = (e) => {
  //     e.preventDefault();
  //     const newEntry = { name: name, email: email, password: password }
  //     setAllEntry([...allEntry, newEntry])

  // }

  const history = useHistory();
  const initialFormData = Object.freeze({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password1: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      //trimimg any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/accounts/register/', {
        username: formData.username,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        confirm: formData.password1,
      });      
        alert(res.data)  
        history.push('/Signin');
 
    } catch (err) {
      console.log(err.response)
      alert(err.response.data);
    }
  };

  return (
    <div className="signup_body">
      <div className="signup">
        <form className="signup_form" action="">
          <h1>
            <u>Create Account </u>
          </h1>
          <br />
          <br />
          {/* <div class="social-container">
                        <a href="#" class="social"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="social"><i class="fa fa-google"></i></a>
                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <span>or use your email for registration</span> */}

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />

          <br />
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password1"
            placeholder=" Confirm Password"
            onChange={handleChange}
          />

          <p>By clicking Sign Up, you agree to our Terms</p>
          <button className="signup__button" onClick={handleSubmit}>
            Create Your Account
          </button>
          <p>
            Already have an Account?{" "}
            <Link to="/Signin">
              <u>SignIn</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
