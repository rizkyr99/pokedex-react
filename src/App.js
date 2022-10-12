import './App.css';
import Topbar from './components/Topbar';

import BottomBar from './components/BottomBar';
import { Route, Routes } from 'react-router-dom';
import PokemonPage from './pages/PokemonPage';
import NavMenu from './components/NavMenu';
import PokemonDetailPage from './pages/PokemonDetailPage';

function App() {
  return (
    <div className='bg-neutral-50'>
      <Topbar />
      <main className='grid lg:grid-cols-[275px,1fr] gap-x-3 mt-[110px] pb-16 sm:mt-[80px] p-3 xl:max-w-7xl xl:mx-auto'>
        <NavMenu />
        <Routes>
          <Route exact path='/' element={<PokemonPage />} />
          <Route path='/pokemon/:name' element={<PokemonDetailPage />} />
          <Route path='/compare' element={<PokemonPage />} />
        </Routes>
      </main>
      <BottomBar />
    </div>
  );
}

export default App;
