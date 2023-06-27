import NotFoundComponent from 'components/NotFound/NotFoundComponent';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const HomePage = lazy(()=> import('./pages/HomePage'))
const MusicPage = lazy(()=> import('./pages/MusicPage'))

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/music' element={<MusicPage />} />
        <Route path='*' element={<NotFoundComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
