import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBarJordan";
import Navbar2 from "./components/NavBarNike";
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;