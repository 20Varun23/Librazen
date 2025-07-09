import "./App.css";
import BarGraph from "./components/BarGraph";
function App() {
  return (
    <div className="flex flex-col items-center text-xl px-5">
      <div className="typewriter">
        <h1 className="text-secondary2-100 logo  text-8xl my-2">
          Welcome to Librazen
        </h1>
      </div>

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
      <div className="flex flex-row items-center text-3xl">
        <div className="flex flex-col w-[20%] items-center mx-10">
          <div className="bg-secondary-100 text-secondary2-100 logo  text-center w-[100%] p-3 rounded-2xl my-2">
            Mystery
          </div>{" "}
          <div className="text-secondary-100 bg-secondary2-100 logo text-center w-[100%]  p-3 rounded-2xl my-2">
            Literary Fiction
          </div>{" "}
          <div className="bg-secondary-100 text-secondary2-100 logo text-center w-[100%]  p-3 rounded-2xl my-2">
            Historical Fiction
          </div>
          <div className="text-secondary-100 bg-secondary2-100 logo text-center w-[100%]  p-3 rounded-2xl my-2">
            Contemporary Fiction
          </div>{" "}
        </div>

        <div className="flex flex-col w-[72%] items-center">
          <div className="typewriter">
            <h1 className="text-secondary2-100 logo text-6xl my-4">
              Genre of Books
            </h1>
          </div>
          <BarGraph />
        </div>

        <div className="flex flex-col w-[20%] items-center mx-10">
          <div className="text-secondary-100 bg-secondary2-100 logo text-center w-[100%]  p-3 rounded-2xl my-2">
            Biography
          </div>{" "}
          <div className="bg-secondary-100 text-secondary2-100 logo text-center w-[100%]  p-3 rounded-2xl my-2">
            Memoir
          </div>
          <div className="text-secondary-100 bg-secondary2-100 logo text-center w-[100%]  p-3 rounded-2xl my-2">
            Self-Help
          </div>{" "}
          <div className="bg-secondary-100 text-secondary2-100 logo text-center w-[100%]  p-3 rounded-2xl my-2">
            Health & Wellness
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default App;
