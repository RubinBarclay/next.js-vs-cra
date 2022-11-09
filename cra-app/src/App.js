import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LoremIpsum from './pages/LoremIpsum';
import CatFact from "./pages/CatFact";
import Pug from "./pages/Pug";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Lorem ipsum</Link>
        <Link to="/cat-fact">Cat fact</Link>
        <Link to="/pug">Pug picture</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LoremIpsum />} />
        <Route path="/cat-fact" element={<CatFact />} />
        <Route path="/pug" element={<Pug />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
