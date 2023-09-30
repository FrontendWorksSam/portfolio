// import logo from './logo.svg';
import './App.css';
import FlipCard from './Components/Flipcard';
import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';
import CardSlider from './Components/CardSlider';


function App() {
  return (
    <div className="App">
      
      <MainPage
      FlipCard={FlipCard}
      CardSlider={CardSlider}
      
      />
      <Navbar/>
      
    </div>
  );
}

export default App;
