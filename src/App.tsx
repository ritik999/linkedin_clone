import Header from "./components/Header";
import Main from "./pages/Main";
import "./App.css";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

const App = () => {
  const { user } = useSelector((state: any) => state.custom);
  return (
    <>
      <div className="app">
        <Header />

        {!user ? <Login /> : <Main />}
      </div>
    </>
  );
};

export default App;
