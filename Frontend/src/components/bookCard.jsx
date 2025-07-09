import React from "react";
import { Link } from "react-router";
function BookCard({ book, editPage = false }) {
  return (
    <div className="bg-blue-300 flex flex-col justify-between items-center text-black p-3 rounded-xl w-[20vw] text-center m-5">
      <div>
        <h4 className="text-3xl logo">{book.name}</h4>
        <h5 className="text-xl">{book.author}</h5>
        <h6 className="text-xl">{book.genre}</h6>
        <p className="text-lg">{book.info}</p>
      </div>

      {editPage && (
        <div className="mt-auto flex flex-wrap justify-center">
          <Link
            to={`/editBook/${book.id}`}
            className="bg-blue-500 hover:bg-blue-800 p-2 rounded-2xl m-2 border-2 border-black"
          >
            Edit
          </Link>
          <Link
            to={`/delBook/${book.id}`}
            className="bg-red-500 hover:bg-red-700 p-2 rounded-2xl m-2 border-2 border-black"
          >
            Delete
          </Link>
          {!book.issued ? (
            <Link
              to={`/issueB/${book.id}`}
              className="bg-green-500 hover:bg-green-800 p-2 rounded-2xl m-2 border-2 border-black"
            >
              Issue
            </Link>
          ) : (
            <Link
              to={`/returnB/${book.id}`}
              className="bg-yellow-300 hover:bg-yellow-500 p-2 rounded-2xl m-2 border-2 border-black"
            >
              Return
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default BookCard;
