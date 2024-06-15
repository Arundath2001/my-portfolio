import './App.css';
import NavbarTop from './components/NavbarTop';
import Homemain from './components/Homemain';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import Linenavbar from './components/Linenavbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavbarTop />

      <Homemain />

      <Techstack />

      <Projects />

      <Linenavbar />

      <Contact />
    </div>
  );
}

export default App;
