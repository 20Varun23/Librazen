import React, { useRef, useState } from "react";
import BookCard from "../components/bookCard";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";

function IssueBook() {
  const [email, setEmail] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  async function issueBook(e) {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:8080/admin/issue/${id}`,
        { email },
        {
          withCredentials: true,
        }
      );
      toast.success(`book got issued, has to be given back in 14 days`);
      navigate(`/`);
    } catch (err) {
      console.log(err);
      toast.error("couldnt issue book");
    }
  }

  const formRef = useRef(null);
  return (
    <div
      className="flex flex-col items-center text-xl px-5 my-2"
      style={{ margin: "auto" }}
    >
      <h1 className="text-secondary2-100 logo text-7xl">
        Issue Book Confirmation
      </h1>
      <br />
      <br />
      <div
        className="flex flex-col bg-secondary-100 p-5 rounded-2xl items-center"
        style={{ margin: "auto" }}
      >
        <form
          className="flex flex-col bg-secondary-100 p-10 rounded-2xl items-center"
          ref={formRef}
        >
          <label htmlFor="email">Email of issuer</label>
          <input
            type="email"
            className="bg-white text-black peer"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <p className="invisible peer-invalid:visible text-base">
            Please provide a valid email address.
          </p>
        </form>

        <div className="flex flex-row">
          <button
            className="m-2 p-2 bg-green-500 hover:bg-green-700 rounded-xl"
            onClick={(e) => {
              issueBook(e);
            }}
          >
            Issue book
          </button>
          <button className="m-2 p-2 bg-red-500 hover:bg-red-700 rounded-xl">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default IssueBook;
