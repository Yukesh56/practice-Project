import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import FormPage from './components/Form.jsx';
import GridPage from './components/Grid.jsx';
import Loader from './loader.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<FormPage />}></Route>
          <Route path='/table' element={<GridPage />}></Route>
          <Route path='/loader' element={<Loader />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
