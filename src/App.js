import { Routes, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage';
import BeerList from './pages/BeerList'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import SingleBeer from './pages/SingleBeer'



function App() {


  return (
    <div className="App">


      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/beers' element={<BeerList />} />
        <Route path='/beer/:id' element={<SingleBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />

      </Routes>
    </div>
  );
}

export default App;
