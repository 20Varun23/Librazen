import React, { useEffect, useState } from "react";

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
      <a href="/">
        <p className="justify-self-start text-3xl logo text-primary2-100">
          Librazen
        </p>
      </a>

      {/* right */}
      <>
        {!adminLogged && !userLogged ? (
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
            <a href="/leader">
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
        ) : (
          <>
            {userLogged ? (
              <div className="flex flex-row justify-self-end">
                <a href="/logout" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Logout
                  </p>
                </a>
                <a href="/leader" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Leaderboard
                  </p>
                </a>
                <a href="/logout" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Dashboard
                  </p>
                </a>
                <a href="/updateP" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Update profile
                  </p>
                </a>
                <a href="/booklist" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    BookList
                  </p>
                </a>
              </div>
            ) : (
              <div className="flex flex-row justify-self-end">
                <a href="/addBook" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Add Book
                  </p>
                </a>
                <a href="/adminBook" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    View Books
                  </p>
                </a>
                <a href="/adminLogout" className="mx-2">
                  <p className="justify-self-end text-lg text-primary-100 bg-amber-600 p-1 rounded-lg border-2">
                    Logout
                  </p>
                </a>
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
}

export default NavBar;
