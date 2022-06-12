// import './App.css';
import '../src/style.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import Contact from './components/contact';
import image from './images/athlete.png'
import cardData from './data'

function App() {
  const cards = cardData.map(card =>{
    return (
      <div>
        {/* <Navbar />
        <Hero />
        <Card /> */}
        <Card
        key={card.id}
        // card={card}
        img="athlete.png"
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country="Kenya"
        title={card.title}
        price={card.price}
        openCount={card.openCount}
        location={card.location}
        className="experienceCard"
        />
        {/* <Contact 
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
        /> */}
      </div>
    );
  })
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <div className='cardSection'>
        {cards}
      </div>
      
    </div>
  )
  
}

export default App;
