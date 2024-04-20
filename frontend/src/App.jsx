import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
