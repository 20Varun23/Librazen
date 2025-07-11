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
import { Toaster } from "react-hot-toast";
import AdminLogout from "./pages/AdminLogout.jsx";
import AdminBook from "./pages/AdminBook.jsx";
import ReturnBook from "./pages/ReturnBook.jsx";

createRoot(document.getElementById("root")).render(
  <div className="flex flex-col min-h-[100vh] w-[100vw]">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/leader" element={<Leaderboard />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/delBook/:id" element={<DeleteBook />} />
        <Route path="/editBook/:id" element={<EditBook />} />
        <Route path="/updateP" element={<UpdateProfile />} />
        <Route path="/issueB/:id" element={<IssueBook />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/delP" element={<DeleteProfile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminLogout" element={<AdminLogout />} />
        <Route path="/adminBook" element={<AdminBook />} />
        <Route path="/returnB/:id" element={<ReturnBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
    <Footer />
  </div>
);
