import React from "react";

//for leaderboard for users and books

function table({ params }) {
  return (
    <div>
      <h4></h4>
      <table>
        <tr>
          <td>Name</td>
          <td>Points</td>
        </tr>
        {data.map((el) => {
          return (
            <tr>
              <td>{el.name}</td>
              <td>{el.points}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default table;
