import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './Admin';
import Daftar from './Daftar';
import Updatesiswa from './Updatesiswa';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} > </Route>
          <Route path="/Daftar" element={<Daftar />} > </Route>
          <Route path="/Updatesiswa/:NIM" element={<Updatesiswa />} ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
