import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <header className=" border-black w-full justify-between flex items-center border-b bg-black sm:px-8 px-4 py-4 border-r[#e6ebf4] ">
        <Link to={"/"}>
          <img
            className=" h-[27.5px] w-28 object-cover"
            src="./Images/GenZAI_(1)-transformed (1).png"
          />
        </Link>
        <Link
          to={"/create-post"}
          className=" text-white px-4 py-2 rounded-md font-inter bg-[#4649ff] font-medium "
        >
          Create
        </Link>
      </header>
      <main className=" sm:p-8 px-4 py-8 bg-[#2A3132] w-full min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
