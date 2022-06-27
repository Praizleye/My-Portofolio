import './App.css';

// importing components 
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Home/>
     <Skills/>
     <About/>
     <Work/>
     <Footer/>
    </div>
  );
}

export default App;
