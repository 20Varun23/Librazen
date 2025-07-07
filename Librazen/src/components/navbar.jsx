import React from "react";
import { Link } from "react-router";

function NavBar() {
  return (
    <div className="text-xs flex flex-row justify-between items-center p-2 bg-secondary2-100 text-black">
      {/* left */}
      <a href="/">
        <p className="justify-self-start text-3xl logo text-primary2-100">
          Librazen
        </p>
      </a>

      {/* right */}
      <div className="flex flex-row justify-self-end">
        <a href="/login">
          <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
            Login
          </p>
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="/admin">
          <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
            Admin
          </p>
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="/signup">
          <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
            Sign Up
          </p>
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="/leaderBoard">
          <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
            Leaderboard
          </p>
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="/booklist">
          <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
            Booklist
          </p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
