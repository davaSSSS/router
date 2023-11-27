import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/home";

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="about-page" element={ <About/> }/>
      <Route path="contact-page" element={ <Contact/> }/>
      <Route path="home-page" element={ <Home/> }/>
    </Routes>
    </div>
  );
}

export default App;
