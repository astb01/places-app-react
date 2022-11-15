import './App.css';
import '@testing-library/jest-dom'

function App() {
  const version = window['appConfig']?.version || 'Demo'

  return (
    <div className="App">
      Places App

      <h3>Version: {version}</h3>
    </div>
  );
}

export default App;
