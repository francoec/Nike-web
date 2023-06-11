import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBarJordan";
import Navbar2 from "./components/NavBarNike";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Navbar2 />
        <Routes>
          <Route path="/catalogue" element={<ItemListContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;