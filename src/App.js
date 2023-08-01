import { AllRoutes } from "./AllRoutes.jsx";
import { Navbar } from "./Components/Navbar.jsx";
import { Footer } from "./Components/Footer.jsx";
import "./styles.css";
import { FootInfo } from "./Components/FootInfo.jsx";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <FootInfo />
      <Footer />
    </div>
  );
}