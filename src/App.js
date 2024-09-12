import "./App.scss";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import "./custom-bootstrap/custom-bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <div className="container-fluid p-0">
      <div>
        <Navbar />
        <Intro />
      </div>
    </div>
  );
}

export default App;
