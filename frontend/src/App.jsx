import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import Committee from "./pages/committee/Committee";
import Staff from "./pages/staff/Staff";
import Alumni from "./pages/alumni/Alumni";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Post from "./pages/blogs/Blogs";
import Blogs from "./pages/blogs/BlogsTest";
import Ihsas from "./pages/ihsas/Ihsas";
import Events from "./pages/events/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/staffs" element={<Staff/>}/>
        <Route path="/ihsas" element={<Ihsas />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/department" element={<Alumni/>}/>
        <Route path="/post" element={<Alumni />}/>
        <Route path="/blogs" element={<Alumni />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/events" element={<Events />}/>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
