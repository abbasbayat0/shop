import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App w-full h-[200vh] flex items-center justify-center bg-black -z-10">
      {/* background image */}
      <img src={require("./images/background.jpg")} alt="background" className="opacity-50 fixed top-1/3"></img>

      <Nav />
      <Home />
    </div>
  );
}

export default App;
