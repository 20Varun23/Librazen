import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Admin() {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  async function loginAdmin(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/admin/login", admin, {
        withCredentials: true,
      });
      toast.success("Admin logged in");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      toast.error("some error occured here");
    }
  }

  const formRef = useRef(null);
  return (
    <div
      className="flex flex-col items-center text-xl px-5 my-2"
      style={{ margin: "auto" }}
    >
      <h1 className="text-secondary2-100 logo text-7xl">Admin login</h1>
      <br />
      <form
        className="flex flex-col bg-secondary-100 p-10 rounded-2xl items-center"
        ref={formRef}
      >
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="bg-white text-black peer invalid:border-pink-500 valid:border-green-400"
          name="email"
          value={admin.email}
          onChange={(e) => {
            setAdmin({ ...admin, email: e.target.value });
          }}
          required
        />
        <p class="invisible peer-invalid:visible text-base">
          Please provide a valid email address.
        </p>
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="bg-white text-black peer"
          name="password"
          value={admin.password}
          onChange={(e) => {
            setAdmin({ ...admin, password: e.target.value });
          }}
          required
          minLength={8}
        />
        <p class="invisible peer-invalid:visible text-base">
          Password should be atleast 8 characters
        </p>
        <button
          className="bg-secondary2-100 border-2 rounded-2xl text-black px-2 py-1.5 my-2"
          onClick={(e) => {
            loginAdmin(e);
          }}
        >
          login
        </button>
      </form>
    </div>
  );
}

export default Admin;
