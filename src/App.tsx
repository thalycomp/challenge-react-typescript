import React from 'react';
import Main from './pages/Main';
import { AppProvider } from './hooks/context';

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
