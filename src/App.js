import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import Food from "./screen/Food";
import French from "./screen/French";
import Italian from "./screen/Italian";
import German from "./screen/German";
import English from "./screen/English";
import Bakes from "./screen/Bakes";
import Contact from "./screen/Contact";
import Login from "./screen/Login";
import "./App.css";
import LoginContext from "./context";
import Selected from "./screen/selected";
import PrivateRoute from "./privateroute";

function App() {
  return (
    <>
      <LoginContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />}>
              <Route index element={<French />} />
              <Route path="french" element={<French />} />
              <Route path="italia" element={<Italian />} />
              <Route path="deutsch" element={<German />} />
              <Route path="english" element={<English />} />
            </Route>
            <Route path="/bakes" element={<Bakes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/select"
              index
              element={
                <PrivateRoute>
                  <Selected />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </LoginContext>
    </>
  );
}

export default App;
