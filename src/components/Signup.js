import { Link } from "react-router-dom";
import React, { useState } from "react";
import axiosInstance from "../axios";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import { Button, Spinner } from "react-bootstrap";

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

  const [process, setProcess] = useState(false);

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
    setProcess(true)
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/accounts/register/", {
        username: formData.username,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        confirm: formData.password1,
      });
      alert(res.data);
      history.push("/Signin");
    } catch (err) {
      setProcess(false)
      if(err.response.data['email']&&err.response.data['username']){
        alert('User with following credentials already exists \n username : '+formData.username+'\n email        : '+formData.email)
    } 
      else if (err.response.data['email']){
        alert('User with following credentials already exists \n email : '+formData.email)
      } 
      else if (err.response.data['username']){
        alert('User with following credentials already exists \n username : '+formData.username)
      } 
      else if (err.response.data['password']){
        alert(err.response.data['password'])
      }
          
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
            required
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
            required
          />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="password"
            name="password1"
            placeholder=" Confirm Password"
            onChange={handleChange}
            required
          />

          <p>By clicking Sign Up, you agree to our Terms</p>
          <Button onClick={handleSubmit}>
            
            Sign Up
            {process && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
          </Button>
          <p className="mt-3">
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
