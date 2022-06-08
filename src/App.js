// import './App.css';
import '../src/style.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
