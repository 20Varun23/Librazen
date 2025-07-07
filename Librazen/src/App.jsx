import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center text-xl px-5">
      <h1 className="text-secondary2-100 logo text-8xl my-2">
        Welcome to Librazen
      </h1>
      <div className="bg-secondary-100 p-4 rounded-2xl ">
        <p className="">
          We are delighted to have you here and excited to introduce you to our
          state-of-the-art Library Management System (LMS) , Librazen. This
          platform is meticulously designed to cater to all your library needs,
          ensuring a seamless and efficient experience for both library staff
          and patrons. Whether you're a dedicated librarian managing an
          extensive collection, a student in search of academic resources, or an
          avid reader exploring new literary worlds, our LMS provides the tools
          and features to support your journey. With a user-friendly interface
          and robust functionality, our system aims to enhance the way you
          interact with our library, making it easier than ever to find, borrow,
          and manage books and other resources. Dive in to discover a world of
          information and adventure, right at your fingertips.
        </p>
      </div>
      <div className="flex flex-col text-center bg-secondary-100 my-2 min-w-[50%] rounded-2xl">
        <div>
          <div className="my-2">The genre of books we have</div>
        </div>
        <div>
          <div className="my-2">
            <ul>
              <li>
                <u>Fiction</u>
              </li>
              <li>Contemporary Fiction</li>
              <li>Historical Fiction</li>
              <li>Literary Fiction</li>
              <li>Mystery</li>
            </ul>
          </div>
          <div className="my-2">
            <ul>
              <li>
                <u>Non-Fiction</u>
              </li>
              <li>Biography</li>
              <li>Memoir</li>
              <li>Self-Help</li>
              <li>Health & Wellness</li>
            </ul>
          </div>
          <div>
            <div className="my-2">And much more...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
