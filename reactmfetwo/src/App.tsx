import React, { Suspense } from 'react';

// Dynamically import the component from reactmfeone
const RemoteComponent = React.lazy(() => import('reactmfeone/App'));

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Main App (ReactMFE2)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteComponent />
      </Suspense>
    </div>
  );
};

export default App;
