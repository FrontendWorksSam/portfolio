// import logo from './logo.svg';
import './App.css';
import FlipCard from './Components/Flipcard';
import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';
import CardSlider from './Components/CardSlider';
import Timeline from './Components/Timeline';


function App() {
  return (
    <div className="App">
      
      <MainPage
      FlipCard={FlipCard}
      CardSlider={CardSlider}
      Timeline={Timeline}
      
      />
      <Navbar/>
      
    </div>
  );
}

export default App;
