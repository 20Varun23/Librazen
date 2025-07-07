import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/footer.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Admin from "./pages/Admin.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Booklist from "./pages/Booklist.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import AddBook from "./pages/AddBook.jsx";
import UpdateProfile from "./pages/UpdateProfile.jsx";
import IssueBook from "./pages/IssueBook.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DeleteProfile from "./pages/DeleteProfile.jsx";
import Logout from "./pages/Logout.jsx";

createRoot(document.getElementById("root")).render(
  <div className="flex flex-col min-h-[100vh] w-[100vw]">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/leader" element={<Leaderboard />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/delBook" element={<DeleteBook />} />
        <Route path="/editBook" element={<EditBook />} />
        <Route path="/updateP" element={<UpdateProfile />} />
        <Route path="/issueB" element={<IssueBook />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/delP" element={<DeleteProfile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);
