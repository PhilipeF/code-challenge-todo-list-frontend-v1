import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello Versão PhilipeF</h1>
      {process.env.REACT_APP_BASE_URL}
    </div>
  );
}

export default App;
