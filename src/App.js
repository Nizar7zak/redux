import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
