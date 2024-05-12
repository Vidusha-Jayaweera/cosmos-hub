import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./routes/Home";
import Explore from "./routes/Explore";
import Mars from "./routes/Mars";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mars" element={<Mars />} />
      </Routes>
    </>
  );
}

export default App;
