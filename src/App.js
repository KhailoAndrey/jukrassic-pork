import NotFoundComponent from 'components/NotFound/NotFoundComponent';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';

const HomePage = lazy(()=> import('./pages/HomePage'))
const MusicPage = lazy(()=> import('./pages/MusicPage'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/music' element={<MusicPage />} />
        <Route path='*' element={<NotFoundComponent/>} />
      </Routes>
      </Suspense>
      
    </div>
  );
}

export default App;
