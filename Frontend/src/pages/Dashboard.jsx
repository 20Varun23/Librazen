import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get(`http://localhost:8080/users/dashboard`, {
          withCredentials: true,
        });

        if (res.error) {
          throw res.error;
        }

        console.log(res.data[0]);

        setUser(res.data[0]);
      } catch (err) {
        console.log(err);
        toast.error("reload the page again");
      }
    }

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
              </tbody>
            </table>
          </div>
          <br />
          <div className="flex flex-row">
            <a
              className="bg-blue-500 hover:bg-blue-800 p-2 rounded-2xl mx-2"
              href="/logout"
            >
              Logout
            </a>
            <a
              className="bg-red-500 hover:bg-red-700 p-2 rounded-2xl mx-2"
              href="/delP"
            >
              Delete Profile
            </a>
            <a
              className="bg-green-500 hover:bg-green-700 p-2 rounded-2xl mx-2"
              href="/updateP"
            >
              Edit Profile
            </a>
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
