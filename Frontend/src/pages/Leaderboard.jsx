import React from "react";
import axios from "axios";
import Table from "../components/table";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import backend_link from "../../environment.js";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getLeaderBoard() {
      try {
        const res = await axios.get(`${backend_link}/users/leaderboard`);

        const leaderboard = [];

        for (let i = 0; i < Math.min(10, res.data.length); i++) {
          leaderboard.push(res.data[i]);
        }

        setUsers(leaderboard);
      } catch (err) {
        console.log(err);
        toast.error("Please reload the page once");
      }
    }

    getLeaderBoard();
  }, []);

  return (
    <>
      {users.length ? (
        <div className="flex flex-col items-center text-xl px-5 my-2">
          <h1 className="text-secondary2-100 logo text-7xl">Leaderboard</h1>
          <Table data={users} />
        </div>
      ) : (
        <div className="flex flex-col items-center text-xl px-5 my-2">
          <h1 className="text-secondary2-100 logo text-7xl">Loading</h1>
        </div>
      )}
    </>
  );
}

export default Leaderboard;
