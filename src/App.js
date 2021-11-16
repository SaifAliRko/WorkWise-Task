import Home from "../src/components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="w-11/12 mx-auto my-32">
        <Home />
      </div>
    </>
  );
}

export default App;
