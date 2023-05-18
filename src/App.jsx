import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBarJordan"
import Navbar2 from "./components/NavBarNike"

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Navbar2/>
            <ItemListContainer/>
        </div>
    )
}

export default App