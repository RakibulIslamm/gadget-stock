import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
