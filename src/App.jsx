import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Memes from "./Components/Memes"; // Assuming you have a Memes component
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos"; // Assuming you have a Todos component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/memes" element={<Memes />} />
      </Routes>
    </>
  );
}

export default App;
