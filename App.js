import Topo from './default-files/topo/topo';
import Rodape from './default-files/rodape/rodape';
import Rotas from './rotas/rotas';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topo />
        <Rotas />
        <Rodape />
      </div>
     </BrowserRouter>
  );
}

export default App;
