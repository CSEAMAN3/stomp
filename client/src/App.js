import "./reset.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import StompData from "./pages/StompData/StompData";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stompdata" element={<StompData />} />
          <Route path="/search/:location" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
