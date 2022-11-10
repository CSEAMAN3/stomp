import "./reset.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import StompData from "./pages/StompData/StompData";
import SearchResults from "./pages/SearchResults/SearchResults";
import MemberProfile from "./pages/MemberProfile/MemberProfile";
import { Auth0Provider } from "@auth0/auth0-react";
import StompDetails from "./pages/StompDetails/StompDetails";

function App() {
  return (
    <Auth0Provider
      domain="dev-o4kmnqppcc060cls.us.auth0.com"
      clientId="eE9Eoc6SFSLcUKIEoyEUSrWYCM8npmZ4"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stompdata" element={<StompData />} />
            <Route path="/search/:tag" element={<SearchResults />} />
            <Route path="memberprofile" element={<MemberProfile />} />
            <Route path="/stompdetails/:id" element={<StompDetails />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
