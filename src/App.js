import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-base-100 px-8 md:px-16">
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/advertisement" element={<Home></Home>}></Route>
        <Route path="/publishers" element={<Home></Home>}></Route>
        <Route path="/influencer" element={<Home></Home>}></Route>
        <Route path="/formats" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
