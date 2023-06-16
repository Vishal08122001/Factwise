import "./App.css";
import Home from "./Pages/Home";
// import Modal from "./components/Modal";
import { CelebritiesProvider } from "./context/CelebrityContext";

function App() {
  return (
    <CelebritiesProvider>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Home />
      </div>
    </CelebritiesProvider>
  );
}

export default App;
