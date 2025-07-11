import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function NavBar() {
  const [userLogged, setUserLogged] = useState(false);
  const [adminLogged, setAdminLogged] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce((acc, current) => {
      const [key, value] = current.split("=");
      acc[key] = value;
      return acc;
    }, {});

    if (cookies.isLoggedIn) {
      setUserLogged(true);
    }

    if (cookies.isAdmin) {
      setAdminLogged(true);
    }
  }, []);

  return (
    <div className="text-xs flex flex-row justify-between items-center p-2 bg-secondary2-100 text-black">
      {/* left */}
      <Link to="/">
        <p className="justify-self-start text-3xl logo text-primary2-100">
          Librazen
        </p>
      </Link>

      {/* right */}
      <>
        {!adminLogged && !userLogged ? (
          <div className="flex flex-row justify-self-end">
            <Link to="/login">
              <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                Login
              </p>
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="/admin">
              <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                Admin
              </p>
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="/signup">
              <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                Sign Up
              </p>
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="/leader">
              <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                Leaderboard
              </p>
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="/booklist">
              <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                Booklist
              </p>
            </Link>
          </div>
        ) : (
          <>
            {userLogged ? (
              <div className="flex flex-row justify-self-end">
                <Link to="/logout" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Logout
                  </p>
                </Link>
                <Link to="/leader" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Leaderboard
                  </p>
                </Link>
                <Link to="/dashboard" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Dashboard
                  </p>
                </Link>
                <Link to="/updateP" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Update profile
                  </p>
                </Link>
                <Link to="/booklist" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    BookList
                  </p>
                </Link>
              </div>
            ) : (
              <div className="flex flex-row justify-self-end">
                <Link to="/addBook" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Add Book
                  </p>
                </Link>
                <Link to="/adminBook" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    View Books
                  </p>
                </Link>
                <Link to="/adminLogout" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Logout
                  </p>
                </Link>
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
}

export default NavBar;
