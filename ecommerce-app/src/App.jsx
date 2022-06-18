import './App.css';
import NavBar from 'components/NavBar'
import ComponenteContenedor from './container/ComponenteContenedor';
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
