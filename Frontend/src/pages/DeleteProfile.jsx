import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import backend_link from "../../environment.js";

function DeleteProfile() {
  const navigate = useNavigate();

  async function deleteProfile(e) {
    e.preventDefault();

    try {
      await axios.delete(`${backend_link}/users`, {
        withCredentials: true,
      });

      await axios.post(
        `${backend_link}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success("User deleted successfully");
      console.log("Came till here");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while deleting the user");
    }
  }

  return (
    <div
      className="flex flex-col items-center text-xl px-5 my-2"
      style={{ margin: "auto" }}
    >
      <h1 className="text-secondary2-100 logo text-7xl m-1">Delete Profile</h1>
      <div className="flex flex-col bg-secondary-100 p-5 rounded-2xl items-center">
        <p>Are you sure you want this profile</p>
        <div className="flex flex-row">
          <button
            className="bg-red-500 hover:bg-red-700 p-2.5 rounded-xl m-4"
            onClick={(e) => {
              deleteProfile(e);
            }}
          >
            Delete Profile
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 p-2.5 rounded-xl m-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProfile;
