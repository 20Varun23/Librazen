//[ ]: add functionality
import React from "react";

function DeleteBook() {
  return (
    <div className="flex flex-col items-center text-xl  my-2 h-[90vh] justify-center">
      <h1 className="text-secondary2-100 logo text-7xl my-1">Deleting book</h1>
      <div className="flex flex-col bg-secondary-100 p-5 rounded-2xl items-center">
        <p className="text-2xl">Are you sure you want to delete this book?</p>
        <div className="flex flex-row justify-center">
          <button className="bg-red-500 hover:bg-red-700 p-2.5 rounded-xl m-4">
            Delete Book
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 p-2.5 rounded-xl m-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
