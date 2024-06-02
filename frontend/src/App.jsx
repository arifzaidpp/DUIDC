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

function App() {
  const authAdmin = 1;
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
        <Route path="/admin" element={authAdmin? <Admin/> : <Navigate to="/" />}/>
        <Route path="/admin/subscribers" element={authAdmin? <Subscribers/> : <Navigate to="/" />}/>
        <Route path="/admin/inbox" element={authAdmin? <Inbox/> : <Navigate to="/" />}/>
        <Route path="/admin/committee" element={authAdmin? <CommitteeList/> : <Navigate to="/" />}/>
        <Route path="/admin/ihsas" element={authAdmin? <IhsasList/> : <Navigate to="/" />}/>
        <Route path="/admin/staffs" element={authAdmin? <StaffsList/> : <Navigate to="/" />}/>
        <Route path="/admin/department" element={authAdmin? <DepartmentList/> : <Navigate to="/" />}/>
        <Route path="/admin/gallery" element={authAdmin? <GalleryImg/> : <Navigate to="/" />}/>
        <Route path="/admin/events" element={authAdmin? <EventLists/> : <Navigate to="/" />}/>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
