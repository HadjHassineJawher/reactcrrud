import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./components/Addbook";
import Home from "./components/Home";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/createbook" element={<AddBook />} />
            <Route exact path="/updatebook" element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
