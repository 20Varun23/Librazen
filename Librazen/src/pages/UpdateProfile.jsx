import React, { useState } from "react";

function UpdateProfile() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    age: null,
  });

  //[ ]: add useEffect hook
  //[ ]: add client side verification

  return (
    <div
      className="flex flex-col items-center text-xl px-5 my-2"
      style={{ margin: "auto" }}
    >
      <h1 className="text-secondary2-100 logo text-7xl">Edit Profile</h1>
      <br />
      <form className="flex flex-col bg-secondary-100 p-10 rounded-2xl items-center">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="bg-white text-black text-center peer"
          name="name"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          required
        />
        <p class="invisible peer-invalid:visible text-base">
          Please provide a name.
        </p>
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="bg-white text-black text-center"
          name="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
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
          className="bg-white text-black text-center peer"
          name="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          required
          minLength={8}
        />
        <p class="invisible peer-invalid:visible text-base">
          Password should be 8 characters.
        </p>
        <br />
        <label htmlFor="">Age</label>
        <input
          type="number"
          className="bg-white text-black text-center peer"
          name="password"
          value={user.age}
          onChange={(e) => {
            setUser({ ...user, age: e.target.value });
          }}
          required
          min={18}
        />
        <p class="invisible peer-invalid:visible text-base">
          minimum age is 18
        </p>
        <button
          className="bg-secondary2-100 border-2 rounded-2xl text-black px-2 py-1.5 my-2"
          onClick={(e) => {
            loginAdmin(e);
          }}
        >
          update profile
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
