import React from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";

function DeleteBook() {
  const { id } = useParams();

  const navigate = useNavigate();

  async function deleteBook(e) {
    e.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:8080/books/${id}`);
      if (res.error) {
        throw res.error;
      }
      toast.success("book deleted successfully");
      navigate("/adminBook");
    } catch (err) {
      console.log(err);
      toast.error("something wrong happened here");
    }
  }

  return (
    <div className="flex flex-col items-center text-xl  my-2 h-[90vh] justify-center">
      <h1 className="text-secondary2-100 logo text-7xl my-1">Deleting book</h1>
      <div className="flex flex-col bg-secondary-100 p-5 rounded-2xl items-center">
        <p className="text-2xl">Are you sure you want to delete this book?</p>
        <div className="flex flex-row justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 p-2.5 rounded-xl m-4"
            onClick={(e) => {
              deleteBook(e);
            }}
          >
            Delete Book
          </button>
          <a
            className="bg-blue-500 hover:bg-blue-700 p-2.5 rounded-xl m-4"
            href="/adminBook"
          >
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
