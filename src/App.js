import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const HomePage = lazy(()=> import('./pages/HomePage'))
const MusicPage = lazy(()=> import('./pages/MusicPage'))

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/music' element={<MusicPage/>} />
      </Routes>
    </div>
  );
}

export default App;
