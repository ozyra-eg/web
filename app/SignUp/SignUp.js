'use client';

import React, { useState } from "react";
import Image from "next/image";
import "./SignUp.css";
import signUpandInImage from "../../public/OBJECTS[1].png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { permanentRedirect } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Gender:", gender);
    // console.log("Number:", number);
    // console.log("Address:", address);
    // console.log("Governorate:", governorate);
    // console.log("Date of Birth:", dob);
    //
    setName("test")
    authClient.signUp.email({
      email: email,
      name: name,
      password: password,
      callbackURL: "http://localhost:3000/",//process.env.HOME_URL,
      fetchOptions: {

        onSuccess: () => permanentRedirect("http://localhost:3000/"),
      }
    })
  };

  return (
    <div className="signup-wrapper ">
      <div className="signup-container">
        <Link href="/" className="link text-blue-700">Home</Link>
        <h2 >Sign up</h2>
        <p className="slogan ">Fashion never been easier.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-scroll">
            {/* Email */}
            <div className="input-group">
              <label htmlFor="email" >Email</label>
              <input

                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label htmlFor="password" >Password</label>
              <input

                type="password"
                id="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <small className="mx-5">Must be at least 8 characters.</small>
            </div>

            {/* Gender */}
            <div className="input-group">
              <label htmlFor="gender" >Gender</label>
              <select

                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>


          </div>

          <button type="submit">Create account</button>
        </form>

        <p className="text-with-lines">OR</p>

        <div className="social-buttons">
          <button
            className="google-btn"
            onClick={() => {
              console.log("hello")
              authClient.signIn.social({
                provider: "google",
                callbackURL: "http://localhost:3000/",//process.env.HOME_URL,
                // errorCallbackURL: //process.env.HOME_URL
              })
            }
            }
          >
            Google
          </button>

          <button className="facebook-btn">Facebook</button>

        </div>

        <div className="alternate-login ">
          <p className="mx-5">
            Already have an account ? <Link href="/SignIn" className="link"> Log in</Link>
          </p>
        </div>
      </div>

      <div className="signup-image">
        <Image src={signUpandInImage} alt="SignUpImage" />
      </div>
    </div>
  );
}

