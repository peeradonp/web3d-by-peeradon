import { Fragment, Suspense } from 'react';
import MainPage from './components/mainpage';

function App() {
  return (
    <Suspense fallback="...is loading">
      <Fragment>
        <MainPage />
      </Fragment>
    </Suspense>
  );
}

export default App; 