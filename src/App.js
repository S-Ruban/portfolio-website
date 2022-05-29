import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './Contact';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
