"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./SignIn.css";
import signUpandInImage from "../../public/OBJECTS[1].png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Type-safe handler (React.FormEvent<HTMLFormElement>)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    authClient.signIn.email({
      email: email,
      password: password,
      fetchOptions: {
        onSuccess: () => redirect("http://localhost:3000/"),
      },
    })
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <Link href="/" className="link text-blue-700">
          Home
        </Link>
        <h2 >Sign In</h2>
        <p className="slogan ">Fashion never been easier.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" >
              Email
            </label>
            <input

              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" >
              Password
            </label>
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

          <button type="submit">Login</button>
        </form>

        <p className="text-with-lines">OR</p>

        <div className="social-buttons">
          {/* ✅ Google Login */}
          <button
            className="google-btn"
            onClick={() => authClient.signIn.social({
              provider: "google",
              callbackURL: "http://localhost:3000/",
            })}
          >
            Google
          </button>

          {/* Facebook (disabled for now) */}
          <button className="facebook-btn" >
            Facebook
          </button>


        </div>


        <div className="alternate-login">
          <p >
            Don&apos;t have an account ?{" "}
            <Link href="/SignUp" className="link">
              Sign up
            </Link>
          </p>
        </div>
      </div>


      <div className="signin-image">
        <Image src={signUpandInImage} alt="SignInImage" />
      </div>
    </div>
  );
}
