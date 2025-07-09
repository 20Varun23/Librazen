import React from "react";
import toast from "react-hot-toast";
import axios from "axios";

function AdminLogout() {
  async function logout(e) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/admin/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "/";
      toast.success("you are logged out");
    } catch (err) {
      console.log(err);
      toast.error("some error there");
    }
  }

  return (
    <div
      className="flex flex-col items-center text-xl px-5 my-2"
      style={{ margin: "auto" }}
    >
      <h1 className="text-secondary2-100 logo text-7xl my-2">Logout</h1>
      <div className="flex flex-col bg-secondary-100 p-5 rounded-2xl items-center">
        <p>Are you sure you want to logout ?</p>
        <div className="flex flex-row">
          <button
            className="bg-red-500 hover:bg-red-700 p-2.5 rounded-xl m-4"
            onClick={(e) => {
              logout(e);
            }}
          >
            Logout
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 p-2.5 rounded-xl m-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogout;
