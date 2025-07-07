import React from "react";

function BookCard(params) {
  return (
    <div className="bg-blue-300 flex flex-col items-center text-black p-3 rounded-xl w-[25%]">
      <h4 className="text-3xl">{params.name}</h4>
      <h5 className="text-2xl">{params.author}</h5>
      <h6 className="text-xl">{params.genre}</h6>
      <p className="text-lg">{params.info}</p>
    </div>
  );
}

export default BookCard;

//[ ]: add buttons if required
