import './App.css';
import './scss/styles.css';
import Navbar from './utils/Navbar';
import ItemListContainer from './utils/ItemListCointainer';

function App() {
  return (
    <header>
      <Navbar/>
      <ItemListContainer/>
      <br/>
      <p className="App"><strong>*Página en desarrollo...</strong></p>
    </header>
  );
}

export default App;