import { BrowserRouter, Link } from "react-router-dom";
import RoutesCom from "./routes/RoutesCom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

function App() {
  const isAuthenticated = false;

  return (
    <>
      <BrowserRouter>
        {/* For Sign Up Notify Para */}
        {!isAuthenticated && (
          <p className="bg-black text-white text-center text-xs p-2 ">
            Sign up and get 20% off to your first order.{" "}
            <Link to={"/signup"} className="underline font-bold">
              Sign Up Now
            </Link>
          </p>
        )}
        <Navbar />
        <Header />
        <RoutesCom />
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
