import './App.css';
import NavBar from './components/NavBar/NavBar'
import ComponenteContenedor from './components/container/ComponenteContenedor';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ComponenteContenedor />
      </header>
    </div>
  );
}

export default App;
