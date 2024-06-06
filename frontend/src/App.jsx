import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import Committee from "./pages/committee/Committee";
import Staff from "./pages/staff/Staff";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Post from "./pages/blogs/Blogs";
import Blogs from "./pages/blogs/BlogsTest";
import Ihsas from "./pages/ihsas/Ihsas";
import Events from "./pages/events/Events";
import UnderMaintenance from "./pages/underMaintenance/UnderMaintenance";
import Department from "./pages/department/Department";
import Admin from "./pages/admin/Admin";
import Subscribers from "./pages/admin/Subscribers";
import Inbox from "./pages/admin/Inbox";
import CommitteeList from "./pages/admin/CommitteeList";
import IhsasList from "./pages/admin/IhsasList";
import StaffsList from "./pages/admin/StaffsList";
import DepartmentList from "./pages/admin/DepartmentList";
import GalleryImg from "./pages/admin/GalleryImg";
import EventLists from "./pages/admin/EventLists";
import Login from "./pages/login/Login";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/staffs" element={<Staff/>}/>
        <Route path="/ihsas" element={<Ihsas />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/department" element={<Department/>}/>
        <Route path="/post" element={<UnderMaintenance />}/>
        <Route path="/blogs" element={<UnderMaintenance />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/login" element={authUser? <Navigate to="/admin" /> : <Login/>}/>
        <Route path="/admin" element={authUser? <Admin/> : <Navigate to="/login" />}/>
        <Route path="/admin/subscribers" element={authUser? <Subscribers/> : <Navigate to="/login" />}/>
        <Route path="/admin/inbox" element={authUser? <Inbox/> : <Navigate to="/login" />}/>
        <Route path="/admin/committee" element={authUser? <CommitteeList/> : <Navigate to="/login" />}/>
        <Route path="/admin/ihsas" element={authUser? <IhsasList/> : <Navigate to="/login" />}/>
        <Route path="/admin/staffs" element={authUser? <StaffsList/> : <Navigate to="/login" />}/>
        <Route path="/admin/department" element={authUser? <DepartmentList/> : <Navigate to="/login" />}/>
        <Route path="/admin/gallery" element={authUser? <GalleryImg/> : <Navigate to="/login" />}/>
        <Route path="/admin/events" element={authUser? <EventLists/> : <Navigate to="/login" />}/>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
