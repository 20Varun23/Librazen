import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import backend_link from "../../environment.js";

function ReturnBook() {
  const [issuer, setIssuer] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getIssuer() {
      try {
        const { data } = await axios.get(`${backend_link}/admin/issuer/${id}`, {
          withCredentials: true,
        });
        console.log(data);

        setIssuer(data);
      } catch (err) {
        console.log(err);
        toast.error("Some error occured, please relod");
      }
    }

    getIssuer();
  }, []);

  async function returnBook(e) {
    e.preventDefault();

    try {
      await axios.post(
        `${backend_link}/admin/return/${id}/`,
        { email: issuer.email, booksRead: issuer.books_read },
        {
          withCredentials: true,
        }
      );
      toast.success("book has been returned");
      navigate("/adminBook");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong there");
    }
  }

  return (
    <>
      {issuer ? (
        <div
          className="flex flex-col items-center text-xl px-5 my-2"
          style={{ margin: "auto" }}
        >
          <h1 className="text-secondary2-100 logo text-7xl">
            Book Return Confirmation
          </h1>
          <br />
          <div className="flex flex-col bg-secondary-100 text-center p-2 rounded-2xl text-2xl">
            <table>
              <tbody>
                <tr>
                  <td className="p-2">Name of issuer:</td>
                  <td className="p-2">{issuer.name}</td>
                </tr>
                <tr>
                  <td className="p-2">Email of issuer:</td>
                  <td className="p-2">{issuer.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div className="flex flex-row">
            <button
              className="m-2 p-2 bg-green-500 hover:bg-green-700 rounded-xl"
              onClick={(e) => {
                returnBook(e);
              }}
            >
              Return book
            </button>
            <Link
              className="m-2 p-2 bg-red-500 hover:bg-red-700 rounded-xl"
              to="/adminBook"
            >
              Cancel
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center text-xl px-5 my-2"
          style={{ margin: "auto" }}
        >
          <h1 className="text-secondary2-100 logo text-7xl">Loading</h1>
        </div>
      )}
    </>
  );
}

export default ReturnBook;
