import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import ContextProvider from "./Pages/ContextProvider/ContextProvider";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <ContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
