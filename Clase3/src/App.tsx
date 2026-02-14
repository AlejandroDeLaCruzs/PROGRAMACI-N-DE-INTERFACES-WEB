import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InfoCharacters } from "./Home";
import Detail from "./detali";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InfoCharacters />} />
        <Route path="character/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
};
