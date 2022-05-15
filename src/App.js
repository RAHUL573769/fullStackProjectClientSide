import About from "./Components/About/About";
import Appointment from "./Components/Appointment/Appointment";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Review from "./Components/Review/Review";
import Header from "./Components/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header>
        <Home></Home>
        <About></About>
        <Appointment></Appointment>
        <Review></Review>
        <ContactUs></ContactUs>
        <Login></Login>
      </Header>
    </div>
  );
}

export default App;
