import './App.css';

import HeroSection from './components/HeroSection'
import StoreListings from './components/StoreListings';
import TopBar from './components/TopBar'



function App() {
  return (
    <div className="App">
      <TopBar />
      <HeroSection />
      <StoreListings />
    </div>
  )
}

export default App;
