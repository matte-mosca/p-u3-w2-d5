import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import ComponentNavbar from "./components/Navbar";
import ComponentMain from "./components/Main";
import ComponentSearchBar from "./components/SearchBar";
import { useState } from "react";
import ComponentDetail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSearchSubmit = (city, countryCode) => {
    setCity(city);
    setCountryCode(countryCode);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          
          <ComponentNavbar />
        </header>

        <main className="App-header">
          <Routes>
            <Route
              element={
                <>
                  <ComponentSearchBar onSubmit={handleSearchSubmit} />
                  <ComponentMain city={city} countryCode={countryCode} />
                </>
              }
              path="/"
            />
          </Routes>
          <Routes>
            <Route
              element={
                <ComponentDetail city={city} countryCode={countryCode} />
              }
              path="/detail"
            />
          </Routes>
        </main>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
