import NotFoundComponent from 'components/NotFound/NotFoundComponent';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Bars } from 'react-loader-spinner';
import { LanguageProvider } from 'utils/LanguageContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const MusicPage = lazy(() => import('./pages/MusicPage'));

function App() {
  return (
    <LanguageProvider>
      <div>        
      <Suspense
        fallback={
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#131313',
            }}
          >
            <Bars
              height="150"
              width="150"
              color="var(--main-accent-text-clr)"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        }
        >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </Suspense>
      </div>      
    </LanguageProvider>
    
  );
}

export default App;
