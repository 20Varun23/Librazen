import React from "react";
import BookCard from "../components/bookCard";

function IssueBook() {
  return (
    <div className="flex flex-col items-center text-xl px-5 my-2">
      <h1 className="text-secondary2-100 logo text-7xl">
        Issue Book Confirmation
      </h1>
      <br />
      <br />
      <BookCard></BookCard>

      <br />
      <br />

      <div className="flex flex-row">
        <button className="m-2 p-2 bg-green-500 hover:bg-green-700 rounded-xl">
          Issue book
        </button>
        <button className="m-2 p-2 bg-red-500 hover:bg-red-700 rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  );
}

//[ ]: add functionality

export default IssueBook;
