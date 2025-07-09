import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function getBook() {
      try {
        const res = await axios.get(`http://localhost:8080/books/${id}`);

        if (res.error) {
          throw res.error;
        }

        setBook(res.data[0]);
      } catch (err) {
        console.log(err);
        toast.error("Please try reloading the page");
      }
    }

    getBook();
  }, []);
  async function patchBook(e) {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8080/books/${id}`, { book });
      toast.success("Book edited");
      navigate("/adminBook");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  }

  const formRef = useRef(null);

  return (
    <>
      {book ? (
        <div
          className="flex flex-col items-center text-xl px-5 my-2"
          style={{ margin: "auto" }}
        >
          <h1 className="text-secondary2-100 logo text-7xl">Edit Book</h1>
          <form
            className="flex flex-col bg-secondary-100 p-10 rounded-2xl items-center"
            ref={formRef}
            onSubmit={patchBook}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="bg-white text-black text-center peer"
              name="name"
              id="name"
              value={book.name}
              onChange={(e) => {
                setBook({ ...book, name: e.target.value });
              }}
              required
            />
            <p className="invisible peer-invalid:visible text-base ">
              Provide a name
            </p>

            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="bg-white text-black text-center peer"
              name="author"
              id="author"
              value={book.author}
              onChange={(e) => {
                setBook({ ...book, author: e.target.value });
              }}
              required
            />
            <p className="invisible peer-invalid:visible text-base ">
              Provide an author
            </p>

            <label htmlFor="info">Information</label>
            <input
              type="text"
              className="bg-white text-black text-center peer"
              name="info"
              id="info"
              value={book.info}
              onChange={(e) => {
                setBook({ ...book, info: e.target.value });
              }}
            />
            <p className="invisible peer-invalid:visible text-base ">
              Please info
            </p>

            <label htmlFor="genre">Genre</label>
            <select
              name="genre"
              id="genre"
              className="bg-white text-black"
              value={book.genre}
              onChange={(e) => {
                setBook({ ...book, genre: e.target.value });
              }}
            >
              <option value="Contemporary Fiction">Contemporary Fiction</option>
              <option value="Historical Fiction">Historical Fiction</option>
              <option value="Literary Fiction">Literary Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Biography">Biography</option>
              <option value="Memoir">Memoir</option>
              <option value="Self-Help">Self-Help</option>
              <option value="Health & Wellness">Health & Wellness</option>
            </select>
            <br />
            <button
              className="bg-secondary2-100 border-2 rounded-2xl text-black px-2 py-1.5 my-2"
              type="submit"
            >
              Edit Book
            </button>
            <a
              className="bg-secondary2-100 border-2 rounded-2xl text-black px-2 py-1.5 my-2"
              href="/adminBook"
            >
              Cancel
            </a>
          </form>
        </div>
      ) : (
        <div
          className="flex flex-col items-center text-xl px-5 my-2"
          style={{ margin: "auto" }}
        >
          <h1 className="text-secondary2-100 logo text-7xl my-2">Loading</h1>
        </div>
      )}
    </>
  );
}

export default EditBook;
