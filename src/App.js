import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarTop from './components/NavbarTop';
import Homemain from './components/Homemain';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import Linenavbar from './components/Linenavbar';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarTop />

        <div className='main'>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Homemain />
                <Techstack />
                <Projects />
              </>
            } 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Linenavbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
