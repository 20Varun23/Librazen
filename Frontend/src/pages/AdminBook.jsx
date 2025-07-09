import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import BookCard from "../components/bookCard";
import toast from "react-hot-toast";

function AdminBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getLeaderBoard() {
      try {
        const res = await axios.get(`http://localhost:8080/books`);
        if (res.error) {
          throw res.error;
        }

        console.log(res.data);

        setBooks(res.data);
      } catch (err) {
        console.log(err);
        toast.error("Please reload the page once");
      }
    }

    getLeaderBoard();
  }, []);

  return (
    <>
      {books.length ? (
        <div className="flex flex-col items-center text-xl px-5 my-2 text-center">
          <h1 className="text-secondary2-100 logo text-7xl ">Booklist</h1>
          <br />
          <div className="flex flex-row justify-center flex-wrap">
            {books.map((book) => (
              <BookCard key={book.id} book={book} editPage={true} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-xl px-5 my-2">
          <h1 className="text-secondary2-100 logo text-7xl">Loading</h1>
        </div>
      )}
    </>
  );
}

export default AdminBook;
