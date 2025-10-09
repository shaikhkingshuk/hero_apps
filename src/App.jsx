import { Outlet, useNavigation } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Spinner from "./Components/Spinner";
import { ToastContainer } from "react-toastify";
// import { ToastContainer } from "react-toastify";

function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="bg-[#E9E9E9]">
      <Navbar></Navbar>
      {isNavigating && <Spinner></Spinner>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
