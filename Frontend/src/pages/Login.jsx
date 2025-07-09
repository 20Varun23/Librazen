import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function loginUser(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/users/login", user, {
        withCredentials: true,
      });
      if (res.error) {
        toast.error(res.error);
        return;
      }
      toast.success("Admin logged in");
      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
  }

  const formRef = useRef(null);

  return (
    <div
      className="flex flex-col items-center text-xl px-5 my-2"
      style={{ margin: "auto" }}
    >
      <h1 className="text-secondary2-100 logo text-7xl">User login</h1>
      <br />
      <form
        className="flex flex-col bg-secondary-100 p-10 rounded-2xl items-center"
        ref={formRef}
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="bg-white text-black peer"
          name="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          required
        />
        <p className="invisible peer-invalid:visible text-base">
          Please provide a valid email address.
        </p>
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="bg-white text-black peer"
          name="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          required
          minLength={8}
        />
        <p className="invisible peer-invalid:visible text-base">
          Password should be atleast 8 characters
        </p>
        <button
          className="bg-secondary2-100 border-2 rounded-2xl text-black px-2 py-1.5 my-2"
          onClick={(e) => {
            loginUser(e);
          }}
        >
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
