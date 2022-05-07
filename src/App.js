import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import ManageInventory from "./ManageInventory/ManageInventory";
import MyProduct from "./Pages/MyProduct/MyProduct";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/inventory-details/:id" element={<PrivateRoute>
          <InventoryDetails />
        </PrivateRoute>} />
        <Route path="/add-product" element={<PrivateRoute>
          <AddProduct />
        </PrivateRoute>} />
        <Route path="/manage-inventory" element={<PrivateRoute>
          <ManageInventory />
        </PrivateRoute>} />
        <Route path="/my-product" element={<PrivateRoute>
          <MyProduct />
        </PrivateRoute>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
