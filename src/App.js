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
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          {/* <Route path="/signup" element={<Register></Register>}</Route> */}
        </Routes>
      </Header>
    </div>
  );
}

export default App;
