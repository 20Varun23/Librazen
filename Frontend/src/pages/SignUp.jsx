import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import backend_link from "../../environment.js";
function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    age: 18,
  });

  async function postUser(e) {
    e.preventDefault();

    try {
      console.log(user);
      await axios.post(`${backend_link}/users`, { user });
      toast.success("user got added");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error("something went wrong there");
    }
  }

  const formRef = useRef(null);

  return (
    <div
      className="flex flex-col items-center text-xl px-5 my-2"
      style={{ margin: "auto" }}
    >
      <h1 className="text-secondary2-100 logo text-7xl">Sign Up</h1>
      <br />
      <form
        className="flex flex-col bg-secondary-100 p-10 rounded-2xl items-center"
        ref={formRef}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="bg-white text-black text-center peer/name"
          name="name"
          id="name"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          required
        />
        <p className="invisible peer-invalid/name:visible text-base">
          Enter the name
        </p>
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="bg-white text-black text-center peer/email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          required
        />
        <p className="invisible peer-invalid/email:visible text-base">
          Enter valid email
        </p>

        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="bg-white text-black text-center peer/password"
          id="password"
          name="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          required
          minLength={8}
        />
        <p className="invisible peer-invalid/password:visible text-base">
          Password should be atleast 8 characters
        </p>
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          className="bg-white text-black text-center peer/age"
          id="age"
          name="password"
          value={user.age}
          onChange={(e) => {
            setUser({ ...user, age: e.target.value });
          }}
          required
          min={18}
        />
        <p className="invisible peer-invalid/age:visible text-base">
          Minimum age is 18
        </p>
        <button
          className="bg-secondary2-100 border-2 rounded-2xl text-black px-2 py-1.5 my-2"
          onClick={(e) => {
            postUser(e);
          }}
        >
          sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
