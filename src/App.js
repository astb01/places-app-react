import './App.css';

function App() {
  let version = 'Demo'
  if (window['appConfig']) {
    version = window['appConfig'].version;
  }

  return (
    <div className="App">
      Places App

      <h3>Version: {version}</h3>
    </div>
  );
}

export default App;
