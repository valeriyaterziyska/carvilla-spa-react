import logo from './logo.svg';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>

        <Footer />
      </header>
    </div>
  );
}

export default App;
