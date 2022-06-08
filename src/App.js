// import './App.css';
import '../src/style.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import Contact from './components/contact';

function App() {
  return (
    <div className="page">
      {/* <Navbar />
      <Hero />
      <Card /> */}
      <Contact 
      title="Life Lessons with Mr Githinji"
      price= "$123"
      />
      <Contact
       title="Life Lessons with Mr Kimathi"
       price= "$213"
      />
      <Contact
       title="Life Lessons with Mr Kuria"
       price= "$312"
      />
    </div>
  );
}

export default App;
