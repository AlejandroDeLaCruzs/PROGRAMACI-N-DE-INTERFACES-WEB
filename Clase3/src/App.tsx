import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { InfoCharacters } from "./home";
import Detail from "./detali";


export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<InfoCharacters />} />
        <Route path="character/:id" element={<Detail />} />
        <Route path="locations" element={<Detail />} />
        <Route path="locations/:id" element={<Detail />} />
        <Route path="episode" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Characters</button>
      <button onClick={() => navigate("/locations")}>Locations</button>
      <button onClick={() => navigate("/episode")}>Episodes</button>
    </div>
  );
};
