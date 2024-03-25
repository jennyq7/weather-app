import './App.scss';
import HomePage from './pages/HomePage/HomePage.js';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Route path="/" element={<HomePage/>}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
