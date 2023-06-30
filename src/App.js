import NotFoundComponent from 'components/NotFound/NotFoundComponent';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Audio } from  'react-loader-spinner'


const HomePage = lazy(()=> import('./pages/HomePage'))
const MusicPage = lazy(()=> import('./pages/MusicPage'))

function App() {
  return (
    <div>
      <Suspense fallback={<div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "#131313"}}><Audio
    height="100"
        width="100"
  color="#00fe00"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
  /></div>}>
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
