import React from "react";

//for leaderboard for users

function Table({ data }) {
  return (
    <div>
      <br />
      <br />
      <br />

      <table className="m-5">
        <tbody>
          <tr className="px-10 py-5 bg-secondary-100">
            <td className="px-20 py-5 text-center rounded-tl-2xl">Name</td>
            <td className="px-20 py-5 text-center rounded-tr-2xl">Points</td>
          </tr>
          {data.map((el) => {
            return (
              <tr
                key={el.name}
                className="p-5 bg-secondary2-100 text-center text-black"
              >
                <td className="py-5 px-20 ">{el.name}</td>
                <td className="py-5 px-20 ">{el.books_read}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
