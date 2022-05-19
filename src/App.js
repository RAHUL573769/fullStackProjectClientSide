import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Appointment from "./Components/Appointment/Appointment";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import RequireA from "./Components/Protected/RequireA";
import Register from "./Components/Register/Register";
import Review from "./Components/Review/Review";
import Header from "./Components/Shared/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dash from "./Components/Dashboard/Dash";
import MyAppointments from "./Components/Dashboard/MyAppointments";
import MyReview from "./Components/Dashboard/MyReview";

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/appointment"
            element={
              <RequireA>
                <Appointment></Appointment>
              </RequireA>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <RequireA>
                <Dash></Dash>
              </RequireA>
            }
          >
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
          </Route>
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          {/* <Route path="/signup" element={<Register></Register>}</Route> */}
        </Routes>
      </Header>

      <ToastContainer />
    </div>
  );
}

export default App;
