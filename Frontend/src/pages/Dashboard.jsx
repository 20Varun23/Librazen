import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import backend_link from "../../environment.js";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [overdue, setOverdue] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.post(
          `${backend_link}/users/dashboard`,
          {},
          {
            withCredentials: true,
          }
        );

        //console.log(res.data[0]);

        setUser(data);
      } catch (err) {
        console.log(err);
        toast.error("reload the page again");
      }
    }

    async function getOverdue() {
      try {
        const res = await axios.post(
          `${backend_link}/users/overdue`,
          {},
          {
            withCredentials: true,
          }
        );

        setOverdue(res.data);
      } catch (err) {
        console.log(err);
        toast.error("Sorry could not get overdue");
      }
    }

    getOverdue();

    getUser();
  }, []);

  return (
    <>
      {user ? (
        <div className="flex flex-col items-center " style={{ margin: "auto" }}>
          <h1 className="text-secondary2-100 logo text-7xl">
            Hello {user.name} !!
          </h1>
          <br />
          <br />
          <br />
          <div className="flex flex-col bg-secondary-100 text-center p-2 rounded-2xl text-2xl">
            <table>
              <tbody>
                <tr>
                  <td className="p-2">Email:</td>
                  <td className="p-2">{user.email}</td>
                </tr>
                <tr>
                  <td className="p-2">Age:</td>
                  <td className="p-2">{user.age}</td>
                </tr>
                <tr>
                  <td className="p-2">No. of books read:</td>
                  <td className="p-2">{user.books_read}</td>
                </tr>
                <>
                  {overdue ? (
                    <tr className="text-red-500">
                      <td className="p-2">Overdue left:</td>
                      <td className="p-2">Rs. {overdue}</td>
                    </tr>
                  ) : (
                    ""
                  )}
                </>
              </tbody>
            </table>
          </div>
          <br />
          <div className="flex flex-row">
            <Link
              className="bg-blue-500 hover:bg-blue-800 p-2 rounded-2xl mx-2"
              to="/logout"
            >
              Logout
            </Link>
            <Link
              className="bg-red-500 hover:bg-red-700 p-2 rounded-2xl mx-2"
              to="/delP"
            >
              Delete Profile
            </Link>
            <Link
              className="bg-green-500 hover:bg-green-700 p-2 rounded-2xl mx-2"
              to="/updateP"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-secondary2-100 logo text-7xl">Loading</h1>
        </div>
      )}
    </>
  );
}

export default Dashboard;
