import './App.css';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        STARWARS STARSHIPS
      </header>
      <div className="App">
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
